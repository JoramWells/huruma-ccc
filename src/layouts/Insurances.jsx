/* eslint-disable react/prop-types */
/* eslint-disable react/no-unstable-nested-components */
import {
  Box, Button, HStack, Text, VStack,
} from '@chakra-ui/react';
// import axios from "axios"
import { FaFileDownload, FaPrint } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useMemo } from 'react';
import BreadCrumbNav from '../components/BreadCrumbNav';
import { getAllInsurance } from '../_reducers/insuranceSlice';
import DataTable2 from '../components/tables/DataTable';

const Insurance = () => {
  const dispatch = useDispatch();

  const { data } = useSelector((state) => state.insurances);

  const subrowData = data
        && data.map((item) => ({
          ...item,
          subRows: [],
        }));
    // const fetchData = useCallback(()=>{
    //   dispatch(getAllPriceLists())
    // },[dispatch])

  useEffect(() => {
    dispatch(getAllInsurance());
  }, [dispatch]);

  const columns = useMemo(() => [

    [
      {
        header: 'Insurance Name',
        accessorKey: 'insuranceName',
        cell: (props) => <Text>{props.getValue()}</Text>,
      },
      {
        header: 'Insurance Category',
        accessorKey: 'insuranceCategory',
        cell: (props) => <Text>{props.getValue()}</Text>,
      },
      {
        header: 'Charges',
        accessorKey: 'charges',
        cell: (props) => <Text>{props.getValue()}</Text>,
      },
    ],
  ], []);

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
        <BreadCrumbNav link="/add-insurance" />
        <HStack
          w="100%"
          justifyContent="space-between"
          bgColor="white"
          p={3}
          rounded="lg"
          mt={2}
        >
          <Text fontSize="xl" fontWeight="bold">
            Insurance Items
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
          <DataTable2 data={subrowData} columns={columns} />
        </Box>
      </Box>
    </VStack>
  );
};

export default Insurance;
