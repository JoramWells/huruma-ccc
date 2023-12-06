import { configureStore } from '@reduxjs/toolkit';
import itemTypeSlice from './_reducers/itemTypeSlice';
import priceListSlice from './_reducers/priceListSlice';
import priceListItemsSlice from './_reducers/priceListItemsSlice';
import subItemSlice from './_reducers/subItemSlice';
import departmentSlice from './_reducers/departmentSlice';
import pharmaceuticalStoreSlice from './_reducers/pharmaceuticalStoreSlice';
import cacheMiddleware from './middlewares/cacheMiddleware';
import wardSlice from './_reducers/wardSlice';
import userSlice from './_reducers/userSlice';
import groupPrivilegesSlice from './_reducers/groupPrivilegesSlice';
import drugsSlice from './_reducers/drugsSlice';
import privilegeSlice from './_reducers/privilegeSlice';

export const store = configureStore({
  reducer: {
    priceLists: priceListSlice,
    itemType: itemTypeSlice,
    priceListItems: priceListItemsSlice,
    subItems: subItemSlice,
    departments: departmentSlice,
    pharmaceuticals: pharmaceuticalStoreSlice,
    wards: wardSlice,
    users: userSlice,
    drugs: drugsSlice,
    groupPrivileges: groupPrivilegesSlice,
    privileges: privilegeSlice,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cacheMiddleware),
});
