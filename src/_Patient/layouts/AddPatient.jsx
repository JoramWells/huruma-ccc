/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import {
  Box, Button, VStack,
} from '@chakra-ui/react';
import {
  useCallback, useEffect, useMemo, useState,
} from 'react';
import { useSearchParams } from 'react-router-dom';

import moment from 'moment/moment';
import { useAddPatientMutation } from '../../api/patients.api';
import PaymentDetail from '../components/PaymentDetail';
import StepperNav from '../components/Nav/StepperNav';
import PersonalDetail from '../components/PersonalDetail';
import NextOfKin from '../components/PatientForm/NextOfKin';
import { useAddPersonalAccountChargeMutation } from '../../api/personalAccountCharges.api';

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
  const [cost, setCost] = useState(0);
  const [patientID, setPatientID] = useState('');
  const [appointmentID, setAppointmentID] = useState('');

  const [activeStep, setActiveStep] = useState(1);
  const [account_type_id, setAccountTypeID] = useState('');

  const steps = [
    { title: 'Personal', description: 'Personal Info' },
    { title: 'Next of Kin', description: 'NofK Details' },
    { title: 'Payment', description: 'Payment Details' },
    { title: 'Finish', description: 'Complete Registration' },
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
  const consultation_type = 'CONSULTATION CONSULTATION-OPD DAY';
  const accountType = paymentType?.paymentType?.value;

  const inputValues = useMemo(() => [

    {
      account_type_id: accountType,
      consultation_type: '28',
      insuranceAccount,
      ...personalData,
      ...nextOfKinData,
    },
  ], [accountType, personalData, nextOfKinData, insuranceAccount]);

  const [addPatient, { isLoading, data }] = useAddPatientMutation();
  const [addPersonalAccountCharge,
    { isLoading: isLoadingCharges }] = useAddPersonalAccountChargeMutation();

  const chargesInputValues = useMemo(() => [
    {
      amount: cost,
      service_desc: consultation_type,
      date_of_charge: moment(new Date()).format('MM-DD-YYYY'),
      time_of_charge: moment(new Date()).format('hh:mm:ss'),
      status: 1,
      patient_id: patientID,
      hospital_id: 18,
      quantity: 0,
      appointment_id: appointmentID,
    },
  ], [appointmentID, consultation_type,
    patientID,
    cost,
  ]);

  useEffect(() => {
    if (data) {
      setPatientID(data?.patient_id);
      setAppointmentID(data?.appointment_id);
    }
    if (patientID) { addPersonalAccountCharge(chargesInputValues[0]); }
  }, [data, addPersonalAccountCharge,
    patientID, chargesInputValues]);

  const handleSubmit = useCallback(() => {
    addPatient(inputValues);

    // timeout
    // setTimeout(() => {
    //   addPersonalAccountCharge(chargesInputValues);
    // }, 3000);
  }, [addPatient,
    // appointmentID, patientID,
    inputValues,
  ]);

  console.log(chargesInputValues, 'cki');

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
          handleBack={handleBack}
          setPersonalData={setPersonalData}
          activeStep={activeStep}
        />
        )}

        {/* NEXT OF KIN */}
        {activeStep === 2 && (
        <NextOfKin
          handleNext={handleNext}
          handleBack={handleBack}
          setNextOfKinData={setNextOfKinData}
          activeStep={activeStep}
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
          cost={cost}
          setCost={setCost}
          handleNext={handleNext}
          handleBack={handleBack}
          activeStep={activeStep}
        />
        )}

        {/* complete info */}
        {activeStep === 4 && (
          <Button
            colorScheme="green"
            onClick={() => handleSubmit()}
          >
            {isLoading || isLoadingCharges ? 'loading...' : 'Save Patient'}

          </Button>
        )}

      </Box>
    </VStack>
  );
};

export default AddPatient;
