import { configureStore } from '@reduxjs/toolkit';
import itemTypeSlice from './_reducers/itemTypeSlice';
import priceListSlice from './_reducers/priceListSlice';
import priceListItemsSlice from './_reducers/priceListItemsSlice';
import subItemSlice from './_reducers/subItemSlice';
import departmentSlice from './_reducers/departmentSlice';
import pharmaceuticalStoreSlice from './_reducers/pharmaceuticalStoreSlice';
import cacheMiddleware from './middlewares/cacheMiddleware';
import wardSlice from './_reducers/wardSlice';

export const store = configureStore({
  reducer: {
    priceLists: priceListSlice,
    itemType: itemTypeSlice,
    priceListItems: priceListItemsSlice,
    subItems: subItemSlice,
    departments: departmentSlice,
    pharmaceuticals: pharmaceuticalStoreSlice,
    wards: wardSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cacheMiddleware),
});
