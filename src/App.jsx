/* eslint-disable array-callback-return */
import { Suspense, lazy } from 'react';
import {
  ChakraProvider,
  extendTheme,
  theme,
} from '@chakra-ui/react';
import {
  Route, Routes,
} from 'react-router-dom';

import Dashboard from './components/Dashboard';
import PriceLists from './layouts/PriceLists';
import Services from './layouts/Services';
import AddService from './layouts/AddService';
import AddSubItem from './layouts/AddSubItem';
import PriceListDetail from './layouts/PriceListDetail';
import Items from './layouts/Items';
import AddItem from './layouts/AddItem';
// import AddItemType from './layouts/AddItemType';
import PriceListItems from './layouts/PriceListItems';
import ItemType from './layouts/ItemType';
import Stores from './layouts/Stores';
import Departments from './layouts/Departments';
import AddDepartment from './layouts/AddDepartment';
import DepartmentDetail from './layouts/DepartmentDetail';
import Pharmaceuticals from './layouts/Pharmaceuticals';
import AddPharmaceuticals from './layouts/AddPharceuticals';
import WardPrice from './layouts/WardPrices';
import Users from './layouts/Users';
import AddUser from './layouts/AddUser';
import Privileges from './layouts/Privileges';
import GroupPrivileges from './layouts/GroupPrivileges';
import GroupPrivilegesDetails from './layouts/GroupPrivilegesDetail';
import Administration from './layouts/Administration';
import Drugs from './layouts/Drugs';
import Physiotherapy from './layouts/Physiotherapy';
import AddPhysiotherapyItems from './layouts/AddPhysiotherapy';
import DispensesPhysioTherapy from './layouts/DispensesPhysioTherapy';
import AddDispensePhysioItem from './layouts/AddDispensePhysioItem';
import Insurance from './layouts/Insurances';
import AddInsurance from './layouts/AddInsurance';
import UserTypes from './layouts/UserTypes';
import AddUserType from './layouts/AddUserType';
import DispenseDrugs from './layouts/DispenseDrugs';
import AddDispenseDrugs from './layouts/AddDispenseDrugs';
import Requisitions from './layouts/Requisitions';
import AddRequisitions from './layouts/AddRequisitions';
import MeasuringUnit from './layouts/MeasuringUnit';
import AddMeasuringUnit from './layouts/AddMeasuringUnit';
import ItemCategory from './layouts/ItemCategory';
import AddItemCategory from './layouts/AddItemCategory';
import Radiology from './layouts/Radiology';
import NursingStation from './layouts/NursingStation';
import Procedures from './layouts/Procedures';
import Suppliers from './layouts/Suppliers';
import AddSuppliers from './layouts/AddSuppliers';
import SupplierClassification from './layouts/SupplierClassification';
import AddSupplierClassification from './layouts/AddSupplierClassification';
import SupplierClassificationDetail from './layouts/SupplierClassificationDetail';
import ProcedureGroups from './layouts/ProcedureGroups';
import AddProcedureGroup from './layouts/AddProcedureGroup';
import AddProcedures from './layouts/AddProcedures';
import SupplierDetail from './layouts/SupplierDetail';
// import DoctorAdmission from './layouts/DoctorAdmission';
import DoctorAdmissionBedAllocation from './layouts/DoctorAdmissionBedAllocation';
import AddAdmissionCategory from './layouts/AddAdmissionCategory';
import AdmissionType from './layouts/AdmissionType';
import AdmissionBedAllocation from './layouts/AdmissionBedAllocation';
import HospitalStores from './layouts/HospitalStores';
import WardType from './layouts/WardType';
import AddWardType from './layouts/AddWardType';
import PatientQueue from './Patient/layouts/PatientQueue';
import ProceduresItems from './layouts/ProceduresItems';
import DiseaseMinistry from './layouts/DiseaseMinistry';
import Charges from './layouts/Charges';
import ChargesDetail from './layouts/ChargesDetail';
import MedicationCategory from './Medication/layouts/MedicationCategory';
import MedicationPurchases from './Medication/layouts/MedicationPurchases';
import MedicationStockTake from './Medication/layouts/MedicationStockTake';
import InsuranceMedicationMapping from './layouts/InsuranceMedicationMapping';
import InsuranceServiceCostMapping from './layouts/InsuranceServiceCostMapping';
import PersonalAccountCharges from './layouts/PersonalAccountCharges';
import PersonalAccountChargeDetail from './layouts/PersonalAccountChargeDetail';
import ConsultationTypes from './layouts/ConsultationTypes';
import AccountingSuppliers from './layouts/AccountingSuppliers';
import AccountingItem from './layouts/AccountingItem';
import AddAllergies from './layouts/AddAllergies';
import WalkInPatientQueue from './layouts/WalkInPatientQueue';
import AddPrescription from './layouts/AddPrescription';
import LabTestsSummarySubSection from './layouts/LabTestsSummarySubSection';
import AddMaternityDeliveryDetails from './layouts/AddMaternityDeliveryDetails';
import AddMaternityDewormingDetail from './layouts/AddMaternityDewormingDetail';
import PayrollDeductions from './layouts/PayrollDeductions';
import PayrollEarnings from './layouts/PayrollEarnings';
import PayrollEmployeeRecords from './layouts/PayrollEmployeeRecords';
import AddEmployeeRecords from './layouts/AddEmployeePayrollRecords';
import PayrollEmployeeLoanDetails from './layouts/PayrollEmployeeLoanDetails';
import PayrollEmployeeBenefitsFile from './layouts/PayrollEmployeeBenefitsFile';
import PayrollEmployeeEarningRecords from './layouts/PayrollEmployeeEarningRecords';
import Doctor from './Doctor/layouts/Doctor';
import Patients from './Patient/layouts/Patients';
import PatientsTriaged from './Patient/layouts/PatientsTriaged';
import PatientVisits from './Patient/layouts/PatientVisits';
import PatientQueueNursingStation from './Patient/layouts/PatientQueueNursingStation';
import PatientDepartmentalStatus from './Patient/layouts/PatientDepartmentalStatus';
import PatientPrescription from './Patient/layouts/PatientPrescription';
import AddPatient from './Patient/layouts/AddPatient';
import Medication from './Medication/layouts/Medication';

