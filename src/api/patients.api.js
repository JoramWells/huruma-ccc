import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const patientsApi = createApi({
  // reducerPath: 'patient',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/patient',
  }),
  endpoints: (builder) => ({
    getPatients: builder.query({
      query: () => 'fetchAll',
    }),
  }),
});

export const { useGetPatientsQuery } = patientsApi;
