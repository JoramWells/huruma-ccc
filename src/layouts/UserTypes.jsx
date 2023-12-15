import {
  Box, HStack, VStack,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import DepartmentTable from '../components/tables/DepartmentTable';
import BreadCrumbNav from '../components/BreadCrumbNav';
import HeaderAction from '../components/HeaderAction';
import { getUserTypes } from '../_reducers/userTypeSlice';

const columns = [
  {
    Header: 'User Type',
    accessor: 'user_type_desc',
  },
];

const UserTypes = () => {
  const dispatch = useDispatch();

  const { data } = useSelector((state) => state.userType);
  const subrowData = data
        && data.map((item) => ({
          ...item,
          subRows: [],
        }));

  useEffect(() => {
    dispatch(getUserTypes());
  }, []);
  return (
    <VStack mt={10} w="full">

      <BreadCrumbNav link="/admin-add-user-type" />
      <HeaderAction text="User Type" subrowData={subrowData} />
      <HStack
        mt={5}
        w="100%"
        justifyContent="flex-end"
        p={3}
      />
      <Box w="50%" border="1px" borderColor="gray.100" rounded="lg">
        <DepartmentTable data={subrowData} columns={columns} />
      </Box>
    </VStack>
  );
};

export default UserTypes;
