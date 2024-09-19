import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import axiosInstance from '../../services/axios';

// Async thunks for CRUD operations

// Fetch all taxes
export const fetchTaxes = createAsyncThunk('tax/fetchTaxes', async () => {
  const response = await axiosInstance.get('/taxes');
  return response.data;
});

// Add new tax
export const addTax = createAsyncThunk('tax/addTax', async (newTax) => {
  const response = await axiosInstance.post('/taxes', newTax);
  return response.data;
});

// Edit tax
export const editTax = createAsyncThunk('tax/editTax', async ({ id, updatedTax }) => {
  const response = await axiosInstance.put(`/taxes/${id}`, updatedTax);
  return response.data;
});

// Delete tax
export const deleteTax = createAsyncThunk('tax/deleteTax', async (id) => {
  await axiosInstance.delete(`/taxes/${id}`);
  return id;
});

const taxSlice = createSlice({
  name: 'tax',
  initialState: {
    taxes: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch taxes
      .addCase(fetchTaxes.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchTaxes.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.taxes = action.payload;
      })
      .addCase(fetchTaxes.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      // Add tax
      .addCase(addTax.fulfilled, (state, action) => {
        state.taxes.push(action.payload);
      })
      // Edit tax
      .addCase(editTax.fulfilled, (state, action) => {
        const index = state.taxes.findIndex((tax) => tax._id === action.payload._id);
        if (index !== -1) {
          state.taxes[index] = action.payload;
        }
      })
      // Delete tax
      .addCase(deleteTax.fulfilled, (state, action) => {
        state.taxes = state.taxes.filter((tax) => tax._id !== action.payload);
      });
  },
});

export default taxSlice.reducer;
