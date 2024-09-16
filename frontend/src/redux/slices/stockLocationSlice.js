// src/redux/slices/stockLocationSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../services/axios";

// Fetch all stock locations
export const fetchStockLocations = createAsyncThunk(
  "stockLocations/fetchStockLocations",
  async () => {
    const response = await axiosInstance.get("/stock-locations");
    return response.data;
  }
);

const stockLocationSlice = createSlice({
  name: "stockLocations",
  initialState: {
    stockLocations: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStockLocations.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchStockLocations.fulfilled, (state, action) => {
        state.loading = false;
        state.stockLocations = action.payload;
      })
      .addCase(fetchStockLocations.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default stockLocationSlice.reducer;
