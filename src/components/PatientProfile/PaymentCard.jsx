import {
  Button, HStack, Text, VStack,
} from '@chakra-ui/react';

const PaymentCard = () => (
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
      justifyContent="space-between"
    >
      <Text fontSize="xl" fontWeight="semibold">Payments</Text>
      <Button
        rounded="full"
        variant="outline"
        colorScheme="purple"
      >
        Create New Admission
      </Button>
    </HStack>
    <Text>Admissions</Text>
  </VStack>
);

export default PaymentCard;
