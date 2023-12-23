import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const maternityProfileApi = createApi({
  // reducerPath: 'wards',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000',
  }),
  endpoints: (builder) => ({
    getMaternityProfile: builder.query({
      query: () => 'maternity-profile/fetchAll',
    }),

    // Get Maternity Antenatal Profile
    getMaternityAntenatalProfile: builder.query({
      query: () => 'maternity-antenatal-profile/fetchAll',
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

export const {
  useGetMaternityProfileQuery, useGetMaternityAntenatalProfileQuery,
  useAddWardMutation,
} = maternityProfileApi;
