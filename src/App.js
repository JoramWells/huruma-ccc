import React from 'react';
import {
  ChakraProvider,
  theme,
} from '@chakra-ui/react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Homepage from './layouts/Homepage';
import  Dashboard from './components/Dashboard'
import PriceLists from './layouts/PriceLists';
import Services from './layouts/Services';
import AddService from './layouts/AddService';
import PriceListDetail from './layouts/PriceListDetail';

function App() {
  const {pathname} = useLocation()
  console.log(pathname)
  return (
    <ChakraProvider theme={theme}>
      <Dashboard display={pathname.includes("/add-service")}>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/price-lists" element={<PriceLists />} />
          <Route path="/pricelist-detail/:id" element={<PriceListDetail />} />

          <Route path="/add-service" element={<AddService />} />
          <Route path="/services" element={<Services />} />
        </Routes>
      </Dashboard>
    </ChakraProvider>
  );
}

export default App;
