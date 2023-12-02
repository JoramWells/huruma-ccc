/* eslint-disable no-unused-vars */
import {
  Box,
  Button,
  // eslint-disable-next-line no-unused-vars
  HStack, IconButton, Menu, MenuButton, MenuItem, MenuList, Spacer,
} from '@chakra-ui/react';
import { FaBell, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MainNav = () => (
  <HStack
    p={1}
    bg="white"
    borderBottom="1px"
    borderColor="gray.100"
    position="fixed"
    zIndex={10}
    w="81%"
    top={0}
    justifyContent="end"
  >
    <IconButton>
      <FaBell />

    </IconButton>

    <Menu>
      <MenuButton>
        <Box
          p={2}
          backgroundColor="gray"
          rounded="full"
          _focus={{
            backgroundColor: 'teal',
          }}
        >
          <FaUser />
        </Box>
      </MenuButton>
      <MenuList>
        <MenuItem>
          <Link to="/login">Login</Link>
        </MenuItem>
        <MenuItem>Logout</MenuItem>
      </MenuList>
    </Menu>

  </HStack>
);

export default MainNav;