const AddVitals = lazy(() => import('./layouts/AddVitals'));
const Admission = lazy(() => import('./layouts/Admission'));
const AdmissionCategory = lazy(() => import('./layouts/AdmissionCategory'));
const AdmissionDetail = lazy(() => import('./layouts/AdmissionDetail'));
const AddWard = lazy(() => import('./layouts/AddWard'));
const Disease = lazy(() => import('./layouts/Disease'));
const AddMaternityProfile = lazy(() => import('./layouts/AddMaternityProfile'));
const UserDetail = lazy(() => import('./layouts/UserDetail'));
const MaternityProfileDetail = lazy(() => import('./Maternity/layouts/MaternityProfileDetail'));
const AddAdmission = lazy(() => import('./layouts/AddAdmission'));
const MaternityAntenatalProfile = lazy(() => import('./Maternity/layouts/MaternityAntenatalProfile'));
const MaternityProfile = lazy(() => import('./Maternity/layouts/MaternityProfile'));
const AppointmentDetail = lazy(() => import('./layouts/AppointmentDetail'));
const Appointments = lazy(() => import('./layouts/Appointments'));
// const Admission = lazy(() => import('./layouts/Admission'));
const MaternityServices = lazy(() => import('./Maternity/layouts/MaternityServices'));
const Homepage = lazy(() => import('./layouts/Homepage'));
const PatientDetail = lazy(() => import('./Patient/layouts/PatientDetail'));
const MiscellaneousCharges = lazy(() => import('./layouts/MiscellaneousCharges'));
const Wards = lazy(() => import('./layouts/Wards'));

