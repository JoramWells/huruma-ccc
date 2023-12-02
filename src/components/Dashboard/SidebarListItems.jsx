import {
 FaHome, FaHospitalAlt,
} from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import SidebarItemButton from './SidebarItemButton';

const SidebarListItems = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;
  return (
    <>
      <SidebarItemButton
        selected={pathname === '/' || pathname.includes('user')}
        onClick={() => navigate('/')}
        text="dashboard"
        icon={<FaHome />}
      />

      <SidebarItemButton
        selected={pathname === '/dd' || pathname.includes('users')}
        onClick={() => navigate('/')}
        text="patients"
        icon={<FaHospitalAlt />}
      />

      <SidebarItemButton
        selected={pathname === '/price-lists' || pathname.includes('user')}
        onClick={() => navigate('/price-lists')}
        text="price lists"
        icon={<FaHospitalAlt />}
        />

      <SidebarItemButton
        selected={pathname === '/services' || pathname.includes('user')}
        onClick={() => navigate('/services')}
        text="services"
        icon={<FaHospitalAlt />}
        />
    </>
  );
};

export default SidebarListItems;