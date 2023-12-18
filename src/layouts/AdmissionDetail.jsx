/* eslint-disable no-unused-vars */
import {
  Avatar, Box, Divider, HStack, IconButton, Text, VStack,
} from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useEffect } from 'react';
import { FaEdit } from 'react-icons/fa';
import moment from 'moment/moment';
import { getPatientDetail } from '../_reducers/patientSlice';
import { getAdmissionDetail } from '../_reducers/admissionSlice';

const AdmissionDetail = () => {
  const { id } = useParams();
  const { data, loading } = useSelector((state) => state.admission);
  const patientData = useSelector((state) => state.patients.data);

  const dispatch = useDispatch();

  const getPatientInfo = useCallback((patientId) => {
    if (patientId) {
      dispatch(getPatientDetail(patientId));
    }
  }, [dispatch]);

  useEffect(() => {
    dispatch(getAdmissionDetail(id));
  }, []);

  const date = `${data.day_of_birth}/${data.month_of_birth}/${data.dob}`;
  console.log(data);
  console.log(getPatientInfo(data?.patientId));
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
            >

              <Box
                bgColor="white"
                rounded="3xl"
                // w="350px"
                border="1px"
                borderColor="gray.200"
              >
                <HStack
                  w="full"
                  justifyContent="space-between"
                >
                  <Avatar
                    name={`${data.first_name} ${data.last_name}`}
                    // size="lg"
                    boxShadow="lg"
                  />
                  <IconButton
                    size="lg"
                    rounded="full"
                    boxShadow="sm"
                  >
                    <FaEdit color="gray" />
                  </IconButton>
                </HStack>

                <VStack
                  p={3}
                  w="full"
                  alignItems="flex-start"
                  ml={8}
                  mr={8}
                >
                  <HStack
                    alignItems="center"
                    justifyItems="center"
                  >
                    <Text fontSize="lg" color="gray.500">Patient Name: </Text>
                    <HStack
                      fontWeight="bold"
                      color="gray.500"
                      fontSize="xl"
                      textDecoration="underline"
                    >
                      <Text>{data.first_name}</Text>
                      <Text>{data.middle_name}</Text>
                      <Text>{data.last_name}</Text>
                    </HStack>
                  </HStack>

                  <HStack>
                    <Text fontSize="lg" color="gray.500">DOB:</Text>
                    <Text>
                      {moment(new Date(date)).format('LL')}
                    </Text>

                  </HStack>
                  <HStack>
                    <Text
                      fontSize="lg"
                      color="gray.500"
                    >
                      Gender
                    </Text>
                    <Text>{data.patient_gender === '0' ? 'Female' : 'Male'}</Text>

                  </HStack>
                  <HStack>
                    <Text>ID No.</Text>
                    <Text>{data.id_number}</Text>
                  </HStack>
                  <HStack>
                    <Text>Phone No.</Text>
                    <Text>{data.cell_phone}</Text>

                  </HStack>
                  <Text>{data?.email}</Text>

                </VStack>
                <Divider />

                {/*  */}
              </Box>
              <Box
                w="350px"
                bgColor="white"
              >
                <Text>Hospital Details</Text>
                <Text>
                  REGISTERED:
                  {data.existing_patient}
                </Text>
                <Text>
                  HOSPITAL ID:
                  {data.hospital_id}
                </Text>
                <Text>
                  Patient Category:
                  {data.patient_category_id}
                </Text>
                <Text>
                  Out/In patient file:
                  {' '}
                  {data.out_patient_file_no}
                </Text>

              </Box>
            </HStack>
          )}
      </Box>

    </VStack>
  );
};

export default AdmissionDetail;
