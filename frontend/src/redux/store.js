// src/redux/store.js
import { configureStore } from '@reduxjs/toolkit';
import roleReducer from './slices/roleSlice';
import branchReducer from './slices/branchSlice';
import userReducer from './slices/userSlice';
import contactTypeReducer from './slices/contactTypeSlice';
import taxReducer from './slices/taxSlice';
import brandReducer from './slices/brandSlice';
import productCategoryReducer from './slices/productCategorySlice';
import stockLocationReducer from './slices/stockLocationSlice';

export const store = configureStore({
  reducer: {
    roles: roleReducer,
    branches: branchReducer,
    users: userReducer,
    contactTypes: contactTypeReducer,
    taxes: taxReducer,
    brands: brandReducer,
    productCategories: productCategoryReducer,
    stockLocations: stockLocationReducer,
  },
});

export default store;
