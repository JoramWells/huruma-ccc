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
  useParams,
} from 'react-router-dom';

import { nanoid } from '@reduxjs/toolkit';
import moment from 'moment/moment';
import { useGetPatientQuery } from '../api/patients.api';
import BreadCrumbNav from '../components/BreadCrumbNav';
import TableSelectRow from '../components/tables/TableSelectRow';
import UserNameAvatar from '../components/UserNameAvatar';
import VitalSigns from '../components/VitalSigns';

const Doctor = () => {
  const { id } = useParams();

  const { data, isLoading } = useGetPatientQuery(id);

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

  console.log(data);
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

        <HStack p={4}>
          <Avatar
            name={`${data?.first_name} ${data?.last_name}`}
            size="xl"
          />
          <VStack
            justifyContent="flex-start"
            alignItems="flex-start"
            mt={5}
            mb={5}
          >
            <Text fontSize="2xl" fontWeight="semibold">
              {data?.first_name}
              {' '}
              {data?.middle_name}
              {' '}
              {data?.last_name}
            </Text>
            <Text fontSize="lg" color="gray.500">
              {moment().diff(data?.dob, 'years')}
              {' '}
              years
            </Text>
          </VStack>

        </HStack>
        <Tabs isFitted>
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
            <TabPanel>
              <Text>Diagnosis</Text>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
            <TabPanel>
              <VitalSigns />
            </TabPanel>
            <TabPanel>
              <HStack w="full" p={2}>
                <Text fontSize="xl" fontWeight="semibold">Procedures</Text>

              </HStack>
              <TableSelectRow />
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>

    </VStack>
  );
};

export default Doctor;
