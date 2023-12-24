import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const appointmentApi = createApi({
  reducerPath: 'appointmentsApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:5000/appointments',
  }),
  endpoints: (builder) => ({
    getAppointments: builder.query({
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

export const { useGetAppointmentsQuery, useAddWardMutation } = appointmentApi;
