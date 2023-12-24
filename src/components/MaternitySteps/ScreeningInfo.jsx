/* eslint-disable no-unused-vars */
import {
  Badge,
  Box,
  FormControl,
  FormLabel,
  HStack,
  Input,
  VStack,
} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import Select from 'react-select';

const ScreeningInfo = () => {
  const navigate = useNavigate();

  const options = [];

  return (
    <VStack spacing={8}>
      <FormControl>

        <FormLabel mt={1}>Name  of Client</FormLabel>
        <Input size="lg" placeholder="Enter Name of the Client" />

      </FormControl>

      {/* category */}
      <FormControl>
        <FormLabel>DOB</FormLabel>
        <Input size="lg" type="date" />
      </FormControl>

      <FormControl>
        <FormLabel>Phone Number</FormLabel>
        <Input
          size="lg"
          placeholder="Enter phone number"
        />
      </FormControl>

      <FormControl>
        <FormLabel>Occupation</FormLabel>
        <Input
          size="lg"
          placeholder="Enter Occupation"
        />
      </FormControl>

      <FormControl>
        <FormLabel>Address</FormLabel>
        <Input
          size="lg"
          placeholder="Enter Address"
        />
      </FormControl>

    </VStack>
  );
};

export default ScreeningInfo;
