/* eslint-disable no-unused-vars */

import {
  Button,
  FormControl,
  FormLabel,
  HStack, IconButton, Input, Text, VStack,
} from '@chakra-ui/react';
import Select from 'react-select';
import { useCallback, useEffect, useState } from 'react';
import moment from 'moment/moment';
import { useParams, useSearchParams } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';
import BreadCrumbNav from '../../components/BreadCrumbNav';
import { useGetProceduresQuery } from '../../_Doctor/api/procedureDetails.api';
import { useAddPersonalAccountChargeMutation } from '../../api/personalAccountCharges.api';
import { useAddInternalLabRequestMutation } from '../../api/internalLabRequests.api';

const selectStyles = {
  control: (provided, state) => ({
    ...provided,
    minHeight: '43px',
    height: '43px',
    backgroundColor: '#F7FAFC',
    border: 0,
    fontSize: '14px',
    // fontWeight: 'bold',
  }),
  input: (provided) => ({
    ...provided,
  }),
};

const AddLabRequest = () => {
  const [cost, setCost] = useState(0);
  const [quantity, setQuantity] = useState(0);
  const [procedureName, setProcedureName] = useState();
  const [urgency, setUrgency] = useState('');
  const { id } = useParams();
  const [searchParams] = useSearchParams();
  const [procedure, setProcedure] = useState({
    cost: 0, value: '1', label: '',
  });
  const [addInternalLabRequest,
    { isLoading }] = useAddInternalLabRequestMutation();

  const [addPersonalAccountCharge,
    { isLoading: isLoadingCharges }] = useAddPersonalAccountChargeMutation();

  const { data: procedureData } = useGetProceduresQuery();

  const patientID = searchParams.get('patient_id');

  const procedureCallback = useCallback(() => procedureData?.map((item) => (
    { value: item.procedure_id, label: item.procedure_name, cost: item.procedure_cost }
  )), [procedureData]);

  const procedureOptions = procedureCallback();

  useEffect(() => {
    setCost(procedure.cost);
    setProcedureName(procedure.value);
  }, [procedure.cost, procedure.value]);

  const inputValues = {
    appointment_id: id,
    cost,
    doctor: 683,
    procedure_id: procedureName,
    user_id: 671,
    date_of_request: moment(new Date()).format('MM-DD-YYYY'),
    time_of_request: moment(new Date()).format('hh:mm:ss'),
    status: 1,
    patient_id: patientID,
    hospital_id: 18,
    quantity,
    results_posting_locked: 'NO',
    notes: '',
    urgent: urgency === 'URGENT' ? 'YES' : 'NO',
  };

  const chargesInputValues = {
    amount: cost,
    service_desc: procedure?.label,
    // amount: procedure.procedure_cost,
    date_of_charge: moment(new Date()).format('MM-DD-YYYY'),
    time_of_charge: moment(new Date()).format('hh:mm:ss'),
    status: 1,
    patient_id: patientID,
    hospital_id: 18,
    quantity,
    appointment_id: id,
  };

  const urgencyOptions = [
    { value: 1, label: 'ROUTINE' },
    { value: 2, label: 'URGENT' },
  ];

  const handleSubmit = () => {
    addInternalLabRequest(inputValues);
    addPersonalAccountCharge(chargesInputValues);
  };

  return (
    <VStack
      w="full"
      h="100vh"
      mt="65px"
      p={3}
    >
      <BreadCrumbNav addBtn={false} />

      <VStack
        w="2xl"
        rounded="xl"
        p={4}
        alignItems="flex-start"
        bgColor="white"
        spacing={6}
                // boxShadow="lg"
        border="2px"
        borderStyle="dashed"
        borderColor="gray.200"
      >
        <HStack
          w="full"
          alignItems="center"
          justifyContent="space-between"
        >
          <IconButton
            size="sm"
          >
            <FaArrowLeft />
          </IconButton>
          <Text
            fontSize="16px"
            fontWeight="bold"
            color="gray.700"
          >
            New Lab Test

          </Text>
        </HStack>
        <FormControl>
          <FormLabel
            fontSize="14px"
            fontWeight="bold"
            color="gray.500"
          >
            Select/Search Lab Test

          </FormLabel>
          <Select
            // styles={selectStyles}
            value={procedure}
            options={procedureOptions}
            onChange={(val) => setProcedure(val)}
          />

        </FormControl>

        {/*  */}
        <FormControl>
          <FormLabel
            fontSize="14px"
            fontWeight="bold"
            color="gray.500"
          >
            Select Urgency

          </FormLabel>
          <Select
            // styles={selectStyles}
            value={urgency}
            options={urgencyOptions}
            onChange={(val) => setUrgency(val)}
          />

        </FormControl>

        <FormControl>
          <FormLabel
            fontSize="14px"
            fontWeight="bold"
            color="gray.500"
          >
            Cost

          </FormLabel>
          <Input
            // size="lg"
            bgColor="gray.50"
            border={0}
            value={cost}
            onChange={(e) => setCost(e.target.value)}
          />
        </FormControl>

        {/*  */}
        <FormControl>
          <FormLabel
            fontSize="14px"
            fontWeight="bold"
            color="gray.500"
          >
            Quantity

          </FormLabel>
          <Input
            // size="lg"
            bgColor="gray.50"
            border={0}
            value={quantity}
            type="number"
            onChange={(e) => setQuantity(e.target.value)}
          />
        </FormControl>
        <HStack
          w="full"
          justifyContent="flex-end"
        >
          <Button
            colorScheme="blue"
            size="sm"
            onClick={() => handleSubmit(inputValues)}
          >
            {isLoading ? 'loading...' : 'Save'}

          </Button>

        </HStack>
      </VStack>

    </VStack>
  );
};

export default AddLabRequest;
