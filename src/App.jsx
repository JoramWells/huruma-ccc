import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Homepage from './layouts/Homepage';
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

function App() {
  const { pathname } = useLocation();
  return (
    <ChakraProvider theme={theme}>
      <Routes>
        <Route path="/add-item" element={<AddItem />} />
        <Route path="/add-item-type" element={<AddItemType />} />
      </Routes>
      <Dashboard
        display={
          pathname.includes('/add-item') || pathname.includes('/add-item-type')
        }
      >
        <Routes>
          <Route path="/" element={<Homepage />} />

          <Route path="/administration" element={<Administration />} />
          <Route path="/drugs" element={<Drugs />} />

          <Route path="/insurances" element={<Insurance />} />
          <Route path="/add-insurance" element={<AddInsurance />} />

          <Route path="/physiotherapy" element={<Physiotherapy />} />
          <Route path="add-physiotherapy" element={<AddPhysiotherapyItems />} />
          <Route path="/dispenses-physiotherapy-items" element={<DispensesPhysioTherapy />} />
          <Route path="/add-physio-item-dispense" element={<AddDispensePhysioItem />} />

          <Route path="/departments" element={<Departments />} />
          <Route path="/admin-departments" element={<Departments />} />

          <Route path="/admin-add-department" element={<AddDepartment />} />
          <Route path="/department-detail/:id" element={<DepartmentDetail />} />

          <Route path="pharmaceuticals" element={<Pharmaceuticals />} />
          <Route path="add-pharmaceuticals" element={<AddPharmaceuticals />} />

          <Route path="/price-lists" element={<PriceLists />} />
          <Route path="/services-price-list" element={<PriceLists />} />

          <Route path="/price-list-items" element={<PriceListItems />} />
          <Route path="/pharmaceutical-price-list" element={<PriceListItems />} />

          <Route path="/pricelist-detail/:id" element={<PriceListDetail />} />

          <Route path="/items" element={<Items />} />
          <Route path="/add-subitem" element={<AddSubItem />} />
          <Route path="/item-type" element={<ItemType />} />

          <Route path="/ward-prices" element={<WardPrice />} />

          <Route path="/stores" element={<Stores />} />

          <Route path="/add-service" element={<AddService />} />
          <Route path="/services" element={<Services />} />

          <Route path="/admin-users" element={<Users />} />
          <Route path="/admin-add-user" element={<AddUser />} />

          <Route path="/admin-privileges" element={<Privileges />} />
          <Route path="/admin-group-privileges" element={<GroupPrivileges />} />
          <Route path="/admin-group-privileges-details/:id" element={<GroupPrivilegesDetails />} />

        </Routes>
      </Dashboard>
    </ChakraProvider>
  );
}

export default App;
