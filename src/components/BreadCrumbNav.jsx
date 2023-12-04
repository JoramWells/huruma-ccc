/* eslint-disable no-unused-vars */
import {
  Breadcrumb, BreadcrumbItem, BreadcrumbLink, Button, HStack,
} from '@chakra-ui/react';
import { nanoid } from '@reduxjs/toolkit';
import { FaChevronRight } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const breadCrumbData = [
  {
    id: nanoid(),
    title: 'Home',
    link: '/',
  },
  {
    id: nanoid(),
    title: 'Stores',
    link: '/stores',
  },
  {
    id: nanoid(),
    title: 'Pharmaceuticals',
    link: '/pharmaceuticals',
  },
];

const BreadCrumbNav = () => {
  const navigate = useNavigate();
  return (
    <HStack alignItems="center" justifyContent="center">
      <HStack
        mt={8}
        w="98%"
        bgColor="gray.50"
        h={12}
        p={2}
        justifyContent="space-between"
      >
        <Breadcrumb separator={(
          <FaChevronRight
            size={15}
            color="gray"
          />
              )}
        >
          {breadCrumbData.map((item) => (
            <BreadcrumbItem
              key={item.id}
              onClick={() => navigate(item.link)}
            >
              <BreadcrumbLink fontSize="md">{item.title}</BreadcrumbLink>
            </BreadcrumbItem>
          ))}

        </Breadcrumb>
        <Button
          colorScheme="green"
          size="md"
          boxShadow="lg"
          onClick={() => navigate('/add-pharmaceuticals')}
        >
          NEW

        </Button>
      </HStack>
    </HStack>
  );
};

export default BreadCrumbNav;
