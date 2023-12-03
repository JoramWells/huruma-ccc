import { configureStore } from "@reduxjs/toolkit";
import priceListSlice from "./components/_reducers/priceListReducers";

export const store = configureStore({
  reducer: {
    priceLists: priceListSlice,
  },
});