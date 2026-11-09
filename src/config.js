import Constants from 'expo-constants';

const extra = Constants.expoConfig?.extra ?? Constants.manifest?.extra ?? {};

export const YELP_API_KEY = extra.yelpApiKey || '';
export const YELP_LOCATION = extra.yelpLocation || 'Ottawa';
