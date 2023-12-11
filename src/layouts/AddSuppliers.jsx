/* eslint-disable no-unused-vars */
import {
  Box,
  Button,
  Checkbox,
  CloseButton,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import Select from 'react-select';
import { addItemType } from '../_reducers/itemTypeSlice';
import { addSuppliers } from '../_reducers/supplierSlice';

const AddSuppliers = () => {
  const [supplierName, setSupplierName] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [classification, setClassification] = useState({ value: '85A', label: '85A' });
  const [status, setStatus] = useState({ value: '85A', label: '85A' });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loading } = useSelector((state) => state.suppliers);

  const inputValues = {
    supplierName,
    mobileNo,
    classification: classification.value,
    status: status.value,
  };

  const options = [{ value: '85A', label: '85A' }];
  const statusOptions = [{ value: 'Active', label: 'Active' },
    { value: 'In Active', label: 'In Active' },
  ];

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
        p={3}
        rounded="lg"
        spacing={10}
      >

        <HStack w="full" justifyContent="space-between">
          <Text fontSize="2xl" fontWeight="semibold">Add Supplier</Text>
          <CloseButton />
        </HStack>

        {/* supplier name */}
        <FormControl>
          <FormLabel>Supplier Name</FormLabel>
          <Input
            placeholder="Enter Supplier Name"
            value={supplierName}
            onChange={(e) => setSupplierName(e.target.value)}
          />
        </FormControl>

        <FormControl>
          <FormLabel>Mobile No.</FormLabel>
          <Input
            placeholder="Enter Mobile No."
            value={mobileNo}
            onChange={(e) => setMobileNo(e.target.value)}
          />
        </FormControl>

        {/* select Department */}
        <FormControl>
          <FormLabel fontSize="medium">Select Classification</FormLabel>
          <Select
            options={options}
            value={classification}
            onChange={(e) => setClassification(e)}
          />

        </FormControl>

        {/* select Store */}
        <FormControl>
          <FormLabel fontSize="medium">Select Status</FormLabel>
          <Select
            value={status}
            options={statusOptions}
            onChange={(e) => setStatus(e)}
          />

        </FormControl>

        <HStack w="full" justifyContent="end">
          <Button
            size="lg"
            colorScheme="blue"
            onClick={() => dispatch(addSuppliers(inputValues))}
          >
            {loading ? 'loading...' : 'Save'}
          </Button>
        </HStack>
      </VStack>
    </VStack>
  );
};

export default AddSuppliers;
