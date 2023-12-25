/* eslint-disable no-unused-vars */

import {
  Button, HStack, Text, VStack,
} from '@chakra-ui/react';
import { nanoid } from '@reduxjs/toolkit';
import RecordVitals from './MedicalModals';

const carouselData = [
  {
    id: nanoid(),
    text: 'Record Vitals',
  },
];

const Medical = () => (
  <VStack
    bgColor="white"
    // w="full"
    flex={1}
    height="50%"
    border="1px"
    borderColor="gray.200"
    rounded="lg"
    p={5}
  >
    <HStack w="full">
      <RecordVitals />
      <Button>Procedure Services</Button>
    </HStack>
  </VStack>
);

export default Medical;
