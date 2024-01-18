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
import InternalRequests from '../components/InternalRequests';

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
        {/*  */}
        <Tabs
          bgColor="white"
          color="gray.500"
          variant="enclosed"
          // isFitted
        >
          <TabList>
            <Tab>Admissions</Tab>
            <Tab>Appointments</Tab>
            <Tab>Bill Exclusion</Tab>
            <Tab>Internal Requests</Tab>
            <Tab>Procedures</Tab>
            <Tab>Vital Signs</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Text>Admissions</Text>
            </TabPanel>
            <TabPanel>
              <Text>Appointments</Text>
            </TabPanel>
            <TabPanel>
              <Text>Bill Exclusion</Text>
            </TabPanel>
            <TabPanel>
              <InternalRequests />
            </TabPanel>
            <TabPanel>

              {/* Procedure Header */}
              <VStack>
                <HStack
                  w="80%"
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
                    size="sm"
                    onClick={() => navigate({
                      pathname: `/add-patient-procedure/${id}`,
                      search: `?patient_id=${patient_id}`,
                    })}
                  >
                    Add New

                  </Button>
                </HStack>
              </VStack>

              <ProceduresTab />

            </TabPanel>
            <TabPanel>
              <VitalSigns data={data} />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>

    </VStack>
  );
};

export default Doctor;
