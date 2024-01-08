/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
import {
  FormControl, FormLabel, HStack, Input, Text, VStack,
} from '@chakra-ui/react';
import Select from 'react-select';
import PropTypes from 'prop-types';

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
  first_name, setFirstName, last_name,
  setLastName, middle_name, setMiddleName, dob, setDOB, email,
  patient_gender,
  setPatientGender, id_number, setIDNumber, residence, setResidence, setEmail,
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

        <FormControl isRequired>

          <FormLabel mt={1}>First Name</FormLabel>
          <Input
            size="lg"
            placeholder="Enter First Name"
            value={first_name}
            onChange={(e) => setFirstName(e.target.value)}
          />

        </FormControl>

        <FormControl isRequired>

          <FormLabel mt={1}>Middle Name</FormLabel>
          <Input
            size="lg"
            placeholder="Enter Second Name"
            value={middle_name}
            onChange={(e) => setMiddleName(e.target.value)}
          />

        </FormControl>
        <FormControl isRequired>

          <FormLabel mt={1}>Last Name</FormLabel>
          <Input
            size="lg"
            placeholder="Enter Last Name"
            value={last_name}
            onChange={(e) => setLastName(e.target.value)}
          />

        </FormControl>
      </HStack>

      {/* category */}
      <FormControl isRequired>
        <FormLabel>DOB</FormLabel>
        <Input
          size="lg"
          type="date"
          onChange={(e) => setDOB(e.target.value)}
          value={dob}
        />
      </FormControl>

      {/* item code */}
      <FormControl isRequired>
        <FormLabel>Select Gender</FormLabel>
        <Select
          options={genderOptions}
          styles={customStyles}
          onChange={(genderValue) => setPatientGender(genderValue.value)}
        />

      </FormControl>

      <FormControl isRequired>
        <FormLabel>ID/Passport Number</FormLabel>
        <Input
          size="lg"
          placeholder="Enter phone number"
          value={id_number}
          onChange={(e) => setIDNumber(e.target.value)}
        />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Email Address</FormLabel>
        <Input
          size="lg"
          placeholder="Enter Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </FormControl>
      <FormControl isRequired>
        <FormLabel>Select Residence</FormLabel>
        <Select
          options={residenceOptions}
          styles={customStyles}
          onChange={(e) => setResidence(e.value)}
        />

      </FormControl>
    </VStack>
  );
};

PersonalDetail.propTypes = {
  first_name: PropTypes.string,
  middle_name: PropTypes.string,
  last_name: PropTypes.string,
  email: PropTypes.string,
  dob: PropTypes.string,
  patient_gender: PropTypes.string,
  residence: PropTypes.string,
  id_number: PropTypes.string,

  setFirstName: PropTypes.func,
  setMiddleName: PropTypes.func,
  setLastName: PropTypes.func,
  setDOB: PropTypes.func,
  setPatientGender: PropTypes.func,
  setResidence: PropTypes.func,
  setIDNumber: PropTypes.func,
  setEmail: PropTypes.func,
};

PersonalDetail.defaultProps = {
  first_name: '',
  middle_name: '',
  last_name: '',
  email: '',
  dob: '',
  patient_gender: '',
  residence: '',
  id_number: '',

  setFirstName: () => { },
  setMiddleName: () => { },
  setLastName: () => { },
  setDOB: () => { },
  setPatientGender: () => { },
  setResidence: () => { },
  setIDNumber: () => { },
  setEmail: () => { },
};

// hospital details
const HospitalDetail = ({ nhif_no, setNHIFNo }) => {
  const data = [];
  const genderOptions = [
    { value: 'MALE', label: 'MALE' },
    { value: 'FEMALE', label: 'FEMALE' },
  ];
  return (
    <VStack
      bgColor="white"
      spacing={8}
    >
      <FormControl>
        <FormLabel>Next of Kin</FormLabel>
        <Select styles={customStyles} options={genderOptions} />
      </FormControl>
      <HStack w="full">
        <FormControl>
          <FormLabel>First Name</FormLabel>
          <Input
            size="lg"
          />
        </FormControl>

        <FormControl>
          <FormLabel>Second Name</FormLabel>
          <Input
            size="lg"
          />
        </FormControl>
      </HStack>

      <FormControl>
        <FormLabel>Next of Kin Number</FormLabel>
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

export {
  PersonalDetail, HospitalDetail,
};
