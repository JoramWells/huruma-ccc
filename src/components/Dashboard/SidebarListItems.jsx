import {
  FaCalendarTimes,
  FaCar,
  FaChild,
  FaFileInvoiceDollar,
  FaHome, FaHospitalAlt, FaListOl, FaMoneyBill, FaNotesMedical, FaPills,
  FaProcedures,
  FaRadiation, FaRegAddressBook, FaRegMoneyBillAlt,
  FaStore, FaToolbox, FaTools, FaTrain, FaUser, FaUserNurse,
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
        icon={<FaHome size={20} />}
      />

      <SidebarItemLink
        selected={pathname === '/administration'
        || pathname.includes('administration')
          || pathname.includes('admin')
          || pathname.includes('user-detail')
        || pathname.includes('add-service')}
        onClick={onToggle}
        text="Administration"
        link="/administration"
        itemList={[
          { id: nanoid(), title: 'Departments', link: '/admin-departments' },
          { id: nanoid(), title: 'Diseases', link: '/diseases' },
          { id: nanoid(), title: 'Ministry Diseases', link: '/disease-ministry' },
          { id: nanoid(), title: 'Drugs', link: '/admin-drugs' },
          { id: nanoid(), title: 'Hospital Branch', link: '/general-store' },
          { id: nanoid(), title: 'Insurances', link: '/admin-insurances' },
          { id: nanoid(), title: 'Privileges', link: '/admin-privileges' },
          { id: nanoid(), title: 'Services', link: '/admin-services' },
          { id: nanoid(), title: 'User Type', link: '/admin-user-type' },
          { id: nanoid(), title: 'Users', link: '/admin-users' },

        ]}
        icon={<FaUser size={20} />}
      />

      <SidebarItemLink
        selected={pathname === '/admission'
        || pathname.includes('/bed-allocation')
        || pathname.includes('/miscellaneous-charges')
        || pathname.includes('/bed-billing')
        || pathname.includes('/admission-detail')
          || pathname.includes('/admission-category')
          || pathname.includes('/add-admission-category')
          || pathname.includes('/add-admission')
          || pathname.includes('/admission-type')}
        onClick={onToggle}
        text="Admission"
        link="/admission"
        itemList={[
          { id: nanoid(), title: 'Bed Allocation', link: '/bed-allocation' },
          { id: nanoid(), title: 'Bed Billing', link: '/bed-billing' },
          { id: nanoid(), title: 'Category', link: '/admission-category' },
          { id: nanoid(), title: 'Miscellaneous Charges', link: '/miscellaneous-charges' },
          { id: nanoid(), title: 'Type', link: '/admission-type' },
        ]}
        icon={<FaRegAddressBook size={20} />}
      />

      <SidebarItemLink
        selected={pathname === '/appointments'
          || pathname.includes('/appointment-checklist')
          || pathname.includes('/appointment-diagnosis')
          || pathname.includes('/appointment-detail')}
        onClick={onToggle}
        text="Appointments"
        link="/appointments"
        itemList={[
          { id: nanoid(), title: 'Appointment Checklist', link: '/appointment-checklist' },
          { id: nanoid(), title: 'Appointment Diagnosis', link: '/appointment-diagnosis' },
          { id: nanoid(), title: 'Patient Queue', link: '/patient-queue' },
        ]}
        icon={<FaCalendarTimes size={20} />}
      />
      <SidebarItemLink
        selected={pathname === '/charges'
          || pathname.includes('/charges-checklist')
          || pathname.includes('/charges-diagnosis')
          || pathname.includes('/charges-detail')}
        onClick={onToggle}
        text="Charges"
        link="/charges"
        itemList={[
          { id: nanoid(), title: 'Appointment Checklist', link: '/appointment-checklist' },
          { id: nanoid(), title: 'Appointment Diagnosis', link: '/appointment-diagnosis' },
          { id: nanoid(), title: 'Patient Queue', link: '/patient-queue' },
        ]}
        icon={<FaCalendarTimes size={20} />}
      />

      <SidebarItemLink
        selected={pathname === '/hospitals'
          || pathname.includes('/hospital-clinics')
          || pathname.includes('/hospital-stores')
          || pathname.includes('/hospital-types')}
        onClick={onToggle}
        text="Hospitals"
        link="/hospitals"
        itemList={[
          { id: nanoid(), title: 'Clinics', link: '/hospital-clinics' },
          { id: nanoid(), title: 'Stores', link: '/hospital-stores' },
          { id: nanoid(), title: 'Types', link: '/hospital-types' },
        ]}
        icon={<FaHospitalAlt size={20} />}
      />

      <SidebarItemButton
        selected={pathname === '/labs'}
        onClick={() => navigate('/labs')}
        text="lab"
        icon={<FaTools size={20} />}
      />

      <SidebarItemLink
        selected={pathname === '/maternity-profile'
          || pathname.includes('/maternity-antenatal-profile')
          || pathname.includes('/add-maternity-antenatal-profile')
          || pathname.includes('/add-maternity-profile')
        || pathname.includes('/maternity-profile')}
        onClick={onToggle}
        text="Maternity"
        link="/maternity-profile"
        itemList={[
          { id: nanoid(), title: 'Maternity Antenatal Profile', link: '/maternity-antenatal-profile' },

        ]}
        icon={<FaChild size={20} />}
      />

      <SidebarItemButton
        selected={pathname === '/medication'
        || pathname.includes('medication-category')
        || pathname.includes('medication-purchases')
          || pathname.includes('medication-stock-take')}
        onClick={() => navigate('/medication')}
        text="medication"
        icon={<FaNotesMedical size={20} />}
      />

      <SidebarItemLink
        selected={pathname === '/nursing-station'}
        onClick={onToggle}
        text="Nursing Station"
        link="/nursing-station"
        itemList={[
          { id: nanoid(), title: 'Dialysis Package', link: '/ward-prices' },
          { id: nanoid(), title: 'Patient Queue', link: '/patients' },
          { id: nanoid(), title: 'Pharmacy Requests', link: '/pharmeuticals' },
          { id: nanoid(), title: 'Procedure Reports', link: '/pharmeuticals' },
          { id: nanoid(), title: 'Triaged Patients', link: '/pharmaceutical-price-list' },
          { id: nanoid(), title: 'Vital Signs & Allergies', link: '/services-price-list' },

        ]}
        icon={<FaUserNurse size={20} />}
      />
      <SidebarItemLink
        selected={pathname === '/patient-invoices'}
        onClick={onToggle}
        text="Patient Invoices"
        link="/patient-invoices"
        itemList={[
          { id: nanoid(), title: 'Individual Accounts', link: '/individual-accounts' },
          { id: nanoid(), title: 'Invoices', link: '/invoices' },
          { id: nanoid(), title: 'Discharged Patients', link: '/discharged-patients' },
          { id: nanoid(), title: 'Miscellaneous Income Invoices', link: '/miscellaneous-invoices' },
          { id: nanoid(), title: 'Consultation Retainer Invoice', link: '/consultation-retainer' },
          { id: nanoid(), title: 'Dispatched Invoices', link: '/dispatched-invoices' },

        ]}
        icon={<FaFileInvoiceDollar size={20} />}
      />

      <SidebarItemButton
        selected={pathname === '/patients' || pathname.includes('/patient-detail') || pathname.includes('/add-patient')}
        onClick={() => navigate('/patients')}
        text="patients"
        icon={<FaHospitalAlt size={20} />}
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
        icon={<FaPills size={20} />}
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
        icon={<FaToolbox size={20} />}
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
        icon={<FaMoneyBill size={20} />}
      />

      <SidebarItemLink
        selected={pathname === '/procedures' || pathname.includes('/procedure-items')}
        onClick={onToggle}
        text="Procedures"
        link="/procedures"
        itemList={[
          { id: nanoid(), title: 'Items', link: '/procedure-items' },

        ]}
        icon={<FaProcedures size={20} />}
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
        icon={<FaRadiation size={20} />}
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
        icon={<FaStore size={20} />}
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
        icon={<FaStore size={20} />}
      />

      <SidebarItemButton
        selected={pathname === '/suppliers' || pathname.includes('add-suppliers') || pathname.includes('supplier-classification')}
        onClick={() => navigate('/suppliers')}
        text="suppliers"
        icon={<FaTrain />}
      />

      <SidebarItemButton
        selected={pathname === '/tax'}
        onClick={() => navigate('/tax')}
        text="tax"
        icon={<FaRegMoneyBillAlt size={20} />}
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
        icon={<FaListOl size={20} />}
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
        icon={<FaCar size={20} />}
      />

      <SidebarItemLink
        selected={pathname === '/wards' || pathname.includes('add-ward')
        || pathname.includes('ward-type')
        || pathname.includes('add-ward-type')}
        onClick={onToggle}
        text="Wards"
        link="/wards"
        itemList={[
          { id: nanoid(), title: 'Ward Type', link: '/ward-type' },

        ]}
        icon={<FaHospitalAlt size={20} />}
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
        icon={<FaListOl size={20} />}
      />

    </>
  );
};

export default SidebarListItems;
