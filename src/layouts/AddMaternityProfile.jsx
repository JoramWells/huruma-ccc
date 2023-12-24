import {
  Box, Button, HStack, Step, StepDescription, StepIcon,
  StepIndicator, StepNumber,
  StepSeparator, StepStatus, StepTitle, Stepper, VStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import { nanoid } from '@reduxjs/toolkit';
import PersonalInfo from '../components/MaternitySteps/PersonalInfo';
import ScreeningInfo from '../components/MaternitySteps/ScreeningInfo';

const AddMaternityProfile = () => {
  const [activeStep, setActiveStep] = useState(1);

  const steps = [
    { title: 'Personal', description: 'Personal Information' },
    { title: 'Screening', description: 'Screening Data' },
    { title: 'Medical & Surgical', description: 'Medical & Surgical History' },
  ];

  const handleNext = () => {
    setActiveStep((prevStep) => prevStep + 1);
    // navigate({
    //   pathname: '/add-invoice',
    //   search: `?id=${invoiceId}`,
    // });
  };

  const handleBack = () => {
    setActiveStep((prevStep) => prevStep - 1);
  };

  return (
    <VStack w="full" h="100vh" bgColor="gray.50" justifyContent="center" alignItems="center">
      <Box w="50%" mt={5} boxShadow="lg" p={5} rounded="lg" bgColor="white">
        <Stepper index={activeStep} mb={5}>
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

        {activeStep === 1 && <PersonalInfo />}
        {activeStep === 2 && <ScreeningInfo />}

        {/* payment info */}

        <HStack mt={5} w="full" justifyContent="flex-end">
          <Button onClick={() => handleBack()} isDisabled={activeStep === 1}>Back</Button>
          <Button onClick={() => handleNext()}>Next</Button>
        </HStack>
      </Box>
    </VStack>
  );
};

export default AddMaternityProfile;
