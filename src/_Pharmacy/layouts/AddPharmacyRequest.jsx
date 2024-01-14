/* eslint-disable no-unused-vars */

import {
  Button,
  Divider,
  FormControl, FormLabel, HStack, Input, Text, Textarea,
  VStack, useToast,
} from '@chakra-ui/react';
import Select from 'react-select';
import { useCallback, useEffect, useState } from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';
import BreadCrumbNav from '../../components/BreadCrumbNav';
import { useGetAllMedicationQuery } from '../../_Medication/api/medication.api';
import { useGetAllMedicationCategoryQuery } from '../../_Medication/api/medicationCategory.api';

const selectStyles = {
  control: (provided, state) => ({
    ...provided,
    minHeight: '45px',
    height: '45px',
    backgroundColor: '#F7FAFC',
    border: 0,
  }),
  input: (provided) => ({
    ...provided,
  }),
};

const AddPharmacyRequest = () => {
  const { data } = useGetAllMedicationQuery();
  const [medication, setMedication] = useState('');
  const [category, setCategory] = useState(medication?.category);
  const [cost, setCost] = useState(medication?.cost);
  const [quantity, setQuantity] = useState(medication?.quantity);

  const { data: medicationCategoryData } = useGetAllMedicationCategoryQuery();

  const medicationCallback = useCallback(() => data?.map((item) => ({
    value: item.medication_id,
    label: item.medication_name,
    category: item.medication_category?.category_name,
    cost: item.price,
  })), [data]);

  const toast = useToast();
  const displayToast = useCallback(() => (
    toast({
      title: 'Medicine out of stock.',
      status: 'warning',
      isClosable: 'true',
      position: 'top-right',
      variant: ['subtle', 'left-accent'],
      description: 'Request sent to admin. Kindly request another medicine.',
    })
  ), [toast]);

  const medicationOptions = medicationCallback();
  useEffect(() => {
    setCategory(medication?.category);
    setCost(medication?.cost);
    if (!quantity) {
      displayToast();
    }
  }, [displayToast, medication, quantity]);

  console.log(category);
  return (
    <VStack
      h="100vh"
      w="full"
      bgColor="gray.50"
      mt="65px"
      p={3}
    >
      <BreadCrumbNav />
      <Text>
        AddPharmacyRequest
      </Text>
      <HStack
        w="full"
        spacing={4}
        alignItems="flex-start"
        bgColor="white"
      >
        <VStack
          w="lg"
          bgColor="white"
          spacing={6}
          p={4}
          rounded="xl"
          boxShadow="lg"
        >
          <HStack
            w="full"
            justifyContent="flex-end"
          >
            <Text
              fontSize="xl"
              color="gray.700"
              // fontWeight="bold"
            >
              Medication Details

            </Text>
          </HStack>
          {/*  */}
          <FormControl>
            <FormLabel
              color="gray.500"
              fontWeight="bold"
            >
              Select Medication Category

            </FormLabel>
            <Input
              size="lg"
              value={category}
              type="text"
              onChange={(e) => setCategory(e.target.value)}
              border={0}
              bgColor="gray.50"
              fontSize="md"
              fontWeight="bold"
              color="gray.600"
            />
          </FormControl>

          {/*  */}
          <FormControl>
            <FormLabel
              fontWeight="bold"
              color="gray.500"
            >
              Select Medication

            </FormLabel>
            <Select
              styles={selectStyles}
              options={medicationOptions}
              onChange={(val) => setMedication(val)}
            />
          </FormControl>

          {/*  */}
          <FormControl>
            <FormLabel color="gray.500">Price (KSH)</FormLabel>
            <Input
              size="lg"
              type="number"
              value={cost}
              onChange={(e) => setCost(e.target.value)}
            />
          </FormControl>

          {/*  */}
          <FormControl>
            <HStack
              alignContent="center"
              color={quantity ? 'gray.500' : 'red.500'}
            >
              <FaExclamationTriangle />
              <FormLabel mt={2}>
                {quantity ? 'Available Quantity' : 'Not In Stock'}
              </FormLabel>

            </HStack>
            {' '}
            <Input
              size="lg"
              type="text"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
            />
          </FormControl>

          <HStack
            w="full"
            justifyContent="flex-end"
          >
            <Button
              colorScheme="blue"
              variant="outline"
            >
              Save Changes

            </Button>
          </HStack>

        </VStack>

        {/*  */}
        <VStack
          w="lg"
          bgColor="white"
          spacing={6}
          border="1px"
          borderColor="gray.200"
          p={4}
          rounded="xl"
        //   boxShadow="lg"
        >
          <HStack
            w="full"
            justifyContent="flex-end"
          >
            <Text
              fontSize="xl"
              color="gray.700"
              fontWeight="bold"
            >
              Prescription Details

            </Text>
          </HStack>
          <FormControl>
            <FormLabel>Select Measuring Unit</FormLabel>
            <Select styles={selectStyles} />
          </FormControl>

          {/*  */}
          <FormControl>
            <FormLabel>Select Prescription</FormLabel>
            <Select styles={selectStyles} />
          </FormControl>

          {/*  */}
          <FormControl>
            <FormLabel>Number of Days</FormLabel>
            <Input size="lg" />
          </FormControl>

          {/*  */}
          <FormControl>
            <FormLabel>Instruction</FormLabel>
            <Textarea />
          </FormControl>

          {/*  */}
          <FormControl>
            <FormLabel>Quantity</FormLabel>
            <Input size="lg" />
          </FormControl>
          <HStack w="full" justifyContent="flex-end">
            <Button
              bgColor="blue.500"
              color="white"
            >
              Save

            </Button>
          </HStack>
        </VStack>
        <VStack w="lg">
          <HStack
            bgColor="white"
            w="full"
            p={4}
            border="1px"
            borderColor="gray.200"
            rounded="xl"
          >
            <Text>Recent</Text>
          </HStack>
        </VStack>
      </HStack>

    </VStack>
  );
};

export default AddPharmacyRequest;
