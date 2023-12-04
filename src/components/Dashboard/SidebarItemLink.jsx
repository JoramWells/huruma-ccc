/* eslint-disable react/no-array-index-key */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-unused-vars */
import {
  Box, Collapse, HStack, useDisclosure,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { FaChevronDown, FaChevronRight, FaUser } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { Fragment } from 'react';
import SidebarItemSubButton from './SidebarItemSubButton';

const SidebarItemLink = ({
  icon, text, selected, itemList, link,
}) => {
  const location = useLocation();
  const { pathname } = location;
  const { isOpen, onToggle } = useDisclosure();

  return (
    (
      <>
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
            <Link to={link}>
              {text}
            </Link>
          </HStack>
          <Box
            onClick={onToggle}

          >
            {isOpen ? <FaChevronDown /> : <FaChevronRight />}

          </Box>

        </HStack>

        <Collapse in={isOpen}>
          {itemList.map((item, idx) => (
            <Fragment key={idx}>
              <SidebarItemSubButton
                text={item.title}
                subButtonLink={item.link}
                selected={pathname.includes(`${item.link}`)}
              />
            </Fragment>
          ))}

        </Collapse>

      </>
    )
  );
};

SidebarItemLink.propTypes = {
  icon: PropTypes.node,
  selected: PropTypes.bool,
  text: PropTypes.string,
  link: PropTypes.string,
  itemList: PropTypes.array,
};

SidebarItemLink.defaultProps = {
  icon: <FaUser />,
  selected: false,
  text: '',
  link: '/items',
  itemList: [],
};

export default SidebarItemLink;
