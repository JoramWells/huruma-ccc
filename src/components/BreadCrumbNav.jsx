/* eslint-disable react/forbid-prop-types */
/* eslint-disable no-unused-vars */
import {
  Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, HStack, IconButton,
} from '@chakra-ui/react';
import { nanoid } from '@reduxjs/toolkit';
import { FaChevronRight, FaHome, FaPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

const BreadCrumbNav = ({ link, breadCrumbData }) => {
  const navigate = useNavigate();
  return (
    <HStack alignItems="center" justifyContent="center" w="full">
      <HStack
        w="100%"
        bgColor="white"
        h={14}
        p={3}
        justifyContent="space-between"
        rounded="lg"
        boxShadow="sm"
      >
        <Breadcrumb separator={(
          <FaChevronRight
            size={15}
            color="gray"
          />
              )}
        >
          <BreadcrumbItem>
            <IconButton onClick={() => navigate('/')}>
              <FaHome />
            </IconButton>
          </BreadcrumbItem>
          {breadCrumbData.map((item) => (
            <BreadcrumbItem
              key={item.id}
              onClick={() => navigate(item.link)}
              isCurrentPage={item.isCurrentPage}
            >
              <BreadcrumbLink fontSize="md">{item.title}</BreadcrumbLink>
            </BreadcrumbItem>
          ))}

        </Breadcrumb>
        <Button
          colorScheme="green"
          size="md"
          boxShadow="lg"
          onClick={() => navigate(link)}
          leftIcon={<FaPlus />}
        >
          NEW

        </Button>
      </HStack>
    </HStack>
  );
};

export default BreadCrumbNav;

BreadCrumbNav.propTypes = {
  link: PropTypes.string,
  breadCrumbData: PropTypes.array,
};

BreadCrumbNav.defaultProps = {
  link: '/add-pharmaceuticals',
  breadCrumbData: [
    {
      id: nanoid(),
      title: 'Stores',
      link: '/stores',
    },
    {
      id: nanoid(),
      title: 'Pharmaceuticals',
      link: '/pharmaceuticals',
      isCurrentPage: true,
    },
  ],
};
