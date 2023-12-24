import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const admissionApi = createApi({
  reducerPath: 'admissionApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/admission',
  }),
  endpoints: (builder) => ({
    getAdmissions: builder.query({
      query: () => 'fetchAll',
    }),
    addWard: builder.mutation({
      query: (newWard) => ({
        url: 'add',
        method: 'POST',
        body: newWard,
      }),
    }),
  }),
});

export const { useGetAdmissionsQuery, useAddWardMutation } = admissionApi;
