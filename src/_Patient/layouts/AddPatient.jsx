/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import {
  Box, Button, HStack, Step, StepDescription, StepIcon,
  StepIndicator, StepNumber,
  StepSeparator, StepStatus, StepTitle, Stepper, VStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import { useSearchParams } from 'react-router-dom';
import {
  HospitalDetail, PersonalDetail,
} from '../components/PatientForm';
import { useAddPatientMutation } from '../../api/patients.api';
import PaymentDetail from '../components/PaymentDetail';

const AddPatient = () => {
  const [first_name, setFirstName] = useState('');
  const [middle_name, setMiddleName] = useState('');
  const [last_name, setLastName] = useState('');
  const [dob, setDOB] = useState('');
  const [patient_gender, setGender] = useState('');
  const [residence, setResidence] = useState('');
  const [id_number, setID] = useState('');
  const [nhif_no, setNHIFNo] = useState('');
  const [email, setEmail] = useState('');
  const [activeStep, setActiveStep] = useState(1);

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

  const inputValues = {
    first_name,
    middle_name,
    last_name,
    dob,
    patient_gender,
    residence,
    id_number,
    nhif_no,
    charges: 350,
    email,
  };

  const [addPatient, { isLoading }] = useAddPatientMutation();

  return (
    <VStack w="full" h="100vh" bgColor="gray.50" mt="55px">
      <Stepper
        index={activeStep}
        mb={2}
        w="65%"
        mt={5}
        rounded="lg"
        bgColor="white"
        p={4}
        border="1px"
        borderColor="gray.200"
      >
        {steps.map((step) => (
          <Step key={nanoid()}>
            <StepIndicator>
              <StepStatus
                complete={<StepIcon />}
                incomplete={<StepNumber />}
                active={<StepNumber />}
              />
            </StepIndicator>
            <Box flexShrink={0}>
              <StepTitle>{step.title}</StepTitle>
              <StepDescription>{step.description}</StepDescription>
            </Box>
            <StepSeparator />
          </Step>
        ))}
      </Stepper>

      <Box
        w="50%"
        p={5}
        rounded="lg"
        bgColor="white"
      >
        {activeStep === 1 && (
        <PersonalDetail
          first_name={first_name}
          middle_name={middle_name}
          last_name={last_name}
          email={email}
          dob={dob}
          patient_gender={patient_gender}
          residence={residence}
          id_number={id_number}
          setFirstName={setFirstName}
          setMiddleName={setMiddleName}
          setLastName={setLastName}
          setEmail={setEmail}
          setDOB={setDOB}
          setPatientGender={setGender}
          setResidence={setResidence}
          setIDNumber={setID}
        />
        )}
        {activeStep === 2 && (
        <HospitalDetail
          nhif_no={nhif_no}
          setNHIFNo={setNHIFNo}
        />
        )}
        {activeStep === 3 && <PaymentDetail />}

        {/* payment info */}

        <HStack mt={5} w="full" justifyContent="flex-end">
          <Button
            onClick={() => handleBack()}
            isDisabled={activeStep === 1}
          >
            Back

          </Button>
          {activeStep === 4 ? (
            <Button
              onClick={() => addPatient(inputValues)}
            >
              {isLoading ? 'loading' : 'Complete'}
            </Button>
          )
            : <Button onClick={() => handleNext()}>Next</Button>}
        </HStack>
      </Box>
    </VStack>
  );
};

export default AddPatient;
