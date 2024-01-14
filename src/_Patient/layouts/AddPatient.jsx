/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import {
  Box, Button, VStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';

import moment from 'moment/moment';
import { useAddPatientMutation } from '../../api/patients.api';
import PaymentDetail from '../components/PaymentDetail';
import StepperNav from '../components/Nav/StepperNav';
import PersonalDetail from '../components/PersonalDetail';
import NextOfKin from '../components/PatientForm/NextOfKin';

const sunrise = moment('6:00 a.m', 'h:mm a');
const sunset = moment('6:00 p.m', 'h:mm a');

const isDay = () => {
  const currentTime = moment();
  return currentTime.isBetween(sunrise, sunset);
};

const AddPatient = () => {
  const [personalData, setPersonalData] = useState({});
  const [nextOfKinData, setNextOfKinData] = useState({});
  const [insuranceAccount, setInsuranceAccount] = useState('');
  const [paymentType, setPaymentType] = useState('');

  const [activeStep, setActiveStep] = useState(1);
  const [account_type_id, setAccountTypeID] = useState('');

  const steps = [
    { title: 'Personal', description: 'Personal Information' },
    { title: 'Next of Kin', description: 'Next of Kin Details' },
    { title: 'Payment', description: 'Payment Details' },
    { title: 'Complete', description: 'Complete Registration Details' },
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

  // OPD DAY || OPD NIGHT
  const consultation_type = '28';
  const accountType = paymentType?.paymentType?.value;

  const inputValues = {
    account_type_id: accountType,
    consultation_type,
    insuranceAccount,
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
          paymentType={paymentType}
          setPaymentType={setPaymentType}
          inputValues={inputValues}
          insuranceAccount={insuranceAccount}
          setInsuranceAccount={setInsuranceAccount}
          handleNext={handleNext}
        />
        )}

        {/* complete info */}
        {activeStep === 4 && (
          <Button
            colorScheme="green"
            onClick={() => addPatient(inputValues)}
          >
            {isLoading ? 'loading...' : 'Complete'}

          </Button>
        )}

      </Box>
    </VStack>
  );
};

export default AddPatient;
