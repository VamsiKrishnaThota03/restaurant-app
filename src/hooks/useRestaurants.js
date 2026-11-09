import { useCallback, useRef, useState } from 'react';
import yelp, { hasApiKey } from '../api/yelp';
import { YELP_LOCATION } from '../config';

const errorMessage = (error) => {
  const status = error?.response?.status;
  if (status === 401 || status === 403) return 'The Yelp API key was rejected. Check YELP_API_KEY.';
  if (status === 429) return 'Too many requests to Yelp. Please try again in a moment.';
  if (!error?.response) return 'Could not reach Yelp. Check your internet connection.';
  return 'Something went wrong while loading restaurants.';
};

export default function useRestaurants() {
  const [results, setResults] = useState({ data: [], loading: false, error: null });
  const latest = useRef(0);

  const searchRestaurants = useCallback(async (searchTerm) => {
    if (!hasApiKey) {
      setResults({ data: [], loading: false, error: 'Add a Yelp API key: set YELP_API_KEY in .env and restart Expo.' });
      return;
    }
    const requestId = ++latest.current;
    setResults((prev) => ({ ...prev, loading: true, error: null }));
    try {
      const response = await yelp.get('/search', {
        params: { limit: 15, term: searchTerm, location: YELP_LOCATION },
      });
      // Ignore responses for searches that have since been replaced.
      if (requestId !== latest.current) return;
      setResults({ data: response.data.businesses || [], loading: false, error: null });
    } catch (error) {
      if (requestId !== latest.current) return;
      setResults({ data: [], loading: false, error: errorMessage(error) });
    }
  }, []);

  return [results, searchRestaurants];
}
