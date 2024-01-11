/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {
  Button, FormControl, FormLabel, HStack, VStack,
} from '@chakra-ui/react';
import { useCallback, useState } from 'react';
import Select from 'react-select';
import Corporate from './Cooporate';
import { useGetAllAccountTypesQuery } from '../../api/accountType.api';
import { useAddPatientMutation } from '../../api/patients.api';

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

const PaymentDetail = ({ accountType, setAccountType, inputValues }) => {
  // const [accountType, setAccountType] = useState({ value: '', label: '' });
  // const [paymentOption, setPaymentOption] = useState({ value: '', label: '' });

  const [addPatient] = useAddPatientMutation();

  const { data } = useGetAllAccountTypesQuery();

  // const datax = useCallback(()=>{},)

  const accountTypeOptions = data?.map((item) => ({
    value: item.account_type_id, label: item.account_type_description,
  }));

  return (
    <VStack
      bgColor="white"
      spacing={8}
    >
      <FormControl>
        <FormLabel>Select Payment Type</FormLabel>
        <Select
          options={accountTypeOptions}
          styles={customStyles}
          onChange={(type) => setAccountType(type.value)}
        />
        {accountType === '1' && <Corporate />}

      </FormControl>

      <HStack w="full" justifyContent="flex-end">
        <Button
          colorScheme="green"
          onClick={() => addPatient(inputValues)}
        >
          Complete
        </Button>
      </HStack>

    </VStack>
  );
};

export default PaymentDetail;
