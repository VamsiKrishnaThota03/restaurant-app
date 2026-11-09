// Dynamic Expo config: adds runtime settings from the environment (or a local
// .env file) to `extra`, so no API key lives in the source code.
try {
  // eslint-disable-next-line global-require
  require('dotenv').config();
} catch {
  // dotenv is a dev dependency; ignore if it is not installed.
}

module.exports = ({ config }) => ({
  ...config,
  extra: {
    ...(config.extra || {}),
    yelpApiKey: process.env.YELP_API_KEY || '',
    yelpLocation: process.env.YELP_LOCATION || 'Ottawa',
  },
});
