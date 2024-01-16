/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */

import {
  Button,
  Divider,
  FormControl, FormLabel, HStack, Input, Text, Textarea,
  VStack, useToast,
} from '@chakra-ui/react';
import Select from 'react-select';
import { useCallback, useEffect, useState } from 'react';
import { FaExclamationTriangle } from 'react-icons/fa';
import { useParams, useSearchParams } from 'react-router-dom';
import moment from 'moment/moment';
import BreadCrumbNav from '../../components/BreadCrumbNav';
import { useGetAllMedicationQuery } from '../../_Medication/api/medication.api';
import { useGetAllMedicationCategoryQuery } from '../../_Medication/api/medicationCategory.api';
import { useAddInternalPharmacyRequestMutation } from '../api/internalPharmacyRequest.api';

const selectStyles = {
  control: (provided, state) => ({
    ...provided,
    minHeight: '45px',
    height: '45px',
    backgroundColor: '#F7FAFC',
    border: 0,
  }),
  input: (provided) => ({
    ...provided,
  }),
};

const AddPharmacyRequest = () => {
  const { id } = useParams();
  const { data } = useGetAllMedicationQuery();
  const [medication, setMedication] = useState({
    value: '',
    label: '',
    category: '',
    cost: 0,
  });
  const [category, setCategory] = useState('');
  const [measuringUnit, setMeasuringUnit] = useState('');
  const [cost, setCost] = useState(medication?.cost);
  const [quantity, setQuantity] = useState(0);
  const [prescriptionQuantity, setPrescriptionQuantity] = useState(0);
  const [prescription, setPrescription] = useState(0);
  const [instructions, setInstructions] = useState('');
  const [noOfDays, setNoOfDays] = useState('');

  const { data: medicationCategoryData } = useGetAllMedicationCategoryQuery();
  const [addInternalPharmacyRequest, { isLoading }] = useAddInternalPharmacyRequestMutation();

  const medicationCategoryCallback = useCallback(() => medicationCategoryData?.map((item) => ({
    value: item.category_id,
    label: item.category_name,
  })), [medicationCategoryData]);

  const medicationCallback = useCallback(() => data?.map((item) => ({
    value: item.medication_id,
    label: item.medication_name,
    category: item.medication_category?.category_name || '',
    cost: item.price,
    medicationPackaging: item?.medication_packaging_type?.package_description,
  })), [data]);

  const prescriptionOptions = [
    { value: 1, label: '(QID) FOUR TIMES A DAY' },
    { value: 2, label: 'BID (TWICE A DAY)' },
    { value: 3, label: 'OD' },
    { value: 4, label: 'PRN' },
    { value: 5, label: 'STAT' },
    { value: 6, label: 'TDS' },
    { value: 7, label: 'TID' },
    { value: 8, label: 'TWO TIMES A DAY' },
  ];

  const toast = useToast();
  const displayToast = useCallback(() => (
    toast({
      title: 'Medicine out of stock.',
      status: 'warning',
      isClosable: 'true',
      position: 'top-right',
      variant: ['subtle', 'left-accent'],
      description: 'Request sent to admin. Kindly request another medicine.',
    })
  ), [toast]);

  let medicationOptions = medicationCallback();
  const filteredMedicationOptions = useCallback(() => medicationOptions?.filter(
    (item) => item.category.toLowerCase()
      .includes(category.label?.toLowerCase()),
  ), [category, medicationOptions]);

  const categoryOptions = medicationCategoryCallback();
  medicationOptions = filteredMedicationOptions();

  const [searchParams] = useSearchParams();
  const patient_id = searchParams.get('patient_id');

  const inputValues = {
    appointment_id: id,
    patient_id,
    doctor_id: 712,
    medication_id: medication?.value,
    delivery_status: 1,
    cost: medication?.cost,
    quantity: prescriptionQuantity,
    hospital_id: 18,
    pay_status: 1,
    prescription_term: prescription?.label,
    user_id: 709,
    batch_no: 1,
    date_of_request: moment(new Date()).format('MM-DD-YYYY'),
    time_of_request: moment(new Date()).format('hh:mm:ss'),
    discharge_drug: 'NO',
    number_of_days: noOfDays,
    hospital_store_id: 1,
    date_dispensed: moment(new Date()).format('MM-DD-YYYY'),
    time_dispensed: moment(new Date()).format('hh:mm:ss'),
    is_exclusion: 'NO',
  };

  useEffect(() => {
    setCategory(medication?.category);
    setMeasuringUnit(medication?.medicationPackaging);
    setCost(medication?.cost);
    if (!quantity) {
      displayToast();
    }
  }, [displayToast, medication, quantity]);

  return (
    <VStack
      h="100vh"
      w="full"
      bgColor="gray.50"
      mt="65px"
      p={3}
    >
      <BreadCrumbNav />
      <Text>
        AddPharmacyRequest
      </Text>
      <HStack
        w="90%"
        spacing={4}
        alignItems="flex-start"
        justifyContent="center"
        bgColor="white"
        boxShadow="lg"
        rounded="2xl"
      >
        <VStack
          w="45%"
          bgColor="white"
          spacing={6}
          p={2}
          rounded="md"
          // boxShadow="md"
          // borderTop="8px"
          // borderTopColor="gray.600"
        >
          <HStack
            w="full"
            // justifyContent="flex-end"
            // bgColor="gray.50"
          >
            <Text
              fontSize="xl"
              color="gray.600"
              fontWeight="bold"
            >
              Medication Details

            </Text>
          </HStack>
          {/* <Divider /> */}
          {/*  */}
          <FormControl>
            <FormLabel
              color="gray.500"
              fontWeight="bold"
            >
              Select Medication Category

            </FormLabel>
            <Select
              styles={selectStyles}
              options={categoryOptions}
              onChange={(val) => setCategory(val)}
            />
          </FormControl>

          {/*  */}
          <FormControl>
            <FormLabel
              fontWeight="bold"
              color="gray.500"
            >
              Select Medication

            </FormLabel>
            <Select
              styles={selectStyles}
              options={medicationOptions}
              onChange={(val) => setMedication(val)}
            />
          </FormControl>

          {/*  */}
          <FormControl>
            <FormLabel
              fontWeight="bold"
              color="gray.500"
            >
              Measuring Unit

            </FormLabel>
            <Input
              size="lg"
              value={measuringUnit}
              onChange={(e) => setMeasuringUnit(e)}
              bgColor="gray.50"
              border={0}
              fontSize="md"
              fontWeight="bold"
              color="gray.700"
            />
          </FormControl>

          {/*  */}
          <FormControl>
            <FormLabel color="gray.500">Price (KSH)</FormLabel>
            <Input
              size="lg"
              type="number"
              value={cost}
              onChange={(e) => setCost(e.target.value)}
              bgColor="gray.50"
              border={0}
              fontSize="md"
              fontWeight="bold"
              color="gray.700"
            />
          </FormControl>

          {/*  */}
          <FormControl>
            <HStack
              alignContent="center"
              color={quantity ? 'gray.500' : 'red.400'}
            >
              <FaExclamationTriangle />
              <FormLabel mt={2}>
                {quantity ? 'Available Quantity' : 'Not In Stock'}
              </FormLabel>

            </HStack>
            {' '}
            <Input
              size="lg"
              type="text"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              bgColor="gray.50"
              border={0}
              fontSize="md"
              fontWeight="bold"
              color="gray.700"

            />
          </FormControl>

        </VStack>

        {/*  */}
        <VStack
          w="45%"
          bgColor="white"
          spacing={6}
          // border="1px"
          // borderColor="blue.200"
          p={2}
          rounded="md"
          // borderTop="8px"
          // borderTopColor="blue.500"
          // boxShadow="md"
        >
          <HStack
            w="full"
            // justifyContent="flex-end"
          >
            <Text
              fontSize="xl"
              color="gray.700"
              fontWeight="bold"
            >
              Prescription Details

            </Text>
          </HStack>

          {/*  */}
          <FormControl>
            <FormLabel>Select Prescription</FormLabel>
            <Select
              styles={selectStyles}
              options={prescriptionOptions}
              onChange={(val) => setPrescription(val)}

            />
          </FormControl>

          {/*  */}
          <FormControl>
            <FormLabel>Number of Days</FormLabel>
            <Input
              size="lg"
              value={noOfDays}
              onChange={(e) => setNoOfDays(e.target.value)}
            />
          </FormControl>

          {/*  */}
          <FormControl>
            <FormLabel>Instruction</FormLabel>
            <Textarea />
          </FormControl>

          {/*  */}
          <FormControl>
            <FormLabel>Quantity</FormLabel>
            <Input
              size="lg"
              value={prescriptionQuantity}
              onChange={(e) => setPrescriptionQuantity(e.target.value)}
            />
          </FormControl>
          <HStack w="full" justifyContent="flex-end">
            <Button
              bgColor="blue.500"
              color="white"
              onClick={() => addInternalPharmacyRequest(inputValues)}
            >
              {isLoading ? 'loading...' : 'Save'}

            </Button>
          </HStack>
        </VStack>
      </HStack>

    </VStack>
  );
};

export default AddPharmacyRequest;
