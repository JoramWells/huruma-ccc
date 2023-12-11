import {
  Button,
  CloseButton,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Tag,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Select from 'react-select';
import { addSuppliers } from '../_reducers/supplierSlice';
import { getAllSupplierClassification } from '../_reducers/supplierClassificationSlice';

const AddProcedures = () => {
  const [supplierName, setSupplierName] = useState('');
  const [classification, setClassification] = useState({ value: '', label: '' });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { loading } = useSelector((state) => state.suppliers);
  const classificationSupplierData = useSelector((state) => state.supplierClassification.data);

  const classificationSupplierOptions = classificationSupplierData
  && classificationSupplierData.map((item) => (
    { value: item.classificationName, label: item.classificationName }
  ));

  const inputValues = {
    supplierName,
    classification: classification.value,
  };

  useEffect(() => {
    dispatch(getAllSupplierClassification());
  }, []);

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
          <Text fontSize="2xl" fontWeight="semibold">Add Procedure</Text>
          <CloseButton />
        </HStack>

        {/* supplier name */}
        <FormControl>
          <FormLabel>Procedure Name</FormLabel>
          <Input
            placeholder="Enter Procedure Name"
            value={supplierName}
            onChange={(e) => setSupplierName(e.target.value)}
          />
        </FormControl>

        {/* select Department */}
        <FormControl>
          <HStack w="full" alignItems="center" justifyContent="space-between">
            <FormLabel fontSize="medium">Select Procedure Group</FormLabel>
            <Tag
              onClick={() => navigate('/add-procedure-group')}
              _hover={{
                cursor: 'pointer',
              }}
            >
              NEW

            </Tag>

          </HStack>
          <Select
            options={classificationSupplierOptions}
            value={classification}
            onChange={(e) => setClassification(e)}
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

export default AddProcedures;
