import {
  Box, Button, HStack, Text, VStack,
} from '@chakra-ui/react';
// import axios from "axios"
import { FaFileDownload, FaPrint } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import BreadCrumbNav from '../components/BreadCrumbNav';
import UserTable from '../components/tables/UserTable';
import { getAllItems } from '../_reducers/itemSlice';

const columns = [
  {
    Header: 'Item Code',
    accessor: 'itemCode',
  },
  {
    Header: 'Item Description',
    accessor: 'itemDescription',
  },
  {
    Header: 'Item Category',
    accessor: 'itemCategory',
  },

  {
    Header: 'Brand',
    accessor: 'brand',
  },
  {
    Header: 'U.O.M',
    accessor: 'uom',
  },
  {
    Header: 'Buying Price',
    accessor: 'buyingPrice',
  }, {
    Header: 'Selling Price',
    accessor: 'sellingPrice',
  },
  {
    Header: 'Expense Account',
    accessor: 'expenseAccount',
  }, {
    Header: 'Income Account',
    accessor: 'incomeAccount',
  },
];

const Items = () => {
  const dispatch = useDispatch();

  const { data } = useSelector((state) => state.items);

  const subrowData = data
    && data.map((item) => ({
      ...item,
      subRows: [],
    }));
  // const fetchData = useCallback(()=>{
  //   dispatch(getAllPriceLists())
  // },[dispatch])

  useEffect(() => {
    dispatch(getAllItems());
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
        <BreadCrumbNav link="/add-item" />
        <HStack
          w="100%"
          justifyContent="space-between"
          bgColor="white"
          p={3}
          rounded="lg"
          mt={2}
        >
          <Text fontSize="xl" fontWeight="bold">
            Users
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
          <UserTable data={subrowData} columns={columns} />
        </Box>
      </Box>
    </VStack>
  );
};

export default Items;
