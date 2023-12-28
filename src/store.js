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
  ,
});
