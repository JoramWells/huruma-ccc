/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
import {
  FormControl, FormLabel, Input, Text, VStack,
} from '@chakra-ui/react';
import Select from 'react-select';
import PropTypes from 'prop-types';
import { useState } from 'react';
import Cash from '../PaymentOptions/Cash';
import Corporate from '../PaymentOptions/Cooporate';

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

const appointmentCategoryOptions = [
  { value: '1', label: 'General Doctor Appointment' },
  { value: '2', label: 'Specialist Appointment' },
  { value: '3', label: 'Nursing Appointment' },
];

const consultationTypeOptions = [
  { value: '1', label: 'ANC VISIT LINDA MAMA' },
  { value: '2', label: 'CONSULTATION-(CWC)' },
  { value: '3', label: 'CONSULTATION-CHEMO' },
  { value: '4', label: 'CONSULTATION-DM CLINIC' },
  { value: '5', label: 'CONSULTATION-DENTAL' },
  { value: '6', label: 'CONSULTATION-GYNAE' },
  { value: '7', label: 'CONSULTATION-NUTRITIONIST(CHILD)' },
  { value: '8', label: 'CONSULTATION-OPD DAY' },
  { value: '9', label: 'CONSULTATION-OPD NIGHT' },
  { value: '10', label: 'CONSULTATION-NUTRITIONIST' },
  { value: '11', label: 'CONSULTATION-CCC' },
  { value: '12', label: 'CONSULTATION-ANC' },
  { value: '13', label: 'CONSULTATION-PHYSIOTHERAPY' },
  { value: '14', label: 'DENTAL REVIEW' },
  { value: '15', label: 'E.N.T CONSULTATION' },
  { value: '16', label: 'FREE CONSULTATION' },
  { value: '17', label: 'NORMAL CONSULTATION' },
  { value: '18', label: 'SECOND-LINDA MAMA' },
  { value: '19', label: 'SPECIALIST CONSULTATION' },
  { value: '20', label: 'SURGEON-SOPC' },
];

const referralOptions = [
  { value: '1', label: 'NON REFERRAL' },
  { value: '1', label: 'REFERRAL FROM COMMUNITY UNIT' },
  { value: '1', label: 'REFERRAL FROM OTHER HEALTH FACILITY' },
];

const clinicOptions = [
  { value: '1', label: 'MAIN BRANCH' },
];

const PersonalDetail = ({
  first_name, setFirstName, last_name,
  setLastName, middle_name, setMiddleName, dob, setDOB,
  gender, setGender, ID, setID, residence, setResidence,
}) => {
  const options = [
    { value: 'SINGLE', label: 'SINGLE' },
    { value: 'MARRIED', label: 'MARRIED' },
  ];

  const genderOptions = [
    { value: 'MALE', label: 'MALE' },
    { value: 'FEMALE', label: 'FEMALE' },
  ];

  return (
    <VStack spacing={8}>
      <FormControl>

        <FormLabel mt={1}>First Name</FormLabel>
        <Input
          size="lg"
          placeholder="Enter First Name"
          value={first_name}
          onChange={(e) => setFirstName(e.target.value)}
        />

      </FormControl>

      <FormControl>

        <FormLabel mt={1}>Middle Name</FormLabel>
        <Input
          size="lg"
          placeholder="Enter Second Name"
          value={middle_name}
          onChange={(e) => setMiddleName(e.target.value)}
        />

      </FormControl>

      <FormControl>

        <FormLabel mt={1}>Last Name</FormLabel>
        <Input
          size="lg"
          placeholder="Enter Last Name"
          onChange={(e) => setLastName(e.target.value)}
        />

      </FormControl>

      {/* category */}
      <FormControl>
        <FormLabel>DOB</FormLabel>
        <Input
          size="lg"
          type="date"
          onChange={(e) => setDOB(e.target.value)}
        />
      </FormControl>

      {/* item code */}
      <FormControl>
        <FormLabel>Select Gender</FormLabel>
        <Select
          options={genderOptions}
          styles={customStyles}
          onChange={(genderValue) => setGender(genderValue.value)}
        />

      </FormControl>

      <FormControl>
        <FormLabel>ID/Passport Number</FormLabel>
        <Input
          size="lg"
          placeholder="Enter phone number"
        />
      </FormControl>
      <FormControl>
        <FormLabel>Email Address</FormLabel>
        <Input
          size="lg"
          placeholder="Enter Address"
        />
      </FormControl>
      <FormControl>
        <FormLabel>Select Residence</FormLabel>
        <Select options={options} styles={customStyles} />

      </FormControl>
    </VStack>
  );
};

PersonalDetail.propTypes = {
  first_name: PropTypes.string,
  middle_name: PropTypes.string,
  last_name: PropTypes.string,
  dob: PropTypes.string,
  gender: PropTypes.string,
  residence: PropTypes.string,
  ID: PropTypes.string,

  setFirstName: PropTypes.func,
  setMiddleName: PropTypes.func,
  setLastName: PropTypes.func,
  setDOB: PropTypes.func,
  setGender: PropTypes.func,
  setResidence: PropTypes.func,
  setID: PropTypes.func,
};

PersonalDetail.defaultProps = {
  first_name: '',
  middle_name: '',
  last_name: '',
  dob: '',
  gender: '',
  residence: '',
  ID: '',

  setFirstName: () => { },
  setMiddleName: () => { },
  setLastName: () => { },
  setDOB: () => { },
  setGender: () => { },
  setResidence: () => { },
  setID: () => { },
};

// hospital details
const HospitalDetail = ({ nhif_no, setNHIFNo }) => {
  const data = [];
  return (
    <VStack
      bgColor="white"
      spacing={8}
    >
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

      <FormControl>
        <FormLabel>NHIF Number</FormLabel>
        <Input
          size="lg"
          placeholder="Enter Occupation"
          onChange={(e) => setNHIFNo(e.target.value)}
          value={nhif_no}
        />
      </FormControl>
    </VStack>
  );
};

HospitalDetail.propTypes = {
  nhif_no: PropTypes.string,
  setNHIFNo: PropTypes.func,

};

HospitalDetail.defaultProps = {
  nhif_no: '',
  setNHIFNo: () => { },

};

// hospital details
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
      {paymentOption.value === '1' && <Cash />}

    </VStack>
  );
};

const Consultation = () => {
  const data = [];
  return (
    <div>
      {' '}
      <VStack spacing={8}>
        <FormControl>
          <FormLabel>Select Appointment Category</FormLabel>
          <Select options={appointmentCategoryOptions} />
        </FormControl>
        <FormControl>
          <FormLabel>Select Consultation Type</FormLabel>
          <Select options={consultationTypeOptions} />
        </FormControl>
        <FormControl>
          <FormLabel>Is Referral?</FormLabel>
          <Select options={referralOptions} />
        </FormControl>
        <FormControl>
          <FormLabel>Select Clinic</FormLabel>
          <Select options={clinicOptions} />
        </FormControl>
      </VStack>

    </div>
  );
};

export {
  PersonalDetail, HospitalDetail, PaymentDetail, Consultation,
};
