/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable react/prop-types */
import {
  HStack,
  Text, VStack,
} from '@chakra-ui/react';
import { useParams } from 'react-router-dom';

import { useMemo } from 'react';
import { useGetUserQuery } from '../api/users.api';
import { useGetUserPrivilegesQuery } from '../api/userPrivileges.api';
import UserNameAvatar from '../components/UserNameAvatar';
import TableSelectRow from '../components/tables/TableSelectRow';
import UserPrivilegeTable from '../components/tables/UserPrivilegeTable.jsx';

const UserDetail = () => {
  const { id } = useParams();

  const { data } = useGetUserQuery(id);
  const { data: privilegeData } = useGetUserPrivilegesQuery(id);

  const columns = useMemo(
    () => [
      {
        header: 'Mobile No.',
        accessorKey: 'cell_phone',
        cell: (props) => <Text>{props.getValue()}</Text>,

      },
      {
        header: 'Gender',
        accessorKey: 'patient_gender',
        enableSorting: false,
        cell: (props) => <Text>{props.getValue() === '1' ? 'MALE' : 'FEMALE'}</Text>,

      },
    ],

    [],
  );

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
        <UserPrivilegeTable />
      </HStack>
    </VStack>
  );
};

export default UserDetail;
