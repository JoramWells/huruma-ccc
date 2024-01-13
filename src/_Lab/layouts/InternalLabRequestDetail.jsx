/* eslint-disable no-unused-vars */
import { useParams } from 'react-router-dom';
import {
  HStack, Text, VStack, Avatar, Tag,
  IconButton, Divider, Menu, MenuButton, MenuList, MenuItem, Button,
} from '@chakra-ui/react';
import moment from 'moment/moment';
import {
  FaCalendarCheck, FaCalendarWeek, FaEllipsisH, FaMoneyCheckAlt, FaProcedures, FaTemperatureHigh,
} from 'react-icons/fa';
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
      <HStack w="full" spacing={4}>
        <VStack
          w="md"
          bgColor="white"
          h="350px"
          border="1px"
          borderColor="gray.200"
          rounded="xl"
          p={3}
        >
          <Avatar
            size="lg"
            name={`${data?.patient_detail?.first_name} ${data?.patient_detail?.middle_name}`}
          />
          <Text mt={2}>
            {data?.patient_detail?.first_name}
            {' '}
            {data?.patient_detail?.middle_name}
          </Text>
        </VStack>

        {/* Appointment */}
        <VStack
          bgColor="white"
          height="350px"
          w="md"
          border="1px"
          borderColor="gray.200"
          rounded="2xl"
          alignItems="flex-start"
          spacing={8}
        >
          <HStack
            bgColor="gray.50"
            w="full"
            roundedTop="xl"
            p={2}
          >
            <FaCalendarWeek />
            <Text
              fontSize="xl"
              fontWeight="bold"
              w="full"
            >
              Appointment Details

            </Text>

            <Menu>
              <MenuButton
                as={IconButton}
                rightIcon={<FaEllipsisH color="gray" />}
                variant="outline"
                alignItems="center"
                pr={3}
              />
              <MenuList>
                <MenuItem>Reschedule</MenuItem>
                <MenuItem>View More</MenuItem>
                <MenuItem>Delete</MenuItem>
              </MenuList>
            </Menu>

          </HStack>
          <HStack
            alignItems="flex-start"
            spacing={6}
            ml={5}
          >
            <Avatar name={data?.user?.full_name} rounded="xl" />
            <VStack alignItems="flex-start" spacing={0}>
              <Text
                fontWeight="bold"
                color="gray.700"
              >
                {data?.user?.full_name}
                {' '}
                ~ Doctor

              </Text>
              <HStack>
                <Text color="gray.500">Status</Text>
                {data?.user?.status === 1 ? <Tag colorScheme="orange">Active</Tag> : <Tag>inactive</Tag>}
              </HStack>
            </VStack>
          </HStack>
          <HStack alignItems="flex-start" spacing={6} ml={5}>
            <IconButton
              colorScheme="purple"
              size="lg"
              rounded="xl"
            >
              <FaCalendarCheck />
            </IconButton>
            <VStack alignItems="flex-start" spacing={1}>
              <Text>
                Date:
                {' '}
                {(moment(data?.appointment?.appointment_date, 'YYYY-MM-Do').format('LL'))}
              </Text>
              <Text color="gray.500">{moment(data?.appointment.appointment_time, 'HH:mm: ss').format('HH:mm a')}</Text>
            </VStack>
          </HStack>

          {/* charges */}
          <HStack
            alignItems="flex-start"
            spacing={6}
            ml={5}
          >
            <IconButton
              colorScheme="orange"
              size="lg"
              rounded="xl"
              // bgColor="indigo.50"
              // color="indigo"
            >
              <FaMoneyCheckAlt />
            </IconButton>
            <VStack alignItems="flex-start" spacing={1}>
              <Text>
                KSH
                {' '}
                {data?.appointment?.charges}
                {' '}
                /=
              </Text>
              <Tag colorScheme="green">CASH</Tag>
            </VStack>
          </HStack>

        </VStack>

        <VStack
          h="350px"
          w="md"
          alignItems="flex-start"
          spacing={2}
        >
          <VStack
            border="1px"
            borderColor="green.200"
            w="md"
            alignItems="flex-start"
            bgColor="white"
            rounded="xl"
            h={175}

          >
            <HStack
              bgColor="green.100"
              roundedTop="xl"
              w="full"
              p={2}
            >
              <FaProcedures color="green" />
              <Text
                fontSize="xl"
                fontWeight="bold"
                color="green.700"
              >
                Procedure Details

              </Text>
            </HStack>
            <HStack ml={5} mt={2}>
              <Text color="gray.500">Procedure Name:</Text>
              <Text>{data?.procedure_detail?.procedure_name}</Text>
            </HStack>
            <HStack ml={5} mt={2}>
              <Text color="gray.500">Procedure Cost:</Text>
              <Text
                fontWeight="bold"
                color="green.500"
              >
                KSH
                {' '}
                {data?.procedure_detail?.procedure_cost}
                {' '}
                /=
              </Text>
            </HStack>
          </VStack>
          {/* lab */}
          <VStack
            border="1px"
            borderColor="orange.200"
            w="md"
            alignItems="flex-start"
            bgColor="white"
            rounded="xl"
            // p={3}
            h={175}

          >
            <HStack
              bgColor="orange.100"
              w="full"
              roundedTop="xl"
              p={2}

            >
              <FaTemperatureHigh color="orange" />
              <Text
                fontSize="xl"
                fontWeight="bold"
                // ml={10}
                color="orange.700"
              >
                Lab Details

              </Text>
            </HStack>
            <HStack ml={6} mt={3}>
              <Text color="gray.500">Results:</Text>
              <Text>{data?.results}</Text>
            </HStack>
            <HStack ml={6} mt={3}>
              <Text color="gray.500">Cost:</Text>
              <Text color="orange.500" fontWeight="bold">
                KSH
                {' '}
                {data?.cost}
                {' '}
                /=
              </Text>
            </HStack>
          </VStack>
        </VStack>
      </HStack>
    </VStack>
  );
};

export default InternalLabRequestDetail;
