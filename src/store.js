import { configureStore } from "@reduxjs/toolkit";
import itemTypeSlice from "./_reducers/itemTypeSlice";
import priceListSlice from "./_reducers/priceListSlice";

export const store = configureStore({
  reducer: {
    priceLists: priceListSlice,
    itemType:itemTypeSlice
  },
});