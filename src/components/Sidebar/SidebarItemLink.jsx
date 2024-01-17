/* eslint-disable react/no-array-index-key */
/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-unused-vars */
import {
  Box, Collapse, HStack, useDisclosure,
} from '@chakra-ui/react';
import PropTypes from 'prop-types';
import { FaChevronDown, FaChevronRight, FaUser } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom';
import { Fragment, useState } from 'react';
import SidebarItemSubButton from './SidebarItemSubButton';

const SidebarItemLink = ({
  icon, text, selected, itemList, link,
}) => {
  const location = useLocation();
  const { pathname } = location;
  const { isOpen, onToggle } = useDisclosure();
  const [chevronColor, setChevronColor] = useState(false);

  return (
    (
      <>
        <HStack
          justifyContent="space-between"
          fontWeight="bold"
          color={selected ? 'white' : 'gray.400'}
          bgGradient={selected && 'linear(to-r, blue.600, blue.900)'}
          textTransform="uppercase"
          p={2}
          mt={3}
          _hover={{
            cursor: 'pointer',
            bgColor: 'blue.800',
            color: selected ? 'white' : 'gray.50',
            // boxShadow: 'xs',
          }}
          borderLeft={selected && '4px'}
          boxShadow={selected && 'sm'}
          rounded="sm"

        >
          <HStack>
            {icon}
            <Link to={link} style={{ fontSize: '14px' }}>
              {text}
            </Link>
          </HStack>
          <Box
            onClick={onToggle}

          >
            {isOpen ? (
              <Box _hover={{
                bgColor: 'black',
              }}
              >
                <FaChevronDown />
              </Box>
            ) : <FaChevronRight />}

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
  text: 'dashboard',
  link: '/',
  itemList: [],
};

export default SidebarItemLink;
