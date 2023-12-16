import {
  FaCalendarTimes,
  FaCar,
  FaChild,
  FaHome, FaHospitalAlt, FaListOl, FaMoneyBill, FaPills,
  FaProcedures,
  FaRadiation, FaStore, FaToolbox, FaTools, FaTrain, FaUser, FaUserNurse,
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

      <SidebarItemLink
        selected={pathname === '/admission'}
        onClick={onToggle}
        text="Admission"
        link="/admission"
        itemList={[
          { id: nanoid(), title: 'Bed Allocation', link: '/bed-allocation' },
          { id: nanoid(), title: 'Bed Billing', link: '/bed-billing' },
        ]}
        icon={<FaRadiation />}
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

      <SidebarItemLink
        selected={pathname === '/nursing-station'}
        onClick={onToggle}
        text="Nursing Station"
        link="/nursing-station"
        itemList={[
          { id: nanoid(), title: 'Dialysis Package', link: '/ward-prices' },
          { id: nanoid(), title: 'Patient Queue', link: '/ward-prices' },
          { id: nanoid(), title: 'Pharmacy Requests', link: '/pharmeuticals' },
          { id: nanoid(), title: 'Procedure Reports', link: '/pharmeuticals' },
          { id: nanoid(), title: 'Triaged Patients', link: '/pharmaceutical-price-list' },
          { id: nanoid(), title: 'Vital Signs & Allergies', link: '/services-price-list' },

        ]}
        icon={<FaUserNurse />}
      />

      <SidebarItemButton
        selected={pathname === '/patients'}
        onClick={() => navigate('/patients')}
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

      <SidebarItemLink
        selected={pathname === '/procedures'}
        onClick={onToggle}
        text="Procedures"
        link="/procedures"
        itemList={[
          { id: nanoid(), title: 'Items', link: '/procedure-items' },

        ]}
        icon={<FaProcedures />}
      />

      <SidebarItemLink
        selected={pathname === '/radiology' || pathname.includes('/add-radiology-request')}
        onClick={onToggle}
        text="Radiology"
        link="/radiology"
        itemList={[
          { id: nanoid(), title: 'Radiology Requests', link: '/radiology-requests' },
          { id: nanoid(), title: 'Radiology Visits', link: '/radiology-visits' },
        ]}
        icon={<FaRadiation />}
      />

      <SidebarItemLink
        selected={pathname === '/requisitions' || pathname.includes('/add-requisitions')}
        onClick={onToggle}
        text="Store Requisitions"
        link="/requisitions"
        itemList={[
          { id: nanoid(), title: 'Requisitions', link: '/requisitions' },
          { id: nanoid(), title: 'Order Note', link: '/general-store' },
        ]}
        icon={<FaStore />}
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

      <SidebarItemButton
        selected={pathname === '/suppliers' || pathname.includes('add-suppliers') || pathname.includes('supplier-classification')}
        onClick={() => navigate('/suppliers')}
        text="suppliers"
        icon={<FaTrain />}
      />

      <SidebarItemLink
        selected={pathname === '/items' || pathname.includes('/add-measuring-unit')}
        onClick={onToggle}
        text="Items"
        link="/items"
        itemList={[
          { id: nanoid(), title: 'Brand', link: '/brand' },
          { id: nanoid(), title: 'Item Category', link: '/item-category' },
          { id: nanoid(), title: 'Measuring Unit', link: '/measuring-unit' },
          { id: nanoid(), title: 'Non Pharmaceutical', link: '/non-pharmaceuticals' },

        ]}
        icon={<FaListOl />}
      />

      <SidebarItemLink
        selected={pathname === '/vehicles' || pathname.includes('pharmaceuticals')}
        onClick={onToggle}
        text="Vehicles"
        link="/vehicles"
        itemList={[
          { id: nanoid(), title: 'Vehicle Category', link: '/non-pharmaceuticals' },
          { id: nanoid(), title: 'Vehicles', link: '/vehicles' },
          { id: nanoid(), title: 'Mileage', link: '/mileage' },

        ]}
        icon={<FaCar />}
      />

    </>
  );
};

export default SidebarListItems;
