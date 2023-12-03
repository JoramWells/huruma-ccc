import { configureStore } from "@reduxjs/toolkit";
import itemTypeSlice from "./_reducers/itemTypeSlice";
import priceListSlice from "./_reducers/priceListSlice";
import priceListItemsSlice from "./_reducers/priceListItemsSlice";
import subItemSlice from "./_reducers/subItemSlice";
import departmentSlice from "./_reducers/departmentSlice";

export const store = configureStore({
  reducer: {
    priceLists: priceListSlice,
    itemType:itemTypeSlice,
    priceListItems:priceListItemsSlice,
    subItems:subItemSlice,
    departments:departmentSlice
  },
});