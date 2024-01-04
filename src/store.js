import { configureStore } from '@reduxjs/toolkit';
import { patientsApi } from './api/patients.api';
import { wardApi } from './api/ward.api';
import { admissionApi } from './api/admissions.api';
import { appointmentApi } from './api/appointments.api';
import { hospitalApi } from './api/hospital.api';
import { maternityProfileApi } from './api/maternity.api';
import { userApi } from './api/users.api';
import { userTypeApi } from './api/userType.api';
import { procedureApi } from './api/procedureDetails.api';
import { procedureItemApi } from './api/procedureItem.api';
import { supplierApi } from './api/suppliers.api';
import { insuranceApi } from './api/insurance.api';
import { diseaseApi } from './api/disease.api';
import { diseaseMinistryApi } from './api/diseaseMinistry.api copy';
import { creditPaymentApi } from './api/creditPayment.api';
import { companyApi } from './api/company.api';
import { consultationTypeApi } from './api/consultationType.api';
import { medicationApi } from './api/medication.api';
import { medicationCategoryApi } from './api/medicationCategory.api';
import { medicationPurchasesApi } from './api/medicationPurchases.api';
import { medicationStockTakeApi } from './api/medicationStockTake.api';
import { insuranceMedicationMappingApi } from './api/insuranceMedicationMapping.api';
import { insuranceServiceCostMappingApi } from './api/insuranceServiceCostMapping.api';
import { personalAccountChargeApi } from './api/personalAccountCharges.api';
import { accountingSupplierApi } from './api/accountingSuppliers.api';
import { accountingItemApi } from './api/accountingItem.api';

export const store = configureStore({
  reducer: {
    [patientsApi.reducerPath]: patientsApi.reducer,
    [wardApi.reducerPath]: wardApi.reducer,
    [admissionApi.reducerPath]: admissionApi.reducer,
    [appointmentApi.reducerPath]: appointmentApi.reducer,
    [hospitalApi.reducerPath]: hospitalApi.reducer,
    [maternityProfileApi.reducerPath]: maternityProfileApi.reducer,
    [userApi.reducerPath]: userApi.reducer,
    [userTypeApi.reducerPath]: userTypeApi.reducer,
    [procedureApi.reducerPath]: procedureApi.reducer,
    [procedureItemApi.reducerPath]: procedureItemApi.reducer,
    [supplierApi.reducerPath]: supplierApi.reducer,
    [insuranceApi.reducerPath]: insuranceApi.reducer,
    [diseaseApi.reducerPath]: diseaseApi.reducer,
    [diseaseMinistryApi.reducerPath]: diseaseMinistryApi.reducer,
    [creditPaymentApi.reducerPath]: creditPaymentApi.reducer,
    [companyApi.reducerPath]: companyApi.reducer,
    [consultationTypeApi.reducerPath]: consultationTypeApi.reducer,
    [medicationApi.reducerPath]: medicationApi.reducer,
    [medicationCategoryApi.reducerPath]: medicationCategoryApi.reducer,
    [medicationPurchasesApi.reducerPath]: medicationPurchasesApi.reducer,
    [medicationStockTakeApi.reducerPath]: medicationStockTakeApi.reducer,
    [insuranceMedicationMappingApi.reducerPath]: insuranceMedicationMappingApi.reducer,
    [insuranceServiceCostMappingApi.reducerPath]: insuranceServiceCostMappingApi.reducer,
    [personalAccountChargeApi.reducerPath]: personalAccountChargeApi.reducer,
    [accountingSupplierApi.reducerPath]: accountingSupplierApi.reducer,
    [accountingItemApi.reducerPath]: accountingItemApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware()
    .concat(patientsApi.middleware)
    .concat(wardApi.middleware)
    .concat(admissionApi.middleware)
    .concat(appointmentApi.middleware)
    .concat(hospitalApi.middleware)
    .concat(maternityProfileApi.middleware)
    .concat(userApi.middleware)
    .concat(userTypeApi.middleware)
    .concat(procedureApi.middleware)
    .concat(procedureItemApi.middleware)
    .concat(supplierApi.middleware)
    .concat(insuranceApi.middleware)
    .concat(diseaseApi.middleware)
    .concat(diseaseMinistryApi.middleware)
    .concat(creditPaymentApi.middleware)
    .concat(companyApi.middleware)
    .concat(consultationTypeApi.middleware)
    .concat(medicationApi.middleware)
    .concat(medicationCategoryApi.middleware)
    .concat(medicationPurchasesApi.middleware)
    .concat(medicationStockTakeApi.middleware)
    .concat(insuranceMedicationMappingApi.middleware)
    .concat(insuranceServiceCostMappingApi.middleware)
    .concat(personalAccountChargeApi.middleware)
    .concat(accountingItemApi.middleware)
    .concat(accountingSupplierApi.middleware)
  ,
});
