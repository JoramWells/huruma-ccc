/* eslint-disable linebreak-style */
import {
  Box, Divider, Text,
} from '@chakra-ui/react';

import SidebarListItems from './SidebarListItems';

function Sidebar() {
  return (
    <Box
      w={{ base: '100%', sm: '240px' }}
      h="100vh"
      overflowX="auto"
      bgColor="blue.900"
      display={{ base: 'none', sm: 'block' }}
      p={2}
      // pt={14}
      borderRight="1px"
      borderColor="gray.100"
      position="fixed"
      top={0}
    >
      <Box p={1.5} display={{ sm: 'none', md: 'block' }}>
        <Text
          fontSize="2xl"
          fontWeight="extrabold"
          textAlign="center"
          color="white"
        >
          Huruma
        </Text>
      </Box>
      <Divider />
      <SidebarListItems />

    </Box>
  );
}

export default Sidebar;
