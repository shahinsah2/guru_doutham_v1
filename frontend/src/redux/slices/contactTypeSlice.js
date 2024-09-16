// src/redux/slices/contactTypeSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from "../../services/axios";

// Fetch all contact types
export const fetchContactTypes = createAsyncThunk('contactTypes/fetchContactTypes', async () => {
  const response = await axiosInstance.get('/contact-types');
  return response.data;
});

const contactTypeSlice = createSlice({
  name: 'contactTypes',
  initialState: {
    contactTypes: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchContactTypes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchContactTypes.fulfilled, (state, action) => {
        state.loading = false;
        state.contactTypes = action.payload;
      })
      .addCase(fetchContactTypes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default contactTypeSlice.reducer;
