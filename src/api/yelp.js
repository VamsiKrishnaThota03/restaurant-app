import axios from 'axios';
import { YELP_API_KEY } from '../config';

// The key comes from YELP_API_KEY at build time (see app.config.js / .env.example).
export const hasApiKey = Boolean(YELP_API_KEY);

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  timeout: 15000,
  headers: hasApiKey ? { Authorization: `Bearer ${YELP_API_KEY}` } : {},
});
