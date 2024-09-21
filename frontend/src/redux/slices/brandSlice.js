// src/redux/slices/brandSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

import axiosInstance from '../../services/axios';



// Fetch all brands
export const fetchBrands = createAsyncThunk('brands/fetchBrands', async () => {
  const response = await axiosInstance.get(`/brands`);
  return response.data;
});

// Create a new brand
export const createBrand = createAsyncThunk('brands/createBrand', async (brand) => {
  const response = await axiosInstance.post(`/brands`, brand);
  return response.data;
});

// Update a brand
export const updateBrand = createAsyncThunk('brands/updateBrand', async (brand) => {
  const { _id, ...data } = brand;
  const response = await axiosInstance.put(`/brands/${_id}`, data);
  return response.data;
});

// Delete a brand
export const deleteBrand = createAsyncThunk('brands/deleteBrand', async (brandId) => {
  await axiosInstance.delete(`/brands/${brandId}`);
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
