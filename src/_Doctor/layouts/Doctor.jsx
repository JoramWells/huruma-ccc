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
import { useGetPatientQuery } from '../../api/patients.api';
import BreadCrumbNav from '../../components/BreadCrumbNav';
import TableSelectRow from '../components/TableSelectRow';
import VitalSigns from '../components/VitalSigns';
import ProceduresTab from '../components/ProceduresTab';
import DiagnosisTab from '../components/DiagnosisTab';
import PharmacyTab from '../components/PharmacyTab';
import { useGetAppointmentQuery } from '../../api/appointments.api';
import { useGetInternalPharmacyRequestQuery } from '../../_Pharmacy/api/internalPharmacyRequest.api';

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

              <ProceduresTab />
              {/*  */}
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
            <TabPanel>

              <HStack
                w="full"
                justifyContent="flex-end"
              >
                <Box
                  bgColor="blue.500"
                  p={1}
                  rounded="full"
                >
                  <Button
                    bgColor="blue.500"
                    color="white"
                    border="2px"
                    borderColor="white"
                    _hover={{
                      bgColor: 'blue.500',
                    }}
                    rounded="full"
                    onClick={() => navigate({
                      pathname: `/add-pharmacy-request/${id}`,
                      search: `?patient_id=${data?.patient_id}`,
                    })}
                  >
                    New Request

                  </Button>
                </Box>
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
                      <HStack
                        border="1px"
                        borderColor="gray.200"
                        rounded="xl"
                        w="2xl"
                        key={nanoid()}
                        p={3}
                      >
                        <VStack alignItems="flex-start" w="full">
                          <Accordion
                            allowToggle
                            w="100%"
                          >
                            <AccordionItem
                              border={0}
                            >
                              <AccordionButton justifyContent="space-between">
                                <Text
                                  fontWeight="bold"
                                  color="gray.600"
                                >
                                  {item.medication?.medication_name}

                                </Text>
                                <AccordionIcon />
                              </AccordionButton>

                              <AccordionPanel>
                                <HStack
                                  w="full"
                                  justifyContent="space-between"
                                >
                                  <Text color="gray.500">Quantity</Text>
                                  <Text>{item.quantity}</Text>

                                </HStack>

                                {/* term */}
                                <HStack
                                  w="full"
                                  justifyContent="space-between"
                                  mt={1}
                                >
                                  <Text color="gray.500">Prescription Term</Text>
                                  <Text>{item.prescription_term}</Text>

                                </HStack>

                                {/* days */}
                                <HStack
                                  w="full"
                                  justifyContent="space-between"
                                  mt={1}
                                >
                                  <Text color="gray.500">No. of days</Text>
                                  <Text>{item.number_of_days}</Text>

                                </HStack>
                              </AccordionPanel>
                            </AccordionItem>

                          </Accordion>
                          <VStack
                            alignItems="flex-start"
                            pl={4}
                            w="full"
                            pr={4}
                          >

                            <HStack
                              w="full"
                              justifyContent="space-between"
                            >
                              <Text
                                color="gray.500"
                                fontWeight="bold"
                              >
                                Cost
                                {' '}
                              </Text>
                              <Text
                                fontSize="lg"
                                fontWeight="bold"
                                color="gray.600"
                              >
                                KSH
                                {' '}
                                {item.cost}
                                {' '}
                                /=

                              </Text>
                            </HStack>

                            <HStack
                              w="full"
                              justifyContent="space-between"
                            >
                              <Text
                                color="gray.500"
                                fontWeight="bold"
                              >
                                Discharged
                                {' '}
                              </Text>
                              {item.discharge_drug === 'YES'
                                ? (
                                  <Tag
                                    colorScheme="green"
                                  >
                                    YES
                                  </Tag>
                                ) : (
                                  <Tag
                                    colorScheme="red"
                                  >
                                    NO
                                  </Tag>
                                )}
                            </HStack>

                            <HStack w="full" justifyContent="space-between">
                              <Text
                                color="gray.500"
                                fontWeight="bold"
                              >
                                Paid
                              </Text>

                              {item.pay_status === 1 ? (
                                <Tag
                                  colorScheme="green"
                                >
                                  PAID
                                </Tag>
                              ) : (
                                <Tag
                                  colorScheme="red"
                                >
                                  UNPAID
                                </Tag>
                              )}
                            </HStack>
                          </VStack>
                        </VStack>
                      </HStack>
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
