import {
  Box, Button, HStack, VStack,
} from '@chakra-ui/react';
import { FaPlus } from 'react-icons/fa';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import DepartmentTable from '../components/tables/DepartmentTable';
import { getAllDepartments } from '../_reducers/departmentSlice';

const columns = [
  {
    Header: 'Department Name',
    accessor: 'departmentName',
  },
];

const Departments = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { data } = useSelector((state) => state.departments);
  const subrowData = data
        && data.map((item) => ({
          ...item,
          subRows: [],
        }));

  useEffect(() => {
    dispatch(getAllDepartments());
  }, []);
  return (
    <VStack mt={10} w="full">
      <HStack mt={5} w="100%" justifyContent="flex-end">
        <Button
          leftIcon={<FaPlus />}
          onClick={() => navigate('/add-department')}
        >
          New
        </Button>
      </HStack>
      <Box w="50%" border="1px" borderColor="gray.100" rounded="lg">
        <DepartmentTable data={subrowData} columns={columns} />
      </Box>
    </VStack>
  );
};

export default Departments;
