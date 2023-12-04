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

          <Route path="/departments" element={<Departments />} />
          <Route path="/add-department" element={<AddDepartment />} />
          <Route path="/department-detail/:id" element={<DepartmentDetail />} />

          <Route path="pharmaceuticals" element={<Pharmaceuticals />} />

          <Route path="/price-lists" element={<PriceLists />} />
          <Route path="/price-list-items" element={<PriceListItems />} />
          <Route path="/pricelist-detail/:id" element={<PriceListDetail />} />

          <Route path="/items" element={<Items />} />
          <Route path="/add-subitem" element={<AddSubItem />} />
          <Route path="/item-type" element={<ItemType />} />

          <Route path="/stores" element={<Stores />} />

          <Route path="/add-service" element={<AddService />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </Dashboard>
    </ChakraProvider>
  );
}

export default App;
