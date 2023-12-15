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
import physioItemSlice from './_reducers/physioItemSlice';
import insuranceSlice from './_reducers/insuranceSlice';
import userTypeSlice from './_reducers/userTypeSlice';
import measuringUnitSlice from './_reducers/measuringUnitSlice';
import itemCategorySlice from './_reducers/itemCategorySlice';
import itemSlice from './_reducers/itemSlice';
import radiologySlice from './_reducers/radiologySlice';
import supplierSlice from './_reducers/supplierSlice';
import supplierClassificationSlice from './_reducers/supplierClassificationSlice';
import procedureGroupSlice from './_reducers/procedureGroupSlice';
import procedureSlice from './_reducers/procedureSlice';
import patientSlice from './_reducers/patientSlice';
import doctorAdmissionSlice from './_reducers/doctorAdmissionSlice';
import doctorAdmissionBeadAllocationSlice from './_reducers/doctorAdmissionBeadAllocationSlice';

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
    physioItem: physioItemSlice,
    insurances: insuranceSlice,
    userType: userTypeSlice,
    measuringUnit: measuringUnitSlice,
    itemCategory: itemCategorySlice,
    items: itemSlice,
    radiology: radiologySlice,
    suppliers: supplierSlice,
    supplierClassification: supplierClassificationSlice,
    procedures: procedureSlice,
    procedureGroup: procedureGroupSlice,
    patients: patientSlice,
    doctorAdmission: doctorAdmissionSlice,
    doctorAdmissionBedAllocation: doctorAdmissionBeadAllocationSlice,

  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(cacheMiddleware),
});
