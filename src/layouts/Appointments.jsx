/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/prop-types */
import {
  Box, Button, HStack, Text, VStack,
} from '@chakra-ui/react';
// import axios from "axios"
import { FaFileDownload, FaPrint } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import moment from 'moment/moment';
import BreadCrumbNav from '../components/BreadCrumbNav';
import DataTable2 from '../components/tables/DataTable';
import { fetchAllAppointments } from '../_reducers/appointmentSlice';

const Appointments = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data } = useSelector((state) => state.appointments);

  const columnsx = useMemo(
    () => [
      {
        header: 'Appointment ID',
        accessorKey: 'appointment_id',
        cell: (props) => <Text>{props.getValue()}</Text>,

      },
      {
        header: 'Doctor ID',
        accessorKey: 'doctor_id',
        cell: (props) => <Text>{props.getValue()}</Text>,
        size: 200,

      },
      {
        header: 'Patient ID',
        accessorKey: 'patient_id',
        cell: (props) => <Text>{props.getValue()}</Text>,

      },
      {
        header: 'Admission Date',
        accessorKey: 'appointment_date',
        enableSorting: false,
        cell: (props) => <Text>{moment(props.getValue()).format('LL')}</Text>,

      },
      {
        header: 'Status',
        accessorKey: 'admission_status',
        cell: (props) => <Text>{props.getValue()}</Text>,

      },
    ],

    [],
  );

  const subrowData = data
    && data.map((item) => ({
      ...item,
      subRows: [],
    }));
  // const fetchData = useCallback(()=>{
  //   dispatch(getAllPriceLists())
  // },[dispatch])

  useEffect(() => {
    dispatch(fetchAllAppointments());
  }, [dispatch]);

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
        <BreadCrumbNav link="/add-suppliers" />
        <HStack p={3}>
          <Button
            colorScheme="purple"
            variant="outline"
            rounded="full"
            onClick={() => navigate('/supplier-classification')}
          >
            Supplier Classification

          </Button>

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
            Suppliers
            <span style={{
              fontSize: '18px',
              // fontWeight: 'normal',
              color: 'gray',
            }}
            >
              {' '}
              (
              {subrowData.length}
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

export default Appointments;
