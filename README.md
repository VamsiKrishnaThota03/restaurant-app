# Restaurant App (React Native)

An Expo / React Native app for finding restaurants by food category or search term, using the Yelp Fusion API.

![React Native](https://img.shields.io/badge/React_Native-0.71-61DAFB?logo=react&logoColor=black)
![Expo](https://img.shields.io/badge/Expo-SDK_48-000020?logo=expo&logoColor=white)
![Yelp API](https://img.shields.io/badge/data-Yelp_Fusion_API-D32323?logo=yelp&logoColor=white)

## Overview

The app has a single home screen. It shows a header, a search box, a horizontal row of food categories (Burger, Cake, Pasta, Pizza, Smoothies, Steak) and a list of matching restaurants. Picking a category or submitting a search term queries Yelp's `/businesses/search` endpoint (15 results, location `Ottawa`) through a custom `useRestaurants` hook built on axios.

## Features

- View the available food categories and tap one to load matching restaurants.
- Search for any restaurant or food term.
- Restaurant cards with the photo, name, rating and price level.
- A loading indicator and an error message while the request runs or if it fails.

## Screenshots

| Main | Search |
| ---- | ------ |
| ![Main screen](readme-res/main.jpg) | ![Search screen](readme-res/search.jpg) |

## Tech stack

- React Native 0.71, Expo SDK 48 (with web support through `react-native-web`)
- axios
- `@expo/vector-icons` (FontAwesome)
- Yelp Fusion API

## Project structure

```
restaurant-app/
├── App.js                  # renders HomeScreen
├── app.json                # Expo config
├── assets/                 # app icon, splash, favicon
├── readme-res/             # screenshots
└── src/
    ├── api/yelp.js         # axios instance for the Yelp API
    ├── hooks/useRestaurants.js
    ├── components/         # Header, Search, Categories, CategoryItem, Restaurants, RestaurentItem
    ├── data/db.js          # category list and icons
    ├── assets/images/      # category images
    └── screens/HomeScreen.js
```

## Getting started

### Prerequisites

- Node.js 16 or later and npm (or Yarn)
- The Expo Go app on a device, or an Android/iOS emulator
- A Yelp Fusion API key from https://www.yelp.com/developers

### Install

```bash
git clone https://github.com/VamsiKrishnaThota03/restaurant-app.git
cd restaurant-app
npm install
```

### Configure

Set your Yelp key in `src/api/yelp.js`. For anything beyond local testing, load it from config instead of hard-coding it:

| Setting        | File              | Example placeholder         |
| -------------- | ----------------- | --------------------------- |
| `YELP_API_KEY` | `src/api/yelp.js` | `Bearer <your-yelp-api-key>`|
| Search location| `src/hooks/useRestaurants.js` | `Ottawa`        |

### Run

| Command           | Description                                 |
| ----------------- | ------------------------------------------- |
| `npm start`       | Start the Expo dev server (`expo start`)    |
| `npm run android` | Open on an Android emulator or device       |
| `npm run ios`     | Open on the iOS simulator                   |
| `npm run web`     | Run in the browser                          |
