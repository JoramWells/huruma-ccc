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

  const inputValues = {
    itemTypeName,
  };

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
          <FormLabel>Username</FormLabel>
          <Input placeholder="Enter Full Name" />
        </FormControl>

        {/* department */}
        <FormControl>
          <FormLabel>Mobile Number</FormLabel>
          <Input placeholder="Enter Mobile Number" />
        </FormControl>

        {/* department */}
        <FormControl>
          <FormLabel>Select Department</FormLabel>
          <Select options={options} />
        </FormControl>

        {/* hospital */}
        <FormControl>
          <FormLabel>Select Hospital</FormLabel>
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

        {/* sub item */}
        <FormControl>
          <FormLabel>Service Name</FormLabel>
          <Input
            placeholder="Enter Service Name"
            value={itemTypeName}
            onChange={(e) => setItemType(e.target.value)}
          />
        </FormControl>
        <HStack w="full" justifyContent="end">
          <Button
            size="md"
            colorScheme="blue"
            onClick={() => dispatch(addItemType(inputValues))}
          >
            {loading ? 'loading...' : 'Save'}
          </Button>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default AddUser;
