/* eslint-disable no-unused-vars */

import {
  Button, HStack, Text, VStack,
} from '@chakra-ui/react';
import { nanoid } from '@reduxjs/toolkit';
import { useNavigate, useParams } from 'react-router-dom';

const carouselData = [
  {
    id: nanoid(),
    text: 'Record Vitals',
  },
];

const Medical = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  return (
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
      <HStack
        w="full"
        flexWrap="wrap"
        spacing={4}
      >
        {/* <RecordVitals /> */}
        <Button onClick={() => navigate({
          pathname: '/add-vitals',
          search: `?patient_id=${id}`,
        })}
        >
          Vitals

        </Button>
        <Button>Procedure Services</Button>
        <Button>Lab Requests</Button>
        <Button>Radiology Requests</Button>
        <Button>Pharmacy Requests</Button>
        <Button>Department Drugs Requests</Button>

      </HStack>
    </VStack>
  );
};

export default Medical;
