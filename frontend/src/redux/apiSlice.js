
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api' }), // Your API base URL
  endpoints: (builder) => ({
    // Add the login API
    loginUser: builder.mutation({
      query: (credentials) => ({
        url: '/auth/login',
        method: 'POST',
        body: credentials,
      }),
    }),
    // Add the register API
    registerUser: builder.mutation({
      query: (newUser) => ({
        url: '/auth/register',
        method: 'POST',
        body: newUser,
      }),
    }),
    // Other existing APIs like getRoles, getBranches, etc.
    getRoles: builder.query({
      query: () => '/roles',
      providesTags: ['Roles'],
    }),
  }),
});

export const {
  useLoginUserMutation,
  useRegisterUserMutation,
  useGetRolesQuery,
} = apiSlice;
