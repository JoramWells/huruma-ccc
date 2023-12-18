/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import {
  Avatar, Box, Divider, HStack, IconButton, Text, VStack,
} from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { FaEdit } from 'react-icons/fa';
import moment from 'moment/moment';
import { getPatientDetail } from '../_reducers/patientSlice';

const HorizontalStack = ({ title, text }) => (
  <HStack
    w="full"
    _hover={{
      cursor: 'pointer',
      bgColor: 'gray.50',
      border: '1px',
      rounded: 'lg',
      borderColor: 'gray.100',
    }}
    p={4}
    justifyContent="space-between"
  >
    <Text
      color="gray.500"
      fontSize="xl"
    >
      {title}

    </Text>
    <Text
      fontSize="xl"
      fontWeight="semibold"
    >
      {text}
    </Text>
  </HStack>
);

const PatientDetail = () => {
  const { id } = useParams();
  const { data, loading } = useSelector((state) => state.patients);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPatientDetail(id));
  }, []);

  const date = `${data.day_of_birth}/${data.month_of_birth}/${data.dob}`;
  console.log(data);

  return (
    <VStack
      h="100vh"
      w="full"
      mt="55px"
      bgColor="gray.100"
      alignItems="center"
      // justifyContent="center"
      p={3}
    >
      <Box w="full">
        {loading ? <Text>loading...</Text>
          : (
            <HStack
              w="full"
              p={3}
              flexWrap="wrap"
              alignItems="flex-start"
            >

              <Box
                bgColor="white"
                rounded="3xl"
                w="full"
                // flex={1}
                border="1px"
                borderColor="gray.200"
                // boxShadow="lg"
              >
                <HStack
                  w="full"
                  justifyContent="space-between"
                  alignItems="center"
                  p={3}
                >

                  <Text fontSize="2xl" fontWeight="bold">
                    Personal Details
                  </Text>

                  <IconButton
                    size="lg"
                    rounded="full"
                    // boxShadow="sm"
                  >
                    <FaEdit color="gray" />
                  </IconButton>
                </HStack>
                <HorizontalStack title="Patient Name" text={data.first_name + data.last_name} />
                <HorizontalStack title="DOB" text={moment(new Date(date)).format('LL')} />
                <HorizontalStack title="Gender" text={data.patient_gender === '0' ? 'Female' : 'Male'} />
                <HorizontalStack title="ID no" text={data.id_number} />
                <HorizontalStack title="Phone no" text={data.cell_phone} />

                <Divider />

                {/*  */}
              </Box>
              <Box
                // w="full"
                bgColor="white"
                rounded="3xl"
                flex={1}

              >
                <HStack p={3}>
                  <Text fontSize="2xl" fontWeight="bold">Hospital Details</Text>

                </HStack>
                <Divider />
                <HorizontalStack title="Registered:" text={data.existing_patient} />

                <HorizontalStack title="Hospital ID:" text={data.hospital_id} />
                <HorizontalStack title="Patient Category" text={data.patient_category_id} />
                <HorizontalStack title=" Out/In patient file:" text={data.out_patient_file_no} />
                <HorizontalStack title="Membership enabled" text={data.membership_enabled} />

              </Box>

              {/* payment details */}
              <Box
                flex={1}
                bgColor="white"
                rounded="3xl"

              >
                <HStack p={3}>
                  <Text fontSize="2xl" fontWeight="bold">Payment Details</Text>

                </HStack>
                <Divider />
                <HorizontalStack title="Copay Account" text={data.copay_payment_account_id} />

                <HorizontalStack title="Insurance Membership Number" text={data.insurance_membership_number} />
                <HorizontalStack title="Patient Category" text={data.patient_category_id} />

              </Box>

            </HStack>
          )}
      </Box>

    </VStack>
  );
};

export default PatientDetail;
