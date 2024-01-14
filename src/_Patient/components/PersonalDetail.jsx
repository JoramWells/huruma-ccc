/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import {
  FormControl, FormLabel, HStack, Input, VStack,
} from '@chakra-ui/react';
import Select from 'react-select';
import PropTypes from 'prop-types';
import { Formik } from 'formik';
import StepperNavButtons from './Nav/StepperNavButtons';

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

const PersonalDetail = ({
  handleNext, handleBack, activeStep, setPersonalData,
}) => {
  const residenceOptions = [
    { value: '1', label: 'Nanyuki' },
    { value: '2', label: 'Nairobi' },
  ];

  const genderOptions = [
    { value: 'MALE', label: 'MALE' },
    { value: 'FEMALE', label: 'FEMALE' },
  ];

  return (
    <Formik
      initialValues={{
        first_name: '',
        last_name: '',
        middle_name: '',
        dob: '',
        email: '',
        nhif_no: '',
        patient_gender: '',
        id_number: '',
        residence: '',
      }}
      onSubmit={(values, { setSubmitting }) => {
        setPersonalData(values);
        handleNext();
        setSubmitting(false);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        setFieldValue,
      }) => (
        <form onSubmit={handleSubmit}>
          <VStack spacing={8}>

            <HStack w="full">
              <FormControl>
                <FormLabel>Out-Patient File Number</FormLabel>
                <Input
                  size="lg"
                />
              </FormControl>

              <FormControl>
                <FormLabel>Old Reference Number</FormLabel>
                <Input
                  size="lg"
                />
              </FormControl>

              <FormControl>
                <FormLabel>In-Patient File Number</FormLabel>
                <Input
                  size="lg"
                />
              </FormControl>
            </HStack>
            <HStack w="full">

              <FormControl>

                <FormLabel mt={1}>First Name</FormLabel>
                <Input
                  name="first_name"
                  size="lg"
                  placeholder="Enter First Name"
                  value={values.first_name}
                  onChange={handleChange}
                />

              </FormControl>

              <FormControl>

                <FormLabel mt={1}>Middle Name</FormLabel>
                <Input
                  name="middle_name"
                  size="lg"
                  placeholder="Enter Second Name"
                  value={values.middle_name}
                  onChange={handleChange}
                />

              </FormControl>
              <FormControl>

                <FormLabel mt={1}>Last Name</FormLabel>
                <Input
                  name="last_name"
                  size="lg"
                  placeholder="Enter Last Name"
                  value={values.last_name}
                  onChange={handleChange}
                />

              </FormControl>
            </HStack>

            {/* category */}
            <FormControl>
              <FormLabel>DOB</FormLabel>
              <Input
                name="dob"
                size="lg"
                type="date"
                onChange={handleChange}
                value={values.dob}
              />
            </FormControl>

            {/* item code */}
            <FormControl>
              <FormLabel>Select Gender</FormLabel>
              <Select
                name="patient_gender"
                options={genderOptions}
                styles={customStyles}
                value={values.patient_gender}
                onChange={(val) => setFieldValue('patient_gender', val)}
              />

            </FormControl>

            <FormControl>
              <FormLabel>ID/Passport Number</FormLabel>
              <Input
                name="id_number"
                size="lg"
                placeholder="Enter ID number"
                value={values.id_number}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Email Address</FormLabel>
              <Input
                type="email"
                name="email"
                size="lg"
                placeholder="Enter Address"
                value={values.email}
                onChange={handleChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel>Select Residence</FormLabel>
              <Select
                name="residence"
                options={residenceOptions}
                styles={customStyles}
                value={values.residence}
                onChange={(opt) => setFieldValue('residence', opt)}
              />

            </FormControl>
            <FormControl>
              <FormLabel>NHIF Number</FormLabel>
              <Input
                size="lg"
                name="nhif_no"
                value={values.nhif_no}
                onChange={handleChange}
              />
            </FormControl>

            {/* stepper navigation footer */}
            <StepperNavButtons
              handleBack={handleBack}
              activeStep={activeStep}
            />
          </VStack>

        </form>
      )}
    </Formik>
  );
};

PersonalDetail.propTypes = {
  activeStep: PropTypes.number,

  handleNext: PropTypes.func,
  handleBack: PropTypes.func,
  setPersonalData: PropTypes.func,

};

PersonalDetail.defaultProps = {
  activeStep: 1,

  handleNext: () => { },
  handleBack: () => { },
  setPersonalData: () => { },

};
export default PersonalDetail;
