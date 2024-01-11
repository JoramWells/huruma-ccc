/* eslint-disable react/forbid-prop-types */
import {
  Box, Step, StepDescription, StepIcon,
  StepIndicator, StepNumber, StepSeparator,
  StepStatus, StepTitle, Stepper,
} from '@chakra-ui/react';
import { nanoid } from '@reduxjs/toolkit';
import PropTypes from 'prop-types';

const StepperNav = ({ activeStep, steps }) => (
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
);

StepperNav.propTypes = {
  steps: PropTypes.array,
  activeStep: PropTypes.number,
};

StepperNav.defaultProps = {
  steps: [],
  activeStep: 1,
};

export default StepperNav;
