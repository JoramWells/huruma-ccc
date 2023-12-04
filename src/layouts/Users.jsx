/* eslint-disable no-unused-vars */
import React from 'react';
import { VStack } from '@chakra-ui/react';
import BreadCrumbNav from '../components/BreadCrumbNav';

const Users = () => {
  const data = [];
  return (
    <VStack
      w="full"
      h="100vh"
      mt={10}
    >
      <BreadCrumbNav link="/admin-add-user" />
    </VStack>
  );
};

export default Users;