function App() {
  const extendedTheme = extendTheme({
    ...theme,
    styles: {
      global: {
        body: {
          bg: 'gray.50',
        },
      },
    },
  });
  return (
    <ChakraProvider theme={extendedTheme}>
      {/* <Routes>
        <Route path="/add-item-type" element={<AddItemType />} />
      </Routes> */}
      <Dashboard
        display={false}
      >

        <Suspense fallback={<div>loading..</div>}>
          <Routes>
            <Route path="/" element={<Homepage />} />

            <Route path="/administration" element={<Administration />} />
            <Route path="/admin-drugs" element={<Drugs />} />
            <Route path="/dispense-drugs" element={<DispenseDrugs />} />
            <Route path="/add-dispense-drugs" element={<AddDispenseDrugs />} />

            <Route path="/accounting-suppliers" element={<AccountingSuppliers />} />
            <Route path="/accounting-items" element={<AccountingItem />} />

            <Route path="/bed-allocation" element={<DoctorAdmissionBedAllocation />} />

            <Route path="/charges" element={<Charges />} />
            <Route path="/charges-detail/:id" element={<ChargesDetail />} />

            <Route path="/diseases" element={<Disease />} />
            <Route path="/disease-ministry" element={<DiseaseMinistry />} />

            <Route path="/doctor/:id" element={<Doctor />} />

            <Route path="/admin-insurances" element={<Insurance />} />
            <Route path="/add-insurance" element={<AddInsurance />} />

            <Route path="/consultation-types" element={<ConsultationTypes />} />

            <Route path="/medication" element={<Medication />} />
            <Route path="/medication-category" element={<MedicationCategory />} />
            <Route path="/medication-purchases" element={<MedicationPurchases />} />
            <Route path="/medication-stock-take" element={<MedicationStockTake />} />
            <Route path="/insurance-medication-mapping" element={<InsuranceMedicationMapping />} />
            <Route path="/insurance-service-cost-mapping" element={<InsuranceServiceCostMapping />} />

            <Route path="/patients" element={<Patients />} />
            <Route path="/patient-queue" element={<PatientQueue />} />
            <Route path="/patient-departmental-status" element={<PatientDepartmentalStatus />} />
            <Route path="/add-patient" element={<AddPatient />} />
            <Route path="/patient-prescription/:id" element={<PatientPrescription />} />
            <Route path="/patient-detail/:id" element={<PatientDetail />} />
            <Route path="/add-prescription/:id" element={<AddPrescription />} />

            <Route path="/maternity" element={<MaternityServices />} />
            <Route path="/maternity-profile-detail/:id" element={<MaternityProfileDetail />} />

            {/* <Route path="/admission" element={<DoctorAdmission />} /> */}

            <Route path="/admission" element={<Admission />} />
            <Route path="/add-admission" element={<AddAdmission />} />

            <Route path="/lab-tests-summary-sub-section" element={<LabTestsSummarySubSection />} />

            <Route path="/admission-type" element={<AdmissionType />} />
            <Route path="/admission-detail" element={<AdmissionDetail />} />
            <Route path="/bed-allocation" element={<AdmissionBedAllocation />} />
            <Route path="/admission-category" element={<AdmissionCategory />} />
            <Route path="/add-admission-category" element={<AddAdmissionCategory />} />
            <Route path="/admission-detail/:id" element={<AdmissionDetail />} />

            <Route path="/miscellaneous-charges" element={<MiscellaneousCharges />} />

            <Route path="/requisitions" element={<Requisitions />} />
            <Route path="/add-requisitions" element={<AddRequisitions />} />

            <Route path="/physiotherapy" element={<Physiotherapy />} />
            <Route path="add-physiotherapy" element={<AddPhysiotherapyItems />} />
            <Route path="/dispenses-physiotherapy-items" element={<DispensesPhysioTherapy />} />
            <Route path="/add-physio-item-dispense" element={<AddDispensePhysioItem />} />

            <Route path="/admin-departments" element={<Departments />} />

            <Route path="/personal-account-charges" element={<PersonalAccountCharges />} />
            <Route path="/personal-account-charge-detail/:id" element={<PersonalAccountChargeDetail />} />

            <Route path="/appointments" element={<Appointments />} />
            <Route path="/appointment-detail/:id" element={<AppointmentDetail />} />

            <Route path="/add-vitals/:id" element={<AddVitals />} />

            <Route path="/suppliers" element={<Suppliers />} />
            <Route path="/add-suppliers" element={<AddSuppliers />} />
            <Route path="/supplier-detail/:id" element={<SupplierDetail />} />
            <Route path="/supplier-classification" element={<SupplierClassification />} />
            <Route path="/add-supplier-classification" element={<AddSupplierClassification />} />
            <Route path="/supplier-classification-detail" element={<SupplierClassificationDetail />} />

            <Route path="/admin-add-department" element={<AddDepartment />} />
            <Route path="/department-detail/:id" element={<DepartmentDetail />} />

            <Route path="/nursing-station" element={<NursingStation />} />
            <Route path="/nursing-station-patient-queue" element={<PatientQueueNursingStation />} />
            <Route path="/triaged-patients" element={<PatientsTriaged />} />
            <Route path="/walkin-patient-queue" element={<WalkInPatientQueue />} />
            <Route path="/patient-visits" element={<PatientVisits />} />

            <Route path="/add-allergies/:id" element={<AddAllergies />} />

            <Route path="/procedures" element={<Procedures />} />
            <Route path="/procedure-items" element={<ProceduresItems />} />
            <Route path="/add-procedure-details" element={<AddProcedures />} />
            <Route path="/procedure-groups" element={<ProcedureGroups />} />
            <Route path="/add-procedure-group" element={<AddProcedureGroup />} />

            <Route path="pharmaceuticals" element={<Pharmaceuticals />} />
            <Route path="add-pharmaceuticals" element={<AddPharmaceuticals />} />

            <Route path="measuring-unit" element={<MeasuringUnit />} />
            <Route path="add-measuring-unit" element={<AddMeasuringUnit />} />

            <Route path="/price-lists" element={<PriceLists />} />
            <Route path="/services-price-list" element={<PriceLists />} />

            <Route path="/price-list-items" element={<PriceListItems />} />
            <Route path="/pharmaceutical-price-list" element={<PriceListItems />} />

            <Route path="/pricelist-detail/:id" element={<PriceListDetail />} />

            <Route path="/items" element={<Items />} />
            <Route path="/add-item" element={<AddItem />} />

            <Route path="/radiology" element={<Radiology />} />

            <Route path="/add-subitem" element={<AddSubItem />} />
            <Route path="/item-type" element={<ItemType />} />
            <Route path="/item-category" element={<ItemCategory />} />
            <Route path="/add-item-category" element={<AddItemCategory />} />

            <Route path="/wards" element={<Wards />} />
            <Route path="/add-ward" element={<AddWard />} />
            <Route path="/add-ward-type" element={<AddWardType />} />
            <Route path="/ward-prices" element={<WardPrice />} />
            <Route path="/ward-type" element={<WardType />} />

            <Route path="/stores" element={<Stores />} />

            <Route path="/payroll-deductions" element={<PayrollDeductions />} />
            <Route path="/payroll-employee-earnings" element={<PayrollEarnings />} />
            <Route path="/payroll-employee-earning-records" element={<PayrollEmployeeEarningRecords />} />
            <Route path="/payroll-employee-records" element={<PayrollEmployeeRecords />} />
            <Route path="/add-payroll-employee-records" element={<AddEmployeeRecords />} />
            <Route path="/payroll-employee-loan-details" element={<PayrollEmployeeLoanDetails />} />
            <Route path="/payroll-employee-benefits" element={<PayrollEmployeeBenefitsFile />} />

            <Route path="/maternity-antenatal-profile" element={<MaternityAntenatalProfile />} />
            <Route path="/maternity-profile" element={<MaternityProfile />} />
            <Route path="/add-maternity-profile" element={<AddMaternityProfile />} />
            <Route path="/add-maternity-delivery-details/:id" element={<AddMaternityDeliveryDetails />} />
            <Route path="/add-maternity-deworming-details/:id" element={<AddMaternityDewormingDetail />} />

            <Route path="/add-service" element={<AddService />} />
            <Route path="/admin-services" element={<Services />} />

            <Route path="/admin-users" element={<Users />} />
            <Route path="/user-detail/:id" element={<UserDetail />} />
            <Route path="/admin-add-user" element={<AddUser />} />

            <Route path="/admin-user-type" element={<UserTypes />} />
            <Route path="/admin-add-user-type" element={<AddUserType />} />

            <Route path="/admin-privileges" element={<Privileges />} />
            <Route path="/admin-group-privileges" element={<GroupPrivileges />} />
            <Route path="/admin-group-privileges-details/:id" element={<GroupPrivilegesDetails />} />

            <Route path="/hospital-stores" element={<HospitalStores />} />

          </Routes>
        </Suspense>

      </Dashboard>

    </ChakraProvider>
  );
}

export default App;
