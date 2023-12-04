/* eslint-disable no-unused-vars */
import {
  Button, HStack, Text, VStack,
} from '@chakra-ui/react';
import { FaPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import BreadCrumbNav from '../components/BreadCrumbNav';

const Services = () => {
  const navigate = useNavigate();
  return (
    <VStack
      mt={10}
      w="full"
      p={3}
    >
      <BreadCrumbNav link="/add-service" />

      <Text>
        Services
      </Text>
    </VStack>
  );
};

export default Services;
