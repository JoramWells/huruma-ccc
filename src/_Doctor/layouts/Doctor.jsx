/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable react/prop-types */
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Avatar,
  Box,
  Button, FormControl, FormLabel, HStack,
  Tab, TabList, TabPanel, TabPanels, Tabs, Tag, Text, Textarea, VStack,
} from '@chakra-ui/react';
import {
  useNavigate,
  useParams,
  useSearchParams,
} from 'react-router-dom';

import { nanoid } from '@reduxjs/toolkit';
import moment from 'moment/moment';
import { FaPlus } from 'react-icons/fa';
import { useGetPatientQuery } from '../../api/patients.api';
import BreadCrumbNav from '../../components/BreadCrumbNav';
import TableSelectRow from '../components/TableSelectRow';
import VitalSigns from '../components/VitalSigns';
import ProceduresTab from '../components/ProceduresTab';
import DiagnosisTab from '../components/DiagnosisTab';
import PharmacyTab from '../components/PharmacyTab';
import { useGetAppointmentQuery } from '../../api/appointments.api';
import { useGetInternalPharmacyRequestQuery } from '../../_Pharmacy/api/internalPharmacyRequest.api';
import PharmacyRequestsCard from '../components/PharmacyRequestsCard';

const tabList = [
  { id: nanoid(), text: 'Allergies' },
  { id: nanoid(), text: 'Diagnosis' },
  { id: nanoid(), text: 'Radiology' },
  { id: nanoid(), text: 'Vital Signs' },
  { id: nanoid(), text: 'Procedures' },
  { id: nanoid(), text: 'Lab Requests' },
  { id: nanoid(), text: 'Pharmacy Requests' },

];
const Doctor = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();

  const { data, isLoading } = useGetAppointmentQuery(id);
  const navigate = useNavigate();

  const patient_id = searchParams.get('patient_id');
  const { data: pharmacyRequestData } = useGetInternalPharmacyRequestQuery(patient_id);
  console.log(pharmacyRequestData, 'df');

  const breadCrumbData = [
    {
      id: nanoid(),
      title: 'Patients',
      link: '/patients',
    },
    {
      id: nanoid(),
      title: `${data?.first_name} ${data?.last_name}`,
      link: '/',
      isCurrentPage: true,
    },
  ];

  return (
    <VStack
      h="100vh"
      w="full"
      mt="65px"
      bgColor="gray.50"
      alignItems="center"
      // justifyContent="center"
      p={3}
    >
      <BreadCrumbNav addBtn={false} breadCrumbData={breadCrumbData} />

      <Box w="full">

        <HStack
          p={4}
          bgColor="white"
        >
          <Avatar
            name={`${data?.patient?.first_name} ${data?.patient?.last_name}`}
            size="xl"
          />
          <VStack
            justifyContent="flex-start"
            alignItems="flex-start"
            mt={5}
            mb={5}
          >
            <Text fontSize="2xl" fontWeight="semibold">
              {data?.patient?.first_name}
              {' '}
              {data?.patient?.middle_name}
              {' '}
              {data?.patient?.last_name}
            </Text>
            <Text fontSize="lg" color="gray.500">
              {moment().diff(data?.patient?.dob, 'years')}
              {' '}
              years
            </Text>
          </VStack>

        </HStack>
        <Tabs
          // isFitted
          bgColor="white"
          variant="unstyled"
          alignItems="flex-start"
        >
          <TabList
            color="gray.500"
            p={3}
          >
            {tabList.map((item) => (
              <Tab
                key={item.id}
                fontWeight="semibold"
                rounded="full"
                bgColor="gray.50"
                m={1}
                fontSize="sm"
                _selected={{
                  // bgGradient: 'linear(to-r,blue.500, blue.400)',
                  // color: 'white',
                  border: '2px',
                  color: 'white',
                  bgColor: 'gray.700',
                }}
              >
                {item.text}

              </Tab>

            ))}

          </TabList>

          <TabPanels>
            <TabPanel>
              <FormControl>
                <VStack>
                  <HStack
                    w="lg"
                  >
                    <FormLabel>Allergies</FormLabel>

                  </HStack>
                  <HStack
                    w="lg"
                    border="1px"
                    p={4}
                    rounded="xl"
                    boxShadow="xl"
                  >
                    <Text
                      fontWeight="bold"
                      color="gray.600"
                    >
                      Patient Allergies 1

                    </Text>
                  </HStack>

                  {/*  */}
                  <HStack
                    w="lg"
                    border="1px"
                    p={4}
                    rounded="xl"
                    boxShadow="xl"
                  >
                    <Text
                      fontWeight="bold"
                      color="gray.600"
                    >
                      Patient Allergies 2

                    </Text>
                  </HStack>
                </VStack>
              </FormControl>
              <HStack
                w="90"
                justifyContent="flex-end"
              >
                <Button mt={4}>Save Allergy</Button>

              </HStack>
            </TabPanel>

            {/* diagnosis */}
            <TabPanel>
              <DiagnosisTab />
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
            <TabPanel>
              <VitalSigns data={data} />
            </TabPanel>
            <TabPanel bgColor="white">

              {/* Procedure Header */}
              <HStack
                w="full"
                alignItems="center"
                justifyContent="space-between"
              >

                <Text
                  fontSize="xl"
                  color="gray.700"
                >
                  Patient Procedures

                </Text>
                <Button
                  colorScheme="blue"
                  leftIcon={<FaPlus />}
                  variant="outline"
                  onClick={() => navigate(`/add-patient-procedure/${id}`)}
                >
                  Add New

                </Button>
              </HStack>

              <ProceduresTab />
              {/*  */}
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
            <TabPanel>

              <HStack
                w="full"
                justifyContent="space-between"
                alignItems="center"
                color="gray.700"
              >
                <Text
                  fontSize="xl"
                >
                  Pharmacy Requests
                </Text>

                <Button
                  colorScheme="blue"
                  color="white"
                  border="2px"
                  borderColor="white"
                  _hover={{
                    bgColor: 'blue.500',
                  }}
                  leftIcon={<FaPlus />}
                  rounded="lg"
                  onClick={() => navigate({
                    pathname: `/add-pharmacy-request/${id}`,
                    search: `?patient_id=${data?.patient_id}`,
                  })}
                >
                  Add New

                </Button>
              </HStack>

              <VStack
                justifyContent="center"
                alignItems="center"

              >
                {pharmacyRequestData?.length > 0 ? (
                  <>
                    <HStack
                      width="2xl"
                      alignItems="flex-start"
                      // bgColor="red"
                    >
                      <Text
                        fontWeight="bold"
                      >
                        Recent Pharmacy Request

                      </Text>
                    </HStack>
                    {pharmacyRequestData?.map((item) => (
                      <PharmacyRequestsCard
                        item={item}
                        key={item.id}
                      />
                    ))}
                  </>
                )
                  : (
                    <VStack>
                      <Text>No Recent Pharmacy Requests</Text>
                    </VStack>
                  )}

              </VStack>

              {/* pharmacy */}
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>

    </VStack>
  );
};

export default Doctor;
