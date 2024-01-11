import { useParams } from 'react-router-dom';
import { HStack, Text, VStack } from '@chakra-ui/react';
import moment from 'moment/moment';
import { useGetInternalLabRequestQuery } from '../../api/internalLabRequests.api';
import BreadCrumbNav from '../../components/BreadCrumbNav';

const InternalLabRequestDetail = () => {
  const { id } = useParams();
  const { data } = useGetInternalLabRequestQuery(id);
  console.log(data);
  return (
    <VStack
      w="full"
      bgColor="gray.50"
      alignItems="center"
      justifyContent="center"
      mt="65px"
      p={3}
    >
      <BreadCrumbNav />
      <HStack w="full">
        <VStack
          bgColor="white"
          height="450px"
          w="md"
          border="1px"
          borderColor="gray.200"
          rounded="2xl"
          p={3}
          alignItems="flex-start"
        >
          <Text fontSize="xl">Appointment</Text>
          <Text>
            Date:
            {' '}
            {(moment(data?.appointment?.appointment_date, 'YYYY-MM-Do').format('LL'))}
          </Text>
        </VStack>
      </HStack>
    </VStack>
  );
};

export default InternalLabRequestDetail;
