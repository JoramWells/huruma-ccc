/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/prop-types */
import {
  Avatar,
  Box, Button, HStack, IconButton, Text, VStack,
} from '@chakra-ui/react';
// import axios from "axios"
import {
  FaAudible,
  FaBoxOpen, FaFileDownload, FaHandshake, FaPrint, FaUserNurse,
} from 'react-icons/fa';
import { useCallback, useMemo } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import moment from 'moment/moment';
import BreadCrumbNav from '../../components/BreadCrumbNav';
import DataTable2 from '../../components/tables/DataTable';
import { useGetAppointmentsQuery } from '../../api/appointments.api';

const UserNameAvatar = ({ fullName }) => (
  <HStack>
    <Avatar
      size="sm"
      name={fullName}
      color="white"
    />
    <Text
      textTransform="uppercase"
      fontWeight="bold"
      color="gray.700"
    >
      {fullName}

    </Text>
  </HStack>
);

const PatientQueue = () => {
  const navigate = useNavigate();

  const {
    data, error, isLoading, isFetching, isSuccess,
  } = useGetAppointmentsQuery();

  const columnsx = useMemo(
    () => [
      {
        header: 'Patient Name',
        accessorKey: 'patient',
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
        header: 'Appointment Time',
        accessorKey: 'appointment_date',
        cell: (props) => (
          <VStack alignItems="flex-start">
            <Text>{moment(props.getValue()).format('LL')}</Text>
            <Text color="gray.500">{moment(props.row.original.appointment_time, 'HH:mm').format('hh:mm A')}</Text>
          </VStack>
        ),

      },
      {
        header: 'PAYMENT DETAILS',
        accessorKey: 'insurance_detail',
        enableSorting: false,
        cell: (props) => <Text>{props.getValue()?.insurance_name}</Text>,

      },
      {
        header: 'Vital Signs',
        // accessorKey: 'tem',
        cell: (props) => (
          <Box>
            {!props.row.original.temperature
              ? (
                <Button
                  variant="outline"
                  colorScheme="orange"
                  size="sm"
                  onClick={() => navigate(`/add-vitals/${props.row.original.patient_id}`)}
                >
                  NOT RECORDED
                </Button>
              ) : <Button size="sm" colorScheme="green" variant="ghost">RECORDED</Button>}
          </Box>
        ),

      },
      {
        header: 'Action',
        cell: (props) => (
          <HStack justifyContent="flex-start" alignItems="flex-start">
            <Button
              variant="outline"
              color="gray.700"
              borderColor="gray.700"
              size="sm"
              onClick={() => navigate({
                pathname: `/doctor/${props.row.original.appointment_id}`,
                search: `?patient_id=${props.row.original.patient_id}`,
              })}
              textTransform="uppercase"
            >
              See Patient
            </Button>
          </HStack>
        ),
      },
    ],

    [navigate],
  );

  // const subRowData = data
  //       && data.map((item) => ({
  //         ...item,
  //         subRows: [],
  //       }));

  const filterByDate = useCallback(() => {
    const todayDate = moment(new Date()).format('YYYY-MM-DD');
    return data?.filter((item) => moment(item.appointment_date).isSame(todayDate, 'day'));
  }, [data]);

  const filteredData = filterByDate();

  return (
    <VStack
      mt="55px"
      w="full"
      bgColor="gray.50"
      p={3}
      h="95vh"
      position="relative"
    >
      <Box bgColor="white" w="full">
        <BreadCrumbNav link="/add-patient" />

        <HStack
          w="99%"
          justifyContent="space-between"
          bgColor="white"
          p={2}
          pl={5}
          rounded="lg"
          m="auto"
        >
          <Text
            fontSize="16px"
            fontWeight="bold"
          >
            Patients Queue
            <span style={{
              // fontSize: '18px',
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
            <Button
              leftIcon={<FaPrint />}
              size="sm"
            >
              Print Report

            </Button>

            <Button
              leftIcon={<FaFileDownload />}
              size="sm"
            >
              Download

            </Button>

          </HStack>
        </HStack>
        {filteredData?.length === 0 ? (
          <VStack
            p={2}
            h="75vh"
            alignItems="center"
            justifyContent="center"
          >

            <FaBoxOpen
              size={120}
              color="gray"
            />
            <Text
              fontSize="xl"
              fontWeight="semibold"
              color="gray.500"
            >
              No Patients Recorded

            </Text>

          </VStack>
        )
          : (
            <Box
              w="100%"
              bgColor="white"
              p={3}
              h="89%"
            >
              <DataTable2 data={filteredData} columns={columnsx} />
            </Box>
          )}
      </Box>
    </VStack>
  );
};

export default PatientQueue;
