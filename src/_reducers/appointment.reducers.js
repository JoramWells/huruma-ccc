import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  data: [],
  loading: false,
  error: null,
  response: '',
};

export const fetchAllAppointment = createAsyncThunk(
  'data/fetchAllAppointment',
  async () => {
    let data = [];
    await axios
      .get('http://localhost:5000/appointments/fetchAll')
      .then((res) => (data = res.data))
      .catch((error) => error.message);
    return data;
  },
);

export const addAppointment = createAsyncThunk(
  'data/addAppointment',
  async (inputValues) => {
    // let data = []
    await axios.post('http://localhost:5000/appointments/add', inputValues)
      .then((response) => response)
      .catch((error) => error.message);
  },
);

export const getAppointmentDetail = createAsyncThunk(
  'data/getAppointmentDetail',
  async (id, { rejectWithValue }) => {
    let data = [];
    await axios
      .get(`http://localhost:5000/appointments/detail/${id}`)
      .then((res) => (data = res.data))
      .catch((error) => rejectWithValue(error.message));
    return data;
  },
);

export const deleteAppointment = createAsyncThunk(
  'data/deleteAppointment',
  async (id) => {
    await axios.delete(`http://localhost:5000/appointments/delete/${id}`)
      .then((response) => console.log(response))
      .catch((err) => console.log(err));
  },
);

export const editAppointment = createAsyncThunk(
  'data/editAppointment',
  async (data) => {
    let result = [];
    await axios
      .put('http://localhost:5000/appointments/edit', data)
      .then((response) => (result = response.data))
      .catch((error) => error);
    return result;
  },
);

const appointmentSlice = createSlice({
  name: 'appointment',
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(fetchAllAppointment.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(fetchAllAppointment.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      });

    builder
      .addCase(getAppointmentDetail.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(getAppointmentDetail.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      })
      .addCase(getAppointmentDetail.rejected, (state, action) => {
        state.status = 'failed';
        state.loading = false;
        state.error = action.error.message;
      });

    builder
      .addCase(editAppointment.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(editAppointment.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      });
    builder
      .addCase(addAppointment.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(addAppointment.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      });

    builder
      .addCase(deleteAppointment.pending, (state) => {
        state.status = 'loading';
        state.loading = true;
      })
      .addCase(deleteAppointment.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
        state.loading = false;
      });
  },
});

export default appointmentSlice.reducer;
