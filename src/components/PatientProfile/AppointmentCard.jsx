/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import {
  HStack, IconButton, Text, VStack,
} from '@chakra-ui/react';
import { FaBoxOpen, FaExternalLinkAlt } from 'react-icons/fa';

const AppointmentCard = ({ data }) => (
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
    <HStack w="full" justifyContent="flex-end">
      <Text fontSize="xl" fontWeight="semibold">Recent Appointments</Text>
    </HStack>

    {data ? (
      <VStack
        backgroundColor="gray.100"
        w="full"
        pl={5}
        rounded="lg"
        border="1px"
        borderColor="gray.200"
        alignItems="flex-start"
      >
        <HStack w="full" justifyContent="flex-end">
          <IconButton color="gray.500">
            <FaExternalLinkAlt />
          </IconButton>
        </HStack>
        <Text noOfLines={2} pr={3}>
          Admitted to HURUMA HOSPITAL for 3 days and saw doctor Munech and was diagnosed
          with Malaria.
        </Text>
        <HStack
          w="full"
          justifyContent="flex-end"
          p={2}
        >
          <Text color="gray.500">1/02/2021</Text>
        </HStack>
      </VStack>
    )

      : (
        <VStack
          w="full"
          h="full"
          justifyContent="center"
        >
          <FaBoxOpen
            size={70}
            style={{
              color: 'gray',
            }}
          />
          <Text color="gray.500">No Appointments</Text>
        </VStack>
      )}

  </VStack>
);

export default AppointmentCard;
