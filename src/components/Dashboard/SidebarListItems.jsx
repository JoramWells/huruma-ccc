import {
  FaDivide,
  FaHome, FaHospitalAlt, FaListOl, FaServicestack, FaStore,
} from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Box, Collapse, useDisclosure } from '@chakra-ui/react';
import SidebarItemButton from './SidebarItemButton';

const SidebarListItems = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <SidebarItemButton
        selected={pathname === '/' || pathname.includes('user')}
        onClick={() => navigate('/')}
        text="dashboard"
        icon={<FaHome />}
      />

      <SidebarItemButton
        selected={pathname === '/departments' || pathname.includes('department')}
        onClick={() => navigate('/departments')}
        text="departments"
        icon={<FaDivide />}
      />

      <SidebarItemButton
        selected={pathname === '/dd' || pathname.includes('users')}
        onClick={() => navigate('/')}
        text="patients"
        icon={<FaHospitalAlt />}
      />

      <SidebarItemButton
        selected={pathname === '/price-lists' || pathname.includes('pricelist')}
        onClick={() => navigate('/price-lists')}
        text="price lists"
        icon={<FaHospitalAlt />}
      />

      <SidebarItemButton
        selected={pathname === '/services' || pathname.includes('/add-service')}
        onClick={() => navigate('/services')}
        text="services"
        icon={<FaServicestack />}
      />

      <SidebarItemButton
        selected={pathname === '/stores' || pathname.includes('pharmaceuticals')}
        onClick={() => navigate('/stores')}
        text="stores"
        icon={<FaStore />}
      />

      <SidebarItemButton
        selected={pathname === '/items' || pathname.includes('user')}
        onClick={onToggle}
        text="items"
        icon={<FaListOl />}
      />

      <Collapse in={isOpen}>
        <Box ml={5} mt={5}>
          <Link to="/price-list-items">Price List Items</Link>
        </Box>
        <Box ml={5} mt={5}>
          <Link to="/item-type">Item Type</Link>
        </Box>
      </Collapse>
    </>
  );
};

export default SidebarListItems;
