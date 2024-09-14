// src/redux/store.js

import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import { apiSlice } from './apiSlice'; // Import the API slice

export const store = configureStore({
  reducer: {
    // Add the auth reducer
    auth: authReducer,
    // Add the apiSlice reducer to handle API calls
    [apiSlice.reducerPath]: apiSlice.reducer,
  },
  // Add middleware for RTK Query
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(apiSlice.middleware),
});


