// src/redux/slices/brandSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/brands';

// Fetch all brands
export const fetchBrands = createAsyncThunk('brands/fetchBrands', async () => {
  const response = await axios.get(`${BASE_URL}`);
  return response.data;
});

// Create a new brand
export const createBrand = createAsyncThunk('brands/createBrand', async (brand) => {
  const response = await axios.post(`${BASE_URL}`, brand);
  return response.data;
});

// Update a brand
export const updateBrand = createAsyncThunk('brands/updateBrand', async (brand) => {
  const { _id, ...data } = brand;
  const response = await axios.put(`${BASE_URL}/${_id}`, data);
  return response.data;
});

// Delete a brand
export const deleteBrand = createAsyncThunk('brands/deleteBrand', async (brandId) => {
  await axios.delete(`${BASE_URL}/${brandId}`);
  return brandId;
});

const brandSlice = createSlice({
  name: 'brands',
  initialState: {
    brands: [],
    loading: false,
    error: null,
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchBrands.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBrands.fulfilled, (state, action) => {
        state.loading = false;
        state.brands = action.payload;
      })
      .addCase(fetchBrands.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(createBrand.fulfilled, (state, action) => {
        state.brands.push(action.payload);
      })
      .addCase(updateBrand.fulfilled, (state, action) => {
        const index = state.brands.findIndex((brand) => brand._id === action.payload._id);
        if (index !== -1) {
          state.brands[index] = action.payload;
        }
      })
      .addCase(deleteBrand.fulfilled, (state, action) => {
        state.brands = state.brands.filter((brand) => brand._id !== action.payload);
      });
  },
});

export default brandSlice.reducer;
