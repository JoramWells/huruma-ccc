import { HStack } from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const SidebarItemSubButton = ({
  icon, text, selected, onClick, subButtonLink,
}) => (
  (
    <HStack
      justifyContent="flex-start"
      rounded="md"
      color={selected ? 'blue.500' : 'gray.500'}
      fontWeight={selected && 'bold'}
      bgColor={selected && 'gray.50'}
      p={2}
      mt={2}
      ml={5}
      _hover={{
        cursor: 'pointer',
        bgColor: 'gray.50',
        color: selected ? 'blue.700' : 'gray.600',
        boxShadow: 'xs',
      }}
      onClick={onClick}
    >
      {icon}
      <Link
        to={subButtonLink}

      >
        {text}

      </Link>
    </HStack>
  )
);

SidebarItemSubButton.propTypes = {
  icon: PropTypes.node,
  selected: PropTypes.bool,
  text: PropTypes.string,
  subButtonLink: PropTypes.string,
  onClick: PropTypes.func,
};

SidebarItemSubButton.defaultProps = {
  icon: <div />,
  selected: false,
  text: '',
  subButtonLink: '',
  onClick: () => {},
};

export default SidebarItemSubButton;
