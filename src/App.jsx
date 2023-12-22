/* eslint-disable no-unused-vars */
import { Suspense, lazy } from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import {
  Route, Routes, useLocation,
} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import PriceLists from './layouts/PriceLists';
import Services from './layouts/Services';
import AddService from './layouts/AddService';
import AddSubItem from './layouts/AddSubItem';
import PriceListDetail from './layouts/PriceListDetail';
import Items from './layouts/Items';
import AddItem from './layouts/AddItem';
import AddItemType from './layouts/AddItemType';
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
import Patients from './layouts/Patients';
// import DoctorAdmission from './layouts/DoctorAdmission';
import DoctorAdmissionBedAllocation from './layouts/DoctorAdmissionBedAllocation';
import AdmissionDetail from './layouts/AdmissionDetail';
import AdmissionCategory from './layouts/AdmissionCategory';
import AddAdmissionCategory from './layouts/AddAdmissionCategory';
import AdmissionType from './layouts/AdmissionType';
import AdmissionBedAllocation from './layouts/AdmissionBedAllocation';
import HospitalStores from './layouts/HospitalStores';
import MaternityAntenatalProfile from './layouts/MaternityAntenatalProfile';
import MaternityProfile from './layouts/MaternityProfile';

const AppointmentDetail = lazy(() => import('./layouts/AppointmentDetail'));
const Appointments = lazy(() => import('./layouts/Appointments'));
const Admission = lazy(() => import('./layouts/Admission'));
const MaternityServices = lazy(() => import('./layouts/MaternityServices'));
const Homepage = lazy(() => import('./layouts/Homepage'));
const PatientDetail = lazy(() => import('./layouts/PatientDetail'));
const MiscellaneousCharges = lazy(() => import('./layouts/MiscellaneousCharges'));

function App() {
  const { pathname } = useLocation();
  return (
    <ChakraProvider theme={theme}>
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
            <Route path="/bed-allocation" element={<DoctorAdmissionBedAllocation />} />

            <Route path="/admin-insurances" element={<Insurance />} />
            <Route path="/add-insurance" element={<AddInsurance />} />

            <Route path="/patients" element={<Patients />} />
            <Route path="/patient-detail/:id" element={<PatientDetail />} />
            <Route path="/maternity" element={<MaternityServices />} />

            {/* <Route path="/admission" element={<DoctorAdmission />} /> */}

            <Route path="/admission" element={<Admission />} />
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

            <Route path="/appointments" element={<Appointments />} />
            <Route path="/appointment-detail/:id" element={<AppointmentDetail />} />

            <Route path="/suppliers" element={<Suppliers />} />
            <Route path="/add-suppliers" element={<AddSuppliers />} />
            <Route path="/supplier-detail/:id" element={<SupplierDetail />} />
            <Route path="/supplier-classification" element={<SupplierClassification />} />
            <Route path="/add-supplier-classification" element={<AddSupplierClassification />} />
            <Route path="/supplier-classification-detail" element={<SupplierClassificationDetail />} />

            <Route path="/admin-add-department" element={<AddDepartment />} />
            <Route path="/department-detail/:id" element={<DepartmentDetail />} />

            <Route path="/nursing-station" element={<NursingStation />} />

            <Route path="/procedures" element={<Procedures />} />
            <Route path="/add-procedures" element={<AddProcedures />} />
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

            <Route path="/ward-prices" element={<WardPrice />} />

            <Route path="/stores" element={<Stores />} />

            <Route path="/maternity-antenatal-profile" element={<MaternityAntenatalProfile />} />
            <Route path="/maternity-profile" element={<MaternityProfile />} />

            <Route path="/add-service" element={<AddService />} />
            <Route path="/admin-services" element={<Services />} />

            <Route path="/admin-users" element={<Users />} />
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
