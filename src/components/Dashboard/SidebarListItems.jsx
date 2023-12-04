import {
  FaDivide,
  FaHome, FaHospitalAlt, FaListOl, FaMoneyBill, FaStore, FaUser,
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
          { id: nanoid(), title: 'Drugs', link: '/drugs' },
          { id: nanoid(), title: 'Hospital Branch', link: '/general-store' },
          { id: nanoid(), title: 'Services', link: '/services' },
          { id: nanoid(), title: 'Users', link: '/admin-users' },

        ]}
        icon={<FaUser />}
      />

      <SidebarItemButton
        selected={pathname === '/departments'}
        onClick={() => navigate('/departments')}
        text="departments"
        icon={<FaDivide />}
      />

      <SidebarItemButton
        selected={pathname === '/dd'}
        onClick={() => navigate('/')}
        text="patients"
        icon={<FaHospitalAlt />}
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
