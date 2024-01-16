/* eslint-disable camelcase */
/* eslint-disable no-unused-vars */
/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable react/prop-types */
import {
  Avatar,
  Box,
  Button, FormControl, FormLabel, HStack,
  Tab, TabList, TabPanel, TabPanels, Tabs, Text, Textarea, VStack,
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

const Doctor = () => {
  const { id } = useParams();
  const [searchParams] = useSearchParams();

  const { data, isLoading } = useGetAppointmentQuery(id);
  const navigate = useNavigate();

  const patient_id = searchParams.get('patient_id');
  const { data: pharmacyRequestData } = useGetInternalPharmacyRequestQuery(patient_id);
  console.log(data, 'df');

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
        <Tabs isFitted bgColor="white">
          <TabList color="gray.500">
            <Tab fontWeight="semibold">Allergies</Tab>
            <Tab fontWeight="semibold">Diagnosis</Tab>
            <Tab fontWeight="semibold">Radiology</Tab>
            <Tab fontWeight="semibold">Vital Signs</Tab>
            <Tab fontWeight="semibold">Procedures</Tab>
            <Tab fontWeight="semibold">Lab Requests</Tab>
            <Tab fontWeight="semibold">Pharmacy Requests</Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <FormControl>
                <FormLabel>Allergies</FormLabel>
                <Textarea cols={5} placeholder="Enter allergy" />
              </FormControl>
              <HStack
                w="full"
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
                {pharmacyRequestData?.map((item) => (

                  <HStack
                    border="1px"
                    borderColor="gray.200"
                    rounded="xl"
                    w="xl"
                    key={nanoid()}
                  >
                    <Text>Asprin</Text>
                  </HStack>
                ))}

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
