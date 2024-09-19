// src/redux/slices/productCategorySlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axiosInstance from "../../services/axios";

// Fetch all product categories
export const fetchProductCategories = createAsyncThunk(
  "productCategories/fetchProductCategories",
  async () => {
    const response = await axiosInstance.get("/product-categories");
    return response.data;
  }
);

const productCategorySlice = createSlice({
  name: "productCategories",
  initialState: {
    productCategories: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchProductCategories.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchProductCategories.fulfilled, (state, action) => {
        state.loading = false;
        state.productCategories = action.payload;
      })
      .addCase(fetchProductCategories.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export default productCategorySlice.reducer;
