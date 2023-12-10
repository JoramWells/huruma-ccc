import {
  FaCalendarTimes,
  FaChild,
  FaHome, FaHospitalAlt, FaListOl, FaMoneyBill, FaPills,
  FaRadiation, FaStore, FaToolbox, FaTools, FaUser,
} from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDisclosure } from '@chakra-ui/react';
import { nanoid } from '@reduxjs/toolkit';
import SidebarItemButton from './SidebarItemButton';
import SidebarItemLink from './SidebarItemLink';

const SidebarListItems = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { pathname } = location;

  const { onToggle } = useDisclosure();

  return (
    <>
      <SidebarItemButton
        selected={pathname === '/'}
        onClick={() => navigate('/')}
        text="dashboard"
        icon={<FaHome />}
      />

      <SidebarItemLink
        selected={pathname === '/administration' || pathname.includes('administration') || pathname.includes('admin') || pathname.includes('add-service')}
        onClick={onToggle}
        text="Administration"
        link="/administration"
        itemList={[
          { id: nanoid(), title: 'Departments', link: '/admin-departments' },
          { id: nanoid(), title: 'Drugs', link: '/admin-drugs' },
          { id: nanoid(), title: 'Hospital Branch', link: '/general-store' },
          { id: nanoid(), title: 'Insurances', link: '/admin-insurances' },
          { id: nanoid(), title: 'Privileges', link: '/admin-privileges' },
          { id: nanoid(), title: 'Services', link: '/admin-services' },
          { id: nanoid(), title: 'User Type', link: '/admin-user-type' },
          { id: nanoid(), title: 'Users', link: '/admin-users' },

        ]}
        icon={<FaUser />}
      />

      <SidebarItemButton
        selected={pathname === '/appointments'}
        onClick={() => navigate('/appointments')}
        text="appointments"
        icon={<FaCalendarTimes />}
      />

      <SidebarItemButton
        selected={pathname === '/labs'}
        onClick={() => navigate('/labs')}
        text="lab"
        icon={<FaTools />}
      />

      <SidebarItemButton
        selected={pathname === '/maternity'}
        onClick={() => navigate('/maternity')}
        text="Maternity"
        icon={<FaChild />}
      />

      <SidebarItemButton
        selected={pathname === '/dd'}
        onClick={() => navigate('/')}
        text="patients"
        icon={<FaHospitalAlt />}
      />

      <SidebarItemLink
        selected={
          pathname === '/pharmacy'
}
        onClick={onToggle}
        text="Pharmacy"
        link="/pharmacy"
        itemList={[
          { id: nanoid(), title: 'Over Counter Request', link: '/services-price-list' },
          { id: nanoid(), title: 'OTC Patient Queue', link: '/pharmaceutical-price-list' },
          { id: nanoid(), title: 'Walk-In Patient Queue', link: '/pharmeuticals' },
          { id: nanoid(), title: 'Pharmacy Request', link: '/ward-prices' },
          { id: nanoid(), title: 'Dispense Drugs', link: '/dispense-drugs' },

        ]}
        icon={<FaPills />}
      />

      {/* physiotherapy */}
      <SidebarItemLink
        selected={pathname === '/physiotherapy' || pathname.includes('physiotherapy')}
        onClick={onToggle}
        text="Physiotherapy"
        link="/physiotherapy"
        itemList={[
          { id: nanoid(), title: 'Dispenses', link: '/dispenses-physiotherapy-items' },

        ]}
        icon={<FaToolbox />}
      />

      {/* price lists */}
      <SidebarItemLink
        selected={pathname === '/price-lists' || pathname.includes('services-price-list') || pathname.includes('pharmaceutical-price-list')}
        onClick={onToggle}
        text="Price Lists"
        link="/price-lists"
        itemList={[
          { id: nanoid(), title: 'Services', link: '/services-price-list' },
          { id: nanoid(), title: 'Pharmaceuticals', link: '/pharmaceutical-price-list' },
          { id: nanoid(), title: 'Non-Pharmaceuticals', link: '/pharmeuticals' },
          { id: nanoid(), title: 'Ward Charges', link: '/ward-prices' },

        ]}
        icon={<FaMoneyBill />}
      />

      <SidebarItemButton
        selected={pathname === '/radiology'}
        onClick={() => navigate('/radiology')}
        text="Radiology"
        icon={<FaRadiation />}
      />

      <SidebarItemLink
        selected={pathname === '/stores' || pathname.includes('pharmaceuticals')}
        onClick={onToggle}
        text="Stores"
        link="/stores"
        itemList={[
          { id: nanoid(), title: 'General Store', link: '/general-store' },
          { id: nanoid(), title: 'Pharmaceutical', link: '/pharmaceuticals' },
          { id: nanoid(), title: 'Non Pharmaceutical', link: '/non-pharmaceuticals' },

        ]}
        icon={<FaStore />}
      />

      <SidebarItemLink
        selected={pathname === '/items'}
        onClick={onToggle}
        text="items"
        icon={<FaListOl />}
      />

    </>
  );
};

export default SidebarListItems;
