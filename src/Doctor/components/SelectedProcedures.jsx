/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {
  Box, Button, HStack, Text, VStack,
} from '@chakra-ui/react';
import moment from 'moment/moment';
import PropTypes from 'prop-types';
import { useCallback, useState } from 'react';
import { useAddPersonalAccountChargeMutation } from '../api/personalAccountCharges.api';

const SelectedProcedures = ({ tableInstance }) => {
  const [data, setData] = useState([]);
  const [addPersonalAccountCharge] = useAddPersonalAccountChargeMutation();

  const inputValues = {
    services: JSON.stringify(data),
    date_of_charge: moment(new Date()).format('MM-DD-YYYY'),
    time_of_charge: moment(new Date()).format('hh:mm:ss'),

  };

  const handleData = useCallback(() => {
    tableInstance.getSelectedRowModel()
      .flatRows.forEach((el) => setData((prev) => [
        ...prev,
        {
          procedure_name: el.original.procedure_name,
          procedure_cost: el.original.procedure_cost,
        }]));

    // send to backend
    return addPersonalAccountCharge(inputValues);
  }, [tableInstance, addPersonalAccountCharge]);

  console.log(data);

  return (
    <VStack
      w="1/2"
      flex={1}
          // alignItems="flex-start"
      h="500px"
          // overflowY="auto"
      bgColor="gray.50"
      p={5}
      rounded="xl"
    >

      {tableInstance.getSelectedRowModel()
        .flatRows.map((el) => (
          <Box
                      // border="1px"
            p={5}
                      // borderColor="gray.200"
            rounded="xl"
            h="150px"
            w="75%"
            bgColor="white"
                      // boxShadow="md"
            position="relative"
          >
            <Text
              color="blue.500"
            >
              {(el.original.procedure_name)}

            </Text>
            <Text fontSize="xl">
              KSH
              {' '}
              {(parseInt(el.original.procedure_cost, 10).toLocaleString())}
            </Text>
            <Text color="gray.500" fontSize="md">Qty: 1</Text>
            <HStack
              w="full"
              justifyContent="flex-end"
              p={2}
              position="absolute"
              bottom={0}
              right={0}
            >
              <Text fontSize="sm" color="gray.500">{moment(new Date()).format('LL')}</Text>
            </HStack>
          </Box>
        ))}

      <Button onClick={() => handleData()}>
        save
      </Button>
    </VStack>
  );
};

export default SelectedProcedures;
