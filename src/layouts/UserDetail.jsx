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
import Step1 from '../components/PatientProfile/Medical';
import Step2 from '../components/PatientProfile/Step2';
import { useGetUserQuery } from '../api/users.api';

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

const UserDetail = () => {
  const { id } = useParams();

  const { data } = useGetUserQuery(id);

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
      <Text>hello</Text>
    </VStack>
  );
};

export default UserDetail;
