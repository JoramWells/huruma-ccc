/* eslint-disable no-unused-vars */
/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable react/prop-types */
import {
  HStack,
  Text, VStack,
} from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

import { useGetUserQuery } from '../api/users.api';
import { useGetUserPrivilegesQuery } from '../api/userPrivileges.api';

const UserDetail = () => {
  const { id } = useParams();

  const { data } = useGetUserQuery(id);
  const { data: privilegeData } = useGetUserPrivilegesQuery(id);
  console.log(privilegeData, 'dtx');

  return (
    <VStack
      h="100vh"
      w="full"
      mt="55px"
      bgColor="gray.50"
      alignItems="center"
      // justifyContent="center"
      p={3}
    >
      <HStack
        w="full"
        justifyContent="center"
        bgColor="white"
        spacing={8}
      >
        <VStack
          borderRight="1px"
          borderColor="gray.200"
          p={3}
        >
          <ol style={{
            listStyle: 'none',
          }}
          >
            <li>User Privileges</li>
            <li>Purchase Order Clearance</li>
            <li>Requisitions Clearance Privileges</li>
            <li>Change Assigned Branch</li>
          </ol>
        </VStack>
        <Text>hello</Text>
      </HStack>
    </VStack>
  );
};

export default UserDetail;
