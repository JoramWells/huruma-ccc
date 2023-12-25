/* eslint-disable no-unused-vars */
/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable react/prop-types */
import {
  Avatar, HStack, Text, VStack,
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
      {isLoading ? <Text>loading...</Text> : (
        <HStack
          p={3}
          w="full"
          alignItems="flex-start"
        >
          <VStack
            w="md"
            bgColor="white"
            rounded="xl"
            p={5}
            spacing={6}
            border="1px"
            borderColor="gray.200"
            // boxShadow="md"
            // mt={8}
          >
            <Avatar
              name={data.name_of_client}
              size="2xl"
              color="white"
            />
            <VStack spacing={2}>
              <Text
                textTransform="capitalize"
                fontWeight="bold"
              >
                {data?.name_of_client}

              </Text>
              <Text color="gray.500">{data?.anc_number}</Text>
              <Text>
                {data?.telephone}
              </Text>
            </VStack>
            <VStack w="full" spacing={4}>
              {profileData.map((item, idx) => (
                <PatientCard
                  key={item.id}
                  icon={item.icon}
                  text={item.text}
                  onClick={() => handleSetSideItem(idx)}
                />
              ))}
            </VStack>
          </VStack>
          {sideItem === 0 && <Step1 />}
          {sideItem === 1 && <Step2 />}
          {sideItem === 2 && <AppointmentCard />}

        </HStack>
      )}

    </VStack>
  );
};

export default MaternityProfileDetail;
