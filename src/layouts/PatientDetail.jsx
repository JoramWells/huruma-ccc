/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {
  Avatar, Box, Divider, HStack, IconButton, Text, VStack,
} from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useEffect, useState } from 'react';
import {
  FaAddressBook, FaCalendar, FaChartLine, FaCreditCard, FaEdit, FaFileInvoice, FaUser,
} from 'react-icons/fa';
import { nanoid } from '@reduxjs/toolkit';
import { getPatientDetail } from '../_reducers/patientSlice';
import Step2 from '../components/PatientProfile/Step2';
import AppointmentCard from '../components/PatientProfile/AppointmentCard';
import { useGetPatientQuery } from '../api/patients.api';
import PaymentCard from '../components/PatientProfile/PaymentCard';
import Medical from '../components/PatientProfile/Medical';

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

const HorizontalStack = ({ title, text }) => (
  <HStack
    w="full"
    _hover={{
      cursor: 'pointer',
      bgColor: 'gray.50',
      border: '1px',
      rounded: 'lg',
      borderColor: 'gray.100',
    }}
    p={4}
    justifyContent="space-between"
  >
    <Text
      color="gray.500"
      fontSize="xl"
    >
      {title}

    </Text>
    <Text
      fontSize="xl"
      fontWeight="semibold"
    >
      {text}
    </Text>
  </HStack>
);

const PatientDetail = () => {
  const [sideItem, setSideItem] = useState(0);
  const { id } = useParams();
  const dispatch = useDispatch();

  const { data, isLoading } = useGetPatientQuery(id);

  const handleSetSideItem = useCallback((step) => {
    setSideItem(step);
  }, [setSideItem]);

  // const date = `${data.day_of_birth}/${data.month_of_birth}/${data.dob}`;
  // console.log(data);

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
              name={`${data.first_name} ${data.last_name}`}
              size="2xl"
              color="white"
            />
            <VStack spacing={2}>
              <Text
                textTransform="capitalize"
                fontWeight="bold"
              >
                {data?.first_name + data?.middle_name + data?.last_name}

              </Text>
              <Text color="gray.500">{data?.id_number}</Text>
              <Text>
                {data?.cell_phone}
                {' '}
                {sideItem}
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
          {sideItem === 0 && <Medical />}
          {sideItem === 1 && <Step2 />}
          {sideItem === 2 && <AppointmentCard />}
          {sideItem === 4 && <PaymentCard />}

        </HStack>
      )}
      <Box w="full">
        {isLoading ? <Text>loading...</Text>
          : (
            <HStack
              w="full"
              p={3}
              flexWrap="wrap"
              alignItems="flex-start"
            >
              <Box
                // w="full"
                bgColor="white"
                rounded="3xl"
                flex={1}

              >
                <HStack p={3}>
                  <Text fontSize="2xl" fontWeight="bold">Hospital Details</Text>

                </HStack>
                <Divider />
                <HorizontalStack title="Registered:" text={data.existing_patient} />

                <HorizontalStack title="Hospital ID:" text={data.hospital_id} />
                <HorizontalStack title="Patient Category" text={data.patient_category_id} />
                <HorizontalStack title=" Out/In patient file:" text={data.out_patient_file_no} />
                <HorizontalStack title="Membership enabled" text={data.membership_enabled} />

              </Box>

              {/* payment details */}
              <Box
                flex={1}
                bgColor="white"
                rounded="3xl"

              >
                <HStack p={3}>
                  <Text fontSize="2xl" fontWeight="bold">Payment Details</Text>

                </HStack>
                <Divider />
                <HorizontalStack title="Copay Account" text={data.copay_payment_account_id} />

                <HorizontalStack title="Insurance Membership Number" text={data.insurance_membership_number} />
                <HorizontalStack title="Patient Category" text={data.patient_category_id} />

              </Box>

            </HStack>
          )}
      </Box>

    </VStack>
  );
};

export default PatientDetail;
