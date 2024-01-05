/* eslint-disable no-unused-vars */
/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable react/prop-types */
import {
  Avatar, Box, HStack, Tab, TabList, TabPanel, TabPanels, Tabs, Text, VStack,
} from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useCallback, useState } from 'react';
import {
  FaAddressBook, FaCalendar, FaChartLine, FaCreditCard, FaFileInvoice, FaUser,
} from 'react-icons/fa';
import { nanoid } from '@reduxjs/toolkit';
import Step1 from '../components/PatientProfile/Medical';
import Step2 from '../components/PatientProfile/Step2';
import { useGetMaternityProfileQuery } from '../api/maternity.api';
import AppointmentCard from '../components/PatientProfile/AppointmentCard';

const PatientCard = ({ text, icon, onClick }) => {
  const [step, setStep] = useState(0);
  return (
    <VStack
      w="full"
      onClick={onClick}

    >
      <HStack
        w="full"
        justifyContent="flex-start"
        bgColor="whitesmoke"
        p={4}
        rounded="lg"
        _hover={{
          cursor: 'pointer',
          // colorScheme: 'blue',
          color: 'blue.500',
          bgColor: 'blue.50',
        }}
        color="blue.800"
      >
        {icon}
        <Text>
          {text}
        </Text>
      </HStack>
    </VStack>
  );
};

const profileData = [
  {
    id: nanoid(),
    text: 'Medical History',
    icon: <FaChartLine />,
  },
  {
    id: nanoid(),
    text: 'Admissions',
    icon: <FaAddressBook />,
  },
  {
    id: nanoid(),
    text: 'Appointments',
    icon: <FaCalendar />,
  },
  {
    id: nanoid(),
    text: 'Invoices',
    icon: <FaFileInvoice />,
  },
  {
    id: nanoid(),
    text: 'Payments',
    icon: <FaCreditCard />,
  },
  {
    id: nanoid(),
    text: 'View Profile',
    icon: <FaUser />,
  },
];

const MaternityProfileDetail = () => {
  const [sideItem, setSideItem] = useState(0);
  const { id } = useParams();
  // const { data, loading } = useSelector((state) => state.patients);
  const { data, isLoading } = useGetMaternityProfileQuery(id);
  const dispatch = useDispatch();

  const handleSetSideItem = useCallback((step) => {
    setSideItem(step);
  }, [setSideItem]);

  // const date = `${data.day_of_birth}/${data.month_of_birth}/${data.dob}`;
  console.log(data);

  return (
    <VStack
      h="100vh"
      w="full"
      mt="55px"
      bgColor="gray.50"
      alignItems="center"
      // justifyContent="center"
      p={3}
    >
      <Text>{data?.name_of_client}</Text>

      <Box w="full" bgColor="white">
        <Tabs isFitted>
          <TabList>
            <Tab>Allergies</Tab>
            <Tab>Antenatal</Tab>
            <Tab>Clinical Notes</Tab>
            <Tab>Delivery</Tab>
            <Tab>Deworming</Tab>
            <Tab>Impairments</Tab>
            <Tab>Immunizations</Tab>
            <Tab>Infant Feeding</Tab>
            <Tab>Lab Req.</Tab>
            <Tab>Patient Notes</Tab>
            <Tab>Physical exam.</Tab>
            <Tab>Post Natal</Tab>
            <Tab>Procedures</Tab>
            <Tab>Preventive Services</Tab>
            <Tab>Radiology Req.</Tab>
            <Tab>Vitamin A Capsules</Tab>
            <Tab>Visits</Tab>

          </TabList>

          <TabPanels>
            <TabPanel>
              <p>one!</p>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>

    </VStack>
  );
};

export default MaternityProfileDetail;
