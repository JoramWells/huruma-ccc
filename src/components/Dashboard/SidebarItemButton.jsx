import { HStack, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { FaUser } from 'react-icons/fa';

const SidebarItemButton = ({
  icon, text, selected, onClick,
}) => (
  (
    <HStack
      justifyContent="flex-start"
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
      onClick={onClick}
    >
      {icon}
      <Text
        display={{ sm: 'none', md: 'block' }}
        textTransform="capitalize"
        fontSize={{ md: 'sm', lg: 'md' }}
      >
        {text}

      </Text>
    </HStack>
  )
);

SidebarItemButton.propTypes = {
  icon: PropTypes.node,
  selected: PropTypes.bool,
  text: PropTypes.string,
  onClick: PropTypes.func,
};

SidebarItemButton.defaultProps = {
  icon: <FaUser />,
  selected: false,
  text: '',
  onClick: () => {},
};

export default SidebarItemButton;
