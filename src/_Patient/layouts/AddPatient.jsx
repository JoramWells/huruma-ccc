/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import {
  Box, Button, HStack, VStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import { useAddPatientMutation } from '../../api/patients.api';
import PaymentDetail from '../components/PaymentDetail';
import StepperNav from '../components/Nav/StepperNav';
import PersonalDetail from '../components/PersonalDetail';
import NextOfKin from '../components/PatientForm/NextOfKin';

const AddPatient = () => {
  const [personalData, setPersonalData] = useState({});
  const [nextOfKinData, setNextOfKinData] = useState({});

  const [activeStep, setActiveStep] = useState(1);
  const [next_of_kin, setNextOfKin] = useState('');
  const [next_of_kin_name, setNextOfKinName] = useState('');
  const [next_of_kin_cell_phone, setNextOfKinCellphone] = useState('');
  const [account_type_id, setAccountTypeID] = useState('');

  const steps = [
    { title: 'Personal', description: 'Personal Information' },
    { title: 'Next of Kin', description: 'Next of Kin Details' },
    { title: 'Payment', description: 'Payment Details' },
  ];

  const [searchParams, setSearchParams] = useSearchParams();

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
    // navigate({
    //   pathname: '/add-invoice',
    //   search: `?id=${invoiceId}`,
    // });
    setSearchParams(activeStep);
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  // DATA STRUCTURE
  // personalData={
  //   patient_gender:{value:'MALE', label:'MALE'}
  // residence:{value:1, label:'Nanyuki}
  // }

  personalData.patient_gender = personalData.patient_gender?.value;
  personalData.residence = personalData.residence?.value;

  nextOfKinData.next_of_kin = nextOfKinData.next_of_kin?.value;

  const inputValues = {
    charges: 350,
    ...personalData,
    ...nextOfKinData,
  };

  const [addPatient, { isLoading }] = useAddPatientMutation();
  console.log(inputValues);

  return (
    <VStack w="full" h="100vh" bgColor="gray.50" mt="55px">

      {/* stepper navigation */}
      <StepperNav activeStep={activeStep} steps={steps} />

      <Box
        w="50%"
        p={5}
        rounded="lg"
        bgColor="white"
      >

        {/* PERSONAL DETAILS */}
        {activeStep === 1 && (
        <PersonalDetail
          handleNext={handleNext}
          setPersonalData={setPersonalData}
          activeStep={activeStep}
        />
        )}

        {/* NEXT OF KIN */}
        {activeStep === 2 && (
        <NextOfKin
          handleNext={handleNext}
          setNextOfKinData={setNextOfKinData}
        />
        )}

        {/* payment detail */}
        {activeStep === 3 && (
        <PaymentDetail
          accountType={account_type_id}
          setAccountType={setAccountTypeID}
          inputValues={inputValues}
        />
        )}

        {/* payment info */}

      </Box>
    </VStack>
  );
};

export default AddPatient;
