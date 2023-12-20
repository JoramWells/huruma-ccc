/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/prop-types */
/* eslint-disable */
import {
  Box, Button, HStack, Text, VStack, Tag
} from '@chakra-ui/react';
// import axios from "axios"
import { FaFileDownload, FaPrint } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import BreadCrumbNav from '../components/BreadCrumbNav';
import DataTable2 from '../components/tables/DataTable';
import { fetchAllAdmission } from '../_reducers/admissionSlice';
import moment from 'moment/moment';

const Admission = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data } = useSelector((state) => state.admission);

  const columns = useMemo(
    () => [
      {
        header: 'Patient Name',
        accessorKey: 'patient_detail',
        cell: (props) => <Box onClick={()=>
        navigate('/admission-detail/' + props.row.original.admission_id)
        }>
          <Text>{props.getValue() ? props.getValue()?.first_name
            + ' ' + props.getValue()?.middle_name : '0'}</Text>
        </Box>,

      },
      {
        header: 'Admission Date',
        accessorKey: 'admission_date',
        enableSorting: false,
        cell: (props) => <Text>{moment(new Date(props.getValue())).format('LL')}</Text>,

      },
      {
        header: 'Payment Status',
        accessorKey: 'pay_status',
        enableSorting: false,
        cell: (props) => <Box>{props.getValue() === 1 ? <Tag colorScheme='green'
        variant={'subtle'} rounded={'full'} border={'1px'}>PAID</Tag> : <Tag rounded={'full'} colorScheme='red' variant={'subtle'}>NOT PAID</Tag>}</Box>,

      },
    ],

    [],
  );


  const subRowData = data
    && data.map((item) => ({
      ...item,
      subRows: [],
    }));
  // const fetchData = useCallback(()=>{
  //   dispatch(getAllPriceLists())
  // },[dispatch])

  useEffect(() => {
    dispatch(fetchAllAdmission());
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

        <HStack
          w="100%"
          justifyContent="space-between"
          bgColor="white"
          p={3}
          rounded="lg"
          mt={2}
        >
          <Text fontSize="xl" fontWeight="bold">
            Admissions
            <span style={{
              fontSize: '18px',
              // fontWeight: 'normal',
              color: 'gray',
            }}
            >
              {' '}
              (
              {subRowData.length}
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
          <DataTable2 
          searchQueryColumn={'pay_status'}
          data={subRowData} columns={columns} />
        </Box>
      </Box>
    </VStack>
  );
};

export default Admission;
