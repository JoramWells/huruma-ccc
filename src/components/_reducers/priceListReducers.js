import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  data: [],
  loading: false,
  error: null,
  response: "",
};

export const getAllPriceLists = createAsyncThunk(
  "data/getAllPriceLists",
  async () => {
    let data = [];
    await axios
      .get("http://localhost:5000/pricelists/get-all-pricelists")
      .then((res) => (data = res.data))
      .catch((error) => console.log(error.message));
    return data;
  }
);

const priceListSlice = createSlice({
  name: "priceLists",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(getAllPriceLists.pending, (state) => {
        state.status = "loading";
        state.loading = true;
      })
      .addCase(getAllPriceLists.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.data = action.payload;
        state.loading = false;
      });
  },
});

export default priceListSlice.reducer;
