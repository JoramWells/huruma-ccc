/* eslint-disable linebreak-style */
import {
  Box, Divider,
} from '@chakra-ui/react';

import SidebarListItems from './SidebarListItems';

function Sidebar() {
  return (
    <Box
      w={{ base: '100%', sm: '270px' }}
      h="100%"
      overflowX="auto"
      bgColor="blue.900"
      display={{ base: 'none', sm: 'block' }}
      // pt={14}
      borderRight="1px"
      borderColor="gray.100"
      position="fixed"
      top="55px"
      // p={1}
    >

      <Divider />
      <SidebarListItems />

    </Box>
  );
}

export default Sidebar;
