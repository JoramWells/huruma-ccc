import { Box, HStack } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { FaChevronDown, FaChevronRight, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const SidebarItemLink = ({
  icon, text, selected, onClick, isOpen,
}) => (
  (
    <HStack
      justifyContent="space-between"
      rounded="md"
      fontWeight="semibold"
      color={selected ? 'white' : 'gray.500'}
      bgColor={selected && 'pink.700'}
      bgGradient={selected && 'linear(to-r, blue.600, blue.500)'}
      boxShadow={selected && 'lg'}
      p={2}
      mt={3}
      _hover={{
        cursor: 'pointer',
        bgColor: 'gray.50',
        color: selected ? 'white' : 'gray.600',
        boxShadow: 'xs',
      }}
    >
      <HStack>
        {icon}
        <Link to="/items">
          {text}
        </Link>
      </HStack>
      <Box
        onClick={onClick}

      >
        {isOpen ? <FaChevronDown /> : <FaChevronRight />}

      </Box>

    </HStack>
  )
);

SidebarItemLink.propTypes = {
  icon: PropTypes.node,
  selected: PropTypes.bool,
  text: PropTypes.string,
  onClick: PropTypes.func,
  isOpen: PropTypes.bool,
};

SidebarItemLink.defaultProps = {
  icon: <FaUser />,
  selected: false,
  text: '',
  onClick: () => {},
  isOpen: false,
};

export default SidebarItemLink;
