// src/redux/slices/taxSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../services/axios";

// Fetch all taxes
export const fetchTaxes = createAsyncThunk("taxes/fetchTaxes", async () => {
  const response = await axiosInstance.get("/taxes");
  return response.data;
});

const taxSlice = createSlice({
  name: "taxes",
  initialState: {
    taxes: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchTaxes.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchTaxes.fulfilled, (state, action) => {
        state.loading = false;
        state.taxes = action.payload;
      })
      .addCase(fetchTaxes.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default taxSlice.reducer;
