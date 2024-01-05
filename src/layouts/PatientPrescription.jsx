/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unsafe-optional-chaining */
import {
  Avatar,
  Button,
  HStack, Text, VStack,
} from '@chakra-ui/react';
import {
  useLocation, useNavigate, useParams, useSearchParams,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useMemo, useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import PropTypes from 'prop-types';
import { useGetPatientQuery } from '../api/patients.api';
import BreadCrumbNav from '../components/BreadCrumbNav';
import DataTable2 from '../components/tables/DataTable';

const PatientPrescription = () => {
  const [sideItem, setSideItem] = useState(0);
  const { id } = useParams();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const stepSearch = searchParams.get('step');
  const dispatch = useDispatch();

  const { data, isLoading } = useGetPatientQuery(id);

  const columns = useMemo(
    () => [
      {
        header: 'Medication Category',
        accessorKey: 'cell_phone',
        cell: (props) => <Text>{props.getValue()}</Text>,

      },
      {
        header: 'Medication Name',
        accessorKey: 'patient_gender',
        enableSorting: false,
        // eslint-disable-next-line react/prop-types
        cell: (props) => <Text>{props.getValue()}</Text>,

      },
      {
        header: 'Prescription Term',
        accessorKey: 'patient_type',
        cell: (props) => <Text>{props.getValue()}</Text>,

      },
      {
        header: 'Action',
        cell: () => <Button>Add Prescription</Button>,
      },
    ],

    [],
  );

  const breadCrumbData = [
    {
      id: nanoid(),
      title: 'Patients',
      link: '/patients',
    },
    {
      id: nanoid(),
      title: `${data?.first_name} ${data?.last_name}`,
      link: '/',
      isCurrentPage: true,
    },
  ];

  return (
    <VStack
      h="100vh"
      w="full"
      mt="65px"
      bgColor="gray.50"
      alignItems="center"
      // justifyContent="center"
      p={3}
    >
      <BreadCrumbNav
        breadCrumbData={breadCrumbData}
        link="/add-prescription"
      />

      <HStack
        w="full"
        alignItems="flex-start"
        bgColor="white"
        rounded="lg"
        p={2}
      >
        <Avatar
          size="xl"
          name={`${data?.first_name} ${data?.last_name}`}
        />
        <Text
          fontSize="2xl"
          fontWeight="semibold"
        >
          {`${data?.first_name} ${data?.last_name}`}
        </Text>
      </HStack>
      <DataTable2 columns={columns} />

    </VStack>
  );
};

export default PatientPrescription;
