import { HStack, Text } from '@chakra-ui/react';
import PropTypes from 'prop-types';

const SidebarItemSubButton = ({
  icon, text, selected, onClick,
}) => (
  (
    <HStack
      justifyContent="flex-start"
      rounded="md"
      color={selected ? 'blue.500' : 'gray.500'}
      bgColor={selected && 'blue.100'}
      p={2}
      mt={3}
      ml={5}
      _hover={{
        cursor: 'pointer',
        bgColor: 'blue.200',
        color: selected ? 'blue.700' : 'gray.600',
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

SidebarItemSubButton.propTypes = {
  icon: PropTypes.node,
  selected: PropTypes.bool,
  text: PropTypes.string,
  onClick: PropTypes.func,
};

SidebarItemSubButton.defaultProps = {
  icon: <div />,
  selected: false,
  text: '',
  onClick: () => {},
};

export default SidebarItemSubButton;
