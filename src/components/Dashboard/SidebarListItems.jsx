import {
  FaBookMedical, FaBusinessTime, FaHome, FaHospital, FaUsers,
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
        selected={pathname.includes('doctors')}
        onClick={() => navigate('/doctors')}
        text="Doctors"
        icon={<FaHospital />}
      />
      <SidebarItemButton
        selected={pathname.includes('mothers')}
        onClick={() => navigate('/mentor-mothers')}
        text="M.Mother"
        icon={<FaUsers />}
      />
      <SidebarItemButton
        selected={pathname.includes('nurses')}
        onClick={() => navigate('/ccc-nurses')}
        text="CCC.Nurses"
        icon={<FaUsers />}
      />
      <SidebarItemButton
        selected={pathname.includes('advocates')}
        onClick={() => navigate('/ayp-advocates')}
        text="AYPAdvocates"
        icon={<FaBookMedical />}
      />

      <SidebarItemButton
        selected={pathname.includes('appointment')}
        onClick={() => navigate('/appointments')}
        text="Appointments"
        icon={<FaBusinessTime />}
      />
    </>
  );
};

export default SidebarListItems;