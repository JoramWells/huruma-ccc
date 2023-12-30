/* eslint-disable no-unused-vars */
import { FormControl, FormLabel, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import Select from 'react-select';
import Corporate from '../PaymentOptions/Cooporate';
import Cash from '../PaymentOptions/Cash';

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

const PaymentDetail = () => {
  const [paymentOption, setPaymentOption] = useState({ value: '', label: '' });
  const options = [
    { value: '1', label: 'CASH' },
    { value: '2', label: 'CORPORATE' },
    { value: '3', label: 'FOREIGNER' },
  ];
  return (
    <VStack
      bgColor="white"
      spacing={8}
    >
      <FormControl>
        <FormLabel>Select Payment Type</FormLabel>
        <Select
          options={options}
          styles={customStyles}
          onChange={(value) => setPaymentOption(value)}
        />
        {paymentOption.value === '2' && <Corporate />}

      </FormControl>

    </VStack>
  );
};

export default PaymentDetail;
