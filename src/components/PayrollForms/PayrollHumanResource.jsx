/* eslint-disable no-unused-vars */
/* eslint-disable camelcase */
import {
  FormControl, FormLabel, HStack, Input,
  VStack,
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

const PayrollHumanResource = ({
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

      <FormControl isRequired>
        <FormLabel>Employee Category</FormLabel>
        <Select
          options={genderOptions}
          styles={customStyles}
          onChange={(genderValue) => setGender(genderValue.value)}
        />

      </FormControl>

      <FormControl isRequired>
        <FormLabel>Active Status</FormLabel>
        <Select
          options={genderOptions}
          styles={customStyles}
          onChange={(genderValue) => setGender(genderValue.value)}
        />

      </FormControl>

      <HStack w="full">
        <FormControl isRequired>
          <FormLabel>Select Pay Period</FormLabel>
          <Select
            options={genderOptions}
            styles={customStyles}
            onChange={(genderValue) => setGender(genderValue.value)}
          />

        </FormControl>

        <FormControl isRequired>
          <FormLabel>Select Pay Type</FormLabel>
          <Select
            options={genderOptions}
            styles={customStyles}
            onChange={(genderValue) => setGender(genderValue.value)}
          />

        </FormControl>
      </HStack>

      <HStack w="full">
        <FormControl isRequired>
          <FormLabel>Basic Salary</FormLabel>
          <Input
            size="lg"
            value={first_name}
            onChange={(e) => setFirstName(e.target.value)}
          />

        </FormControl>

        <FormControl isRequired>

          <FormLabel>Hourly Rate</FormLabel>
          <Input
            size="lg"
            value={middle_name}
            onChange={(e) => setMiddleName(e.target.value)}
          />

        </FormControl>
      </HStack>

      <FormControl isRequired>
        <FormLabel>Select Employment Status</FormLabel>
        <Select
          options={genderOptions}
          styles={customStyles}
          onChange={(genderValue) => setGender(genderValue.value)}
        />

      </FormControl>

      <HStack w="full">
        <FormControl isRequired>
          <FormLabel>Select Department</FormLabel>
          <Select
            options={genderOptions}
            styles={customStyles}
            onChange={(genderValue) => setGender(genderValue.value)}
          />

        </FormControl>

        <FormControl isRequired>
          <FormLabel>Select Job Title</FormLabel>
          <Select
            options={genderOptions}
            styles={customStyles}
            onChange={(genderValue) => setGender(genderValue.value)}
          />

        </FormControl>

        <FormControl isRequired>

          <FormLabel>Job Number</FormLabel>
          <Input
            size="lg"
            onChange={(e) => setLastName(e.target.value)}
          />

        </FormControl>
      </HStack>

      <HStack w="full">
        {/* category */}
        <FormControl isRequired>
          <FormLabel>KRA pin number</FormLabel>
          <Input
            size="lg"
            onChange={(e) => setDOB(e.target.value)}
            value={dob}
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>NHIF number</FormLabel>
          <Input
            size="lg"
            onChange={(e) => setDOB(e.target.value)}
            value={dob}
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>NSSF number</FormLabel>
          <Input
            size="lg"
            onChange={(e) => setDOB(e.target.value)}
            value={dob}
          />
        </FormControl>
      </HStack>

      <HStack w="full">
        <FormControl isRequired>
          <FormLabel>Hire Date</FormLabel>
          <Input
            size="lg"
            type="date"
            placeholder="Enter phone number"
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Probation Terminated</FormLabel>
          <Input
            size="lg"
            type="date"
            placeholder="Enter phone number"
          />
        </FormControl>
      </HStack>

      <HStack w="full">
        <FormControl isRequired>
          <FormLabel>Termination Date</FormLabel>
          <Input
            size="lg"
            type="date"
            placeholder="Enter phone number"
          />
        </FormControl>

        <FormControl isRequired>
          <FormLabel>Retire Date</FormLabel>
          <Input
            size="lg"
            type="date"
            placeholder="Enter phone number"
          />
        </FormControl>
        {/* item code */}
        <FormControl isRequired>
          <FormLabel>Select Reason for Leaving</FormLabel>
          <Select
            options={genderOptions}
            styles={customStyles}
            onChange={(genderValue) => setGender(genderValue.value)}
          />

        </FormControl>
      </HStack>

      <HStack w="full">
        <FormControl isRequired>
          <FormLabel>Tax Status</FormLabel>
          <Select
            options={genderOptions}
            styles={customStyles}
            onChange={(genderValue) => setGender(genderValue.value)}
          />

        </FormControl>
        <FormControl isRequired>
          <FormLabel>Deduct NSSF?</FormLabel>
          <Select
            options={genderOptions}
            styles={customStyles}
            onChange={(genderValue) => setGender(genderValue.value)}
          />

        </FormControl>
        {/* item code */}
        <FormControl isRequired>
          <FormLabel>Deduct NHIF?</FormLabel>
          <Select
            options={genderOptions}
            styles={customStyles}
            onChange={(genderValue) => setGender(genderValue.value)}
          />

        </FormControl>
      </HStack>

    </VStack>
  );
};

PayrollHumanResource.propTypes = {
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

PayrollHumanResource.defaultProps = {
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

export default PayrollHumanResource;
