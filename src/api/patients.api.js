import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const patientsApi = createApi({
  reducerPath: 'patientsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/patient',
  }),
  endpoints: (builder) => ({
    getPatients: builder.query({
      query: () => 'fetchAll',
    }),
    addPatient: builder.mutation({
      query: (newUser) => ({
        url: 'add',
        method: 'POST',
        body: newUser,
      }),
    }),
    getPatient: builder.query({
      query: (id) => `detail/${id}`,
    }),
  }),
});

export const { useGetPatientsQuery, useAddPatientMutation, useGetPatientQuery } = patientsApi;
