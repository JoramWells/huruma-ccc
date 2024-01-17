/* eslint-disable no-unused-vars */

import {
  Button,
  FormControl,
  FormLabel,
  HStack, Input, Text, VStack,
} from '@chakra-ui/react';
import Select from 'react-select';
import { useCallback, useEffect, useState } from 'react';
import BreadCrumbNav from '../../components/BreadCrumbNav';
import { useGetProceduresQuery } from '../../_Doctor/api/procedureDetails.api';

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

const AddPatientProcedure = () => {
  const [cost, setCost] = useState(0);
  const [procedure, setProcedure] = useState('');
  const { data: procedureData } = useGetProceduresQuery();

  const procedureCallback = useCallback(() => procedureData?.map((item) => (
    { value: item.procedure_id, label: item.procedure_name, cost: item.procedure_cost }
  )), [procedureData]);

  const procedureOptions = procedureCallback();

  useEffect(() => {
    setCost(procedure?.cost);
  }, [procedure?.cost]);

  return (
    <VStack
      w="full"
      h="100vh"
      mt="65px"
      p={3}
    >
      <BreadCrumbNav addBtn={false} />

      <VStack
        w="2xl"
        rounded="xl"
        p={4}
        alignItems="flex-start"
        bgColor="white"
        spacing={6}
        // boxShadow="lg"
        border="2px"
        borderStyle="dashed"
        borderColor="gray.200"
      >
        <Text
          fontSize="xl"
          fontWeight="bold"
          color="gray.700"
        >
          New Procedure

        </Text>
        <FormControl>
          <FormLabel
            fontWeight="bold"
            color="gray.500"
          >
            Select Procedure

          </FormLabel>
          <Select
            styles={selectStyles}
            options={procedureOptions}
            onChange={(val) => setProcedure(val)}
          />

        </FormControl>
        <FormControl>
          <FormLabel
            fontWeight="bold"
            color="gray.500"
          >
            Cost

          </FormLabel>
          <Input
            size="lg"
            bgColor="gray.50"
            border={0}
            value={cost}
            onChange={(e) => setCost(e.target.value)}
          />
        </FormControl>
        <HStack
          w="full"
          justifyContent="flex-end"
        >
          <Button
            colorScheme="blue"
          >
            Save

          </Button>

        </HStack>
      </VStack>

    </VStack>
  );
};

export default AddPatientProcedure;
