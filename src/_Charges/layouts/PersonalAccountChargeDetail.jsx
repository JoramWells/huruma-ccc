/* eslint-disable no-unused-vars */
/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable react/prop-types */
import {
  HStack, Text, VStack,
} from '@chakra-ui/react';
import {
  useLocation, useNavigate, useParams, useSearchParams,
} from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useCallback, useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import PropTypes from 'prop-types';

import BreadCrumbNav from '../../components/BreadCrumbNav';
import { useGetUserPersonalAccountDetailQuery } from '../../api/personalAccountCharges.api';

const PatientCard = ({
  text, icon, onClick, selected,
}) => {
  const [step, setStep] = useState(0);
  return (

    <HStack
      onClick={onClick}
      w="full"
      justifyContent="flex-start"
      bgColor={selected ? 'blue.50' : 'whitesmoke'}
      // border={selected && '1px'}
      // borderColor="blue.100"
      p={4}
      rounded="lg"
      transition="all 1s ease"
      _hover={{
        cursor: 'pointer',
        // colorScheme: 'blue',
        color: 'blue.500',
        bgColor: 'blue.50',
      }}
      color={selected ? 'blue.500' : 'blue.700'}
    >
      {icon}
      <Text>
        {text}
      </Text>
    </HStack>
  );
};

PatientCard.propTypes = {
  selected: PropTypes.bool,
};

PatientCard.defaultProps = {
  selected: false,
};

const PersonalAccountChargeDetail = () => {
  const [sideItem, setSideItem] = useState(0);
  const { id } = useParams();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const stepSearch = searchParams.get('step');
  const dispatch = useDispatch();

  const { data, isLoading } = useGetUserPersonalAccountDetailQuery(id);

  const breadCrumbData = [
    {
      id: nanoid(),
      title: 'Personal Accounts',
      link: '/personal-account-charges',
    },
    {
      id: nanoid(),
      title: `${data?.patient_full_name_pac}`,
      link: '/',
      isCurrentPage: true,
    },
  ];

  const handleSetSideItem = useCallback((step) => {
    setSideItem(step);
    navigate({
      pathname,
      search: `?step=${step}`,
    });
  }, [setSideItem, navigate, pathname]);
  console.log(data, 'dtx');

  return (
    <VStack
      h="100vh"
      w="full"
      mt="65px"
      bgColor="gray.50"
      alignItems="center"
      // justifyContent="center"
      p={3}
    >
      <BreadCrumbNav addBtn={false} breadCrumbData={breadCrumbData} />

    </VStack>
  );
};

export default PersonalAccountChargeDetail;
