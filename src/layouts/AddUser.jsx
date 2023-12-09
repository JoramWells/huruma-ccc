import {
  Button,
  FormControl,
  FormLabel,
  HStack,
  Input,
  VStack,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import Select from 'react-select';
import { addItemType } from '../_reducers/itemTypeSlice';

const AddUser = () => {
  const [itemTypeName, setItemType] = useState('');
  const dispatch = useDispatch();

  const { loading } = useSelector((state) => state.itemType);
  const departmentData = useSelector((state) => state.departments.data);

  const inputValues = {
    itemTypeName,
  };

  const departmentOptions = departmentData && departmentData.map((item) => (
    { value: item.id, label: item.departmentName }
  ));

  console.log(departmentOptions);

  const options = [{ value: '85A', label: '85A' }];

  return (
    <VStack
      w="full"
      h="100vh"
      alignItems="center"
      justifyContent="center"
      bgColor="gray.50"
    >
      <VStack
        w="50%"
        mt={5}
        bgColor="white"
        boxShadow="lg"
        p={5}
        rounded="lg"
        spacing={4}
      >

        {/* department */}
        <FormControl>
          <FormLabel>Full Name</FormLabel>
          <Input placeholder="Enter Full Name" />
        </FormControl>

        {/* department */}
        <FormControl>
          <FormLabel>Mobile Number</FormLabel>
          <Input placeholder="Enter Mobile Number" />
        </FormControl>

        {/* email */}
        {/* sub item */}
        <FormControl>
          <FormLabel>Email Address</FormLabel>
          <Input
            placeholder="Enter Email Address"
            value={itemTypeName}
            onChange={(e) => setItemType(e.target.value)}
          />
        </FormControl>

        {/* department */}
        <FormControl>
          <FormLabel>Select Department</FormLabel>
          <Select options={departmentOptions} />
        </FormControl>

        {/* hospital */}
        <FormControl>
          <FormLabel>Select User Type</FormLabel>
          <Select options={options} />
        </FormControl>

        <FormControl>
          <HStack
            w="full"
            justifyContent="space-between"
            mb={1}
          >
            <FormLabel>
              Password
            </FormLabel>
            <Button size="sm">Generate</Button>
          </HStack>
          <Input placeholder="Enter password" />
        </FormControl>

        <HStack w="full" justifyContent="end">
          <Button
            size="md"
            colorScheme="blue"
            onClick={() => dispatch(addItemType(inputValues))}
            w="full"
          >
            {loading ? 'loading...' : 'Save'}
          </Button>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default AddUser;
