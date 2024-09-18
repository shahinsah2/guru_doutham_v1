// src/redux/slices/contactTypeSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axiosInstance from '../../services/axios';

// Thunks for async operations
export const fetchContactTypes = createAsyncThunk(
  'contactType/fetchContactTypes',
  async () => {
    const response = await axiosInstance.get('/contact-types');
    return response.data;
  }
);

export const createContactType = createAsyncThunk(
  'contactType/createContactType',
  async (newContactType) => {
    const response = await  axiosInstance.post('/contact-types', newContactType);
    return response.data;
  }
);

export const updateContactType = createAsyncThunk(
  'contactType/updateContactType',
  async ({ id, updatedContactType }) => {
    const response = await  axiosInstance.put(`/contact-types/${id}`, updatedContactType);
    return response.data;
  }
);

export const deleteContactType = createAsyncThunk(
  'contactType/deleteContactType',
  async (id) => {
    await  axiosInstance.delete(`/contact-types/${id}`);
    return id;
  }
);

const contactTypeSlice = createSlice({
  name: 'contactType',
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
        state.contactTypes = action.payload;
        state.loading = false;
      })
      .addCase(fetchContactTypes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(createContactType.fulfilled, (state, action) => {
        state.contactTypes.push(action.payload);
      })
      .addCase(updateContactType.fulfilled, (state, action) => {
        const index = state.contactTypes.findIndex((type) => type._id === action.payload._id);
        if (index !== -1) {
          state.contactTypes[index] = action.payload;
        }
      })
      .addCase(deleteContactType.fulfilled, (state, action) => {
        state.contactTypes = state.contactTypes.filter((type) => type._id !== action.payload);
      });
  },
});

export default contactTypeSlice.reducer;
