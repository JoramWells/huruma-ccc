/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
import {
  Box,
  Button,
  Checkbox,
  CloseButton,
  FormControl,
  FormLabel,
  HStack,
  Input,
  Stack,
  Tag,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Select from 'react-select';
import { useGetInsurancesQuery } from '../../api/insurance.api';

const Corporate = () => {
  const [supplierName, setSupplierName] = useState('');
  const [mobileNo, setMobileNo] = useState('');
  const [payment_type_id, setPaymentTypeId] = useState('');
  const [insurance_membership_number, setInsuranceMemberShipNo] = useState('');
  const [classification, setClassification] = useState({ value: '', label: '' });
  const [status, setStatus] = useState({ value: 'Active', label: 'Active' });

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { data } = useGetInsurancesQuery();

  const insuranceOptions = data
          && data.map((item) => (
            { value: item.insurance_id, label: item.insurance_name }
          ));

  const inputValues = {
    supplierName,
    mobileNo,
    classification: classification.value,
    status: status.value,
  };

  const statusOptions = [{ value: 'Active', label: 'Active' },
    { value: 'In Active', label: 'In Active' },
  ];

  const customStyles = {
    control: (provided, state) => ({
      ...provided,
      minHeight: '45px',
      height: '45px',
    }),
    input: (provided) => ({
      ...provided,
    }),
  };

  return (

    <VStack
      w="full"
      bgColor="white"
      rounded="lg"
      spacing={6}
      mt={6}
    >
      <FormControl>
        <HStack w="full" alignItems="center" justifyContent="space-between">
          <FormLabel fontSize="medium">Select Insurance Account</FormLabel>
          <Tag
            onClick={() => navigate('/add-insurance')}
            colorScheme="green"
            _hover={{
              cursor: 'pointer',
            }}
          >
            NEW

          </Tag>

        </HStack>
        <Select
          styles={customStyles}
          options={insuranceOptions}
          value={classification}
          onChange={(e) => setClassification(e)}
        />

      </FormControl>

      {/* select Department */}
      <FormControl>
        <HStack w="full" alignItems="center" justifyContent="space-between">
          <FormLabel fontSize="medium">Company Scheme</FormLabel>
          <Tag
            onClick={() => navigate('/add-ward')}
            _hover={{
              cursor: 'pointer',
            }}
          >
            NEW

          </Tag>

        </HStack>
        <Select
          styles={customStyles}
          options={statusOptions}
          value={classification}
          onChange={(e) => setClassification(e)}
        />

      </FormControl>

      <FormControl>
        <FormLabel>Staff Number</FormLabel>
        <Input
          size="lg"
          placeholder="Enter Staff Number"
          value={mobileNo}
          onChange={(e) => setMobileNo(e.target.value)}
        />
      </FormControl>

      <FormControl>
        <FormLabel>Insurance Membership Number</FormLabel>
        <Input
          size="lg"
          value={insurance_membership_number}
          onChange={(e) => setInsuranceMemberShipNo(e.target.value)}
        />
      </FormControl>

      <FormControl>
        <FormLabel>Principal Member Name</FormLabel>
        <Input
          size="lg"
          value={mobileNo}
          onChange={(e) => setMobileNo(e.target.value)}
        />
      </FormControl>
    </VStack>
  );
};

export default Corporate;
