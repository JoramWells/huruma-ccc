/* eslint-disable react/prop-types */
import { Avatar, HStack, Text } from '@chakra-ui/react';

const UserNameAvatar = ({ fullName }) => (
  <HStack>
    <Avatar
      size="sm"
      name={fullName}
      color="white"
    />
    <Text>{fullName}</Text>
  </HStack>
);

export default UserNameAvatar;
