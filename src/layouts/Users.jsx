/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/prop-types */
import {
  Box, Button, HStack, Text, VStack,
} from '@chakra-ui/react';
// import axios from "axios"
import { FaFileDownload, FaPrint } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useMemo } from 'react';
import BreadCrumbNav from '../components/BreadCrumbNav';
import { getUsers } from '../_reducers/userSlice';
import DataTable2 from '../components/tables/DataTable';

const Users = () => {
  const dispatch = useDispatch();

  const { data } = useSelector((state) => state.users);

  const columns = useMemo(
    () => [
      {
        header: 'Full Name',
        accessorKey: 'full_name',
        cell: (props) => <Text>{props.getValue()}</Text>,
      },
      {
        header: 'user Name',
        accessorKey: 'user_name',
        cell: (props) => <Text>{props.getValue()}</Text>,
      },
      {
        header: 'Email',
        accessorKey: 'email',
        cell: (props) => <Text>{props.getValue()}</Text>,
      },
      {
        header: 'User Type',
        accessorKey: 'user_type_id',
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
    dispatch(getUsers());
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
        <BreadCrumbNav link="/admin-add-user" />
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
          <DataTable2 data={subrowData} columns={columns} />
        </Box>
      </Box>
    </VStack>
  );
};

export default Users;
