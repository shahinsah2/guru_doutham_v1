import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import axiosInstance from "../../services/axios";

// Fetch Stock Locations
export const fetchStockLocations = createAsyncThunk("stockLocations/fetch", async () => {
  const response = await axiosInstance.get("/stock-locations");
  return response.data;
});

// Add Stock Location
export const createStockLocation = createAsyncThunk("stockLocations/create", async (newLocation) => {
  const response = await axiosInstance.post("/stock-locations", newLocation);
  return response.data;
});

// Update Stock Location
export const updateStockLocation = createAsyncThunk("stockLocations/update", async ({ id, updatedData }) => {
  const response = await axiosInstance.put(`/stock-locations/${id}`, updatedData);
  return response.data;
});

// Delete Stock Location
export const deleteStockLocation = createAsyncThunk("stockLocations/delete", async (id) => {
  await axiosInstance.delete(`/stock-locations/${id}`);
  return id;
});

const stockLocationSlice = createSlice({
  name: "stockLocations",
  initialState: {
    locations: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchStockLocations.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchStockLocations.fulfilled, (state, action) => {
        state.loading = false;
        state.locations = action.payload;
      })
      .addCase(fetchStockLocations.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(createStockLocation.fulfilled, (state, action) => {
        state.locations.push(action.payload);
      })
      .addCase(deleteStockLocation.fulfilled, (state, action) => {
        state.locations = state.locations.filter((location) => location.id !== action.payload);
      })
      .addCase(updateStockLocation.fulfilled, (state, action) => {
        const index = state.locations.findIndex((location) => location.id === action.payload.id);
        if (index !== -1) {
          state.locations[index] = action.payload;
        }
      });
  },
});

export default stockLocationSlice.reducer;
