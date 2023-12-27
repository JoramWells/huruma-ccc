/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/prop-types */
import {
  Avatar,
  Box, Button, HStack, Text, VStack,
} from '@chakra-ui/react';
// import axios from "axios"
import { FaFileDownload, FaPrint } from 'react-icons/fa';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { nanoid } from '@reduxjs/toolkit';
import BreadCrumbNav from '../components/BreadCrumbNav';
import DataTable2 from '../components/tables/DataTable';
import { useGetPatientsQuery } from '../api/patients.api';

const outPatientList = [

  {
    id: nanoid(),
    text: 'ANC',
  },
  {
    id: nanoid(),
    text: 'Cervical Screening',
  },
  {
    id: nanoid(),
    text: 'Child Health Information',
  },
  {
    id: nanoid(),
    text: 'Child Weight Gaps',
  },
  {
    id: nanoid(),
    text: 'Child Height Gaps',
  },
  {
    id: nanoid(),
    text: 'FP',
  },
  {
    id: nanoid(),
    text: 'PNC',
  },
  {
    id: nanoid(),
    text: 'FP',
  },
  {
    id: nanoid(),
    text: 'SGBV',
  },
];

const UserNameAvatar = ({ fullName }) => (
  <HStack>
    <Avatar
      // size="sm"
      name={fullName}
      color="white"
    />
    <Text>{fullName}</Text>
  </HStack>
);

const Patients = () => {
  const navigate = useNavigate();

  const {
    data, error, isLoading, isFetching, isSuccess,
  } = useGetPatientsQuery();

  // const { data } = useSelector((state) => state.patients);
  // console.log(data);

  const columnsx = useMemo(
    () => [
      {
        header: 'Patient Name',
        accessorKey: 'last_name',
        cell: (props) => (
          <Box onClick={() => navigate(`/patient-detail/${props.row.original.patient_id}`)}>
            <UserNameAvatar
              fullName={`${props.row.original.first_name} ${props.row.original.last_name}`}
            />
          </Box>
        ),
        size: 200,

      },
      {
        header: 'Mobile No.',
        accessorKey: 'cell_phone',
        cell: (props) => <Text>{props.getValue()}</Text>,

      },
      {
        header: 'Gender',
        accessorKey: 'patient_gender',
        enableSorting: false,
        cell: (props) => <Text>{props.getValue() === '1' ? 'MALE' : 'FEMALE'}</Text>,

      },
      {
        header: 'Patient Type',
        accessorKey: 'patient_type',
        cell: (props) => <Text>{props.getValue()}</Text>,

      },
      {
        header: 'Action',
      },
    ],

    [navigate],
  );

  const subrowData = data
        && data.map((item) => ({
          ...item,
          subRows: [],
        }));

  return (
    <VStack
      mt={5}
      w="full"
      bgColor="gray.50"
      p={3}
      h="95vh"
      position="relative"
    >
      <Box bgColor="white" w="full">
        <BreadCrumbNav link="/add-patient" />

        <HStack w="full" p={2} flexWrap="wrap">
          {outPatientList.map((item) => (
            <Button key={item.id}>{item.text}</Button>
          ))}
        </HStack>

        <HStack
          w="100%"
          justifyContent="space-between"
          bgColor="white"
          p={3}
          rounded="lg"
          mt={2}
        >
          <Text fontSize="xl" fontWeight="bold">
            Patients
            <span style={{
              fontSize: '18px',
              // fontWeight: 'normal',
              color: 'gray',
            }}
            >
              {' '}
              (
              {subrowData?.length}
              )

            </span>
          </Text>
          <HStack>
            <Button leftIcon={<FaPrint />}>Print Report</Button>

            <Button leftIcon={<FaFileDownload />}>Download</Button>

          </HStack>
        </HStack>
        <Box
          w="100%"
          bgColor="white"
          p={3}
          h="89%"
        >
          <DataTable2 data={subrowData} columns={columnsx} />
        </Box>
      </Box>
    </VStack>
  );
};

export default Patients;
