/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/prop-types */
import {
  Avatar,
  Box, Button, HStack, Text, VStack,
} from '@chakra-ui/react';
// import axios from "axios"
import { FaBoxOpen, FaFileDownload, FaPrint } from 'react-icons/fa';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { nanoid } from '@reduxjs/toolkit';
import moment from 'moment/moment';
import { graphqlSync } from 'graphql';
import BreadCrumbNav from '../../components/BreadCrumbNav';
import DataTable2 from '../../components/tables/DataTable';
import { useGetPatientsQuery } from '../../api/patients.api';
import { useGetAllInternalPharmacyRequestsQuery } from '../api/internalPharmacyRequest.api';

const UserNameAvatar = ({ fullName }) => (
  <HStack>
    <Avatar
      size="sm"
      name={fullName}
      color="white"
    />
    <Text>{fullName}</Text>
  </HStack>
);

const PharmacyRequest = () => {
  const navigate = useNavigate();

  const {
    data, error, isLoading, isFetching, isSuccess,
  } = useGetAllInternalPharmacyRequestsQuery();

  // const { data } = useSelector((state) => state.patients);
  // console.log(data);

  const columns = useMemo(
    () => [
      {
        header: 'Patient Name',
        accessorKey: 'patient_detail',
        cell: (props) => (
          <Box onClick={() => navigate(`/patient-detail/${props.row.original.patient_id}`)}>
            <UserNameAvatar
              fullName={`${props.getValue()?.first_name} ${props.getValue()?.middle_name}`}
            />
          </Box>
        ),
        size: 200,

      },
      {
        header: 'Date Requested',
        accessorKey: 'date_of_request',
        cell: (props) => (
          <VStack
            alignItems="flex-start"
            spacing={1}
          >
            <Text>{moment(props.getValue()).format('LL')}</Text>
            <Text color="gray.500">{moment(props.row.original.time_of_request, 'hh:mm:ss').format('hh:mm a')}</Text>
          </VStack>
        ),

      },
      {
        header: 'Medication',
        accessorKey: 'medication',
        enableSorting: false,
        cell: (props) => <Text>{props.getValue()?.medication_name}</Text>,

      },
      {
        header: 'No. of Days',
        accessorKey: 'number_of_days',
        enableSorting: false,
        cell: (props) => <Text>{props.getValue()}</Text>,

      },
      {
        header: 'Cost',
        accessorKey: 'cost',
        cell: (props) => <Text>{props.getValue()}</Text>,

      },
      {
        header: 'Action',
        cell: () => <Button>more</Button>,
      },
    ],

    [navigate],
  );

  const subRowData = data
        && data.map((item) => ({
          ...item,
          subRows: [],
        }));

  const filteredData = subRowData?.filter((item) => {
    const itemDate = moment(item.appointment_date);
    const todayDate = moment(new Date()).format('YYYY-MM-DD');
    return itemDate.isSame(todayDate, 'day');
  });
  console.log(data);

  return (
    <VStack
      mt="60px"
      w="full"
      bgColor="gray.50"
      p={3}
      h="95vh"
      position="relative"
    >
      <Box bgColor="white" w="full">
        <BreadCrumbNav link="/add-patient" />

        <HStack
          w="100%"
          justifyContent="space-between"
          bgColor="white"
          p={3}
          rounded="lg"
          mt={2}
        >
          <Text fontSize="xl" fontWeight="bold">
            Internal Pharmacy Request
            <span style={{
              fontSize: '18px',
              // fontWeight: 'normal',
              color: 'gray',
            }}
            >
              {' '}
              (
              {filteredData?.length}
              )

            </span>
          </Text>
          <HStack>
            <Button leftIcon={<FaPrint />}>Print Report</Button>

            <Button leftIcon={<FaFileDownload />}>Download</Button>

          </HStack>
        </HStack>
        {filteredData?.length === 0 ? (
          <VStack p={5}>

            <FaBoxOpen size="120" color="gray" />
            <Text fontSize="xl" fontWeight="semibold" color="gray.500">No Patients Today</Text>

          </VStack>
        )
          : (
            <Box
              w="100%"
              bgColor="white"
              p={3}
              h="89%"
            >
              <DataTable2 data={filteredData} columns={columns} />
            </Box>
          )}
      </Box>
    </VStack>
  );
};

export default PharmacyRequest;
