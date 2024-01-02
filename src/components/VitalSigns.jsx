import { Text, VStack } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { useGetAppointmentsQuery } from '../api/appointments.api';

/* eslint-disable no-unused-vars */
const VitalSigns = () => {
  const { id } = useParams();
  const { data } = useGetAppointmentsQuery(id);
  console.log(data, 'hu');
  return (
    <VStack>
      <Text>Vitals!!</Text>
    </VStack>
  );
};

export default VitalSigns;
