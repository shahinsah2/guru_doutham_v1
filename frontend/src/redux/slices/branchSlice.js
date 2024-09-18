// // src/redux/slices/branchSlice.js
// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// // Fetch all branches
// export const fetchBranches = createAsyncThunk(
//   "branches/fetchBranches",
//   async () => {
//     const response = await axios.get("/api/branches");
//     return response.data;
//   }
// );

// const branchSlice = createSlice({
//   name: "branches",
//   initialState: {
//     branches: [],
//     loading: false,
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchBranches.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchBranches.fulfilled, (state, action) => {
//         state.loading = false;
//         state.branches = action.payload;
//       })
//       .addCase(fetchBranches.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message;
//       });
//   },
// });

// export default branchSlice.reducer;

// src/redux/slices/branchSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api/branches'; 

// Fetch branches
export const fetchBranches = createAsyncThunk('branches/fetchBranches', async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
});

// Create branch
export const createBranch = createAsyncThunk('branches/createBranch', async (branchData) => {
  const response = await axios.post(BASE_URL, branchData);
  return response.data;
});

// Update branch
export const updateBranch = createAsyncThunk('branches/updateBranch', async ({ id, branchData }) => {
  const response = await axios.put(`${BASE_URL}/${id}`, branchData);
  return response.data;
});

// Delete branch
export const deleteBranch = createAsyncThunk('branches/deleteBranch', async (branchId) => {
  await axios.delete(`${BASE_URL}/${branchId}`);
  return branchId;
});

const branchSlice = createSlice({
  name: 'branches',
  initialState: {
    branches: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch branches
      .addCase(fetchBranches.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchBranches.fulfilled, (state, action) => {
        state.loading = false;
        state.branches = action.payload;
      })
      .addCase(fetchBranches.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      // Create branch
      .addCase(createBranch.fulfilled, (state, action) => {
        state.branches.push(action.payload);
      })
      // Update branch
      .addCase(updateBranch.fulfilled, (state, action) => {
        const index = state.branches.findIndex((branch) => branch._id === action.payload._id);
        if (index !== -1) {
          state.branches[index] = action.payload;
        }
      })
      // Delete branch
      .addCase(deleteBranch.fulfilled, (state, action) => {
        state.branches = state.branches.filter((branch) => branch._id !== action.payload);
      });
  },
});

export default branchSlice.reducer;

