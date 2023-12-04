import {
  Button, HStack, Text, VStack,
} from '@chakra-ui/react';
import { FaPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Services = () => {
  const navigate = useNavigate();
  return (
    <VStack
      mt={10}
      w="full"
      p={3}
    >
      <HStack w="full" justifyContent="flex-end">
        <Button
          leftIcon={<FaPlus />}
          colorScheme="blue"
          onClick={() => navigate('/add-service')}
        >
          Add Service

        </Button>
      </HStack>
      <Text>
        Services
      </Text>
    </VStack>
  );
};

export default Services;
