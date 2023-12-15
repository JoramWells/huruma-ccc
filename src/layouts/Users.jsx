import {
  Box, Button, HStack, Text, VStack,
} from '@chakra-ui/react';
// import axios from "axios"
import { FaFileDownload, FaPrint } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import BreadCrumbNav from '../components/BreadCrumbNav';
import UserTable from '../components/tables/UserTable';
import { getUsers } from '../_reducers/userSlice';

const columns = [
  {
    Header: 'Full Name',
    accessor: 'full_name',
  },
  {
    Header: 'user Name',
    accessor: 'user_name',
  },
  {
    Header: 'Mobile Number',
    accessor: 'mobilenumber',
  },

  {
    Header: 'Email',
    accessor: 'email',
  },
  {
    Header: 'User Type',
    accessor: 'usertype',
  },
];

const Users = () => {
  const dispatch = useDispatch();

  const { data } = useSelector((state) => state.users);

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
          <UserTable data={subrowData} columns={columns} />
        </Box>
      </Box>
    </VStack>
  );
};

export default Users;
