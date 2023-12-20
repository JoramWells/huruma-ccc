/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {
  Avatar, Box, Divider, HStack, IconButton, Text, VStack,
} from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import {
  FaAddressBook, FaCalendar, FaChartLine, FaCreditCard, FaEdit, FaFileInvoice, FaUser,
} from 'react-icons/fa';
import moment from 'moment/moment';
import { nanoid } from '@reduxjs/toolkit';
import { getPatientDetail } from '../_reducers/patientSlice';

const PatientCard = ({ text, icon }) => (
  <VStack w="full">
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
  const { id } = useParams();
  const { data, loading } = useSelector((state) => state.patients);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPatientDetail(id));
  }, []);

  const date = `${data.day_of_birth}/${data.month_of_birth}/${data.dob}`;
  console.log(data);

  return (
    <VStack
      h="100vh"
      w="full"
      mt="55px"
      bgColor="whitesmoke"
      alignItems="center"
      // justifyContent="center"
      p={3}
    >
      {loading ? <Text>loading...</Text> : (
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
              <Text>{data?.cell_phone}</Text>
            </VStack>
            <VStack w="full" spacing={4}>
              {profileData.map((item) => (
                <PatientCard key={item.id} icon={item.icon} text={item.text} />
              ))}
            </VStack>
          </VStack>
        </HStack>
      )}
      <Box w="full">
        {loading ? <Text>loading...</Text>
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
