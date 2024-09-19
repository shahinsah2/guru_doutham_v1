// // src/redux/slices/roleSlice.js
// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axiosInstance from "../../services/axios";

// // Fetch all roles
// export const fetchRoles = createAsyncThunk("roles/fetchRoles", async () => {
//   const response = await axiosInstance.get("/roles");
//   return response.data;
// });

// const roleSlice = createSlice({
//   name: "roles",
//   initialState: {
//     roles: [],
//     loading: false,
//     error: null,
//   },
//   reducers: {},
//   extraReducers: (builder) => {
//     builder
//       .addCase(fetchRoles.pending, (state) => {
//         state.loading = true;
//         state.error = null;
//       })
//       .addCase(fetchRoles.fulfilled, (state, action) => {
//         state.loading = false;
//         state.roles = action.payload;
//       })
//       .addCase(fetchRoles.rejected, (state, action) => {
//         state.loading = false;
//         state.error = action.error.message;
//       });
//   },
// });

// export default roleSlice.reducer;

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const BASE_URL = 'http://localhost:5000/api'; 

// Fetch Roles
export const fetchRoles = createAsyncThunk('roles/fetchRoles', async () => {
  const response = await axios.get(`${BASE_URL}/roles`);
  return response.data;
});

// Create Role
export const createRole = createAsyncThunk('roles/createRole', async (newRole, thunkAPI) => {
  const response = await axios.post(`${BASE_URL}/roles`, newRole);
  return response.data;
});

// Update Role
export const updateRole = createAsyncThunk('roles/updateRole', async ({ roleId, updatedData }, thunkAPI) => {
  const response = await axios.put(`${BASE_URL}/roles/${roleId}`, updatedData);
  return response.data;
});

// Delete Role
export const deleteRole = createAsyncThunk('roles/deleteRole', async (roleId, thunkAPI) => {
  await axios.delete(`${BASE_URL}/roles/${roleId}`);
  return roleId;
});

const roleSlice = createSlice({
  name: 'roles',
  initialState: {
    roles: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      // Fetch roles
      .addCase(fetchRoles.fulfilled, (state, action) => {
        state.roles = action.payload;
        state.loading = false;
      })
      .addCase(fetchRoles.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchRoles.rejected, (state, action) => {
        state.error = action.payload;
        state.loading = false;
      })
      // Create role
      .addCase(createRole.fulfilled, (state, action) => {
        state.roles.push(action.payload);
      })
      // Update role
      .addCase(updateRole.fulfilled, (state, action) => {
        const updatedRole = action.payload;
        const index = state.roles.findIndex((role) => role._id === updatedRole._id);
        if (index !== -1) {
          state.roles[index] = updatedRole;
        }
      })
      // Delete role
      .addCase(deleteRole.fulfilled, (state, action) => {
        state.roles = state.roles.filter((role) => role._id !== action.payload);
      });
  },
});

export default roleSlice.reducer;

