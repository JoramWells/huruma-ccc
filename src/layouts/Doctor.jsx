/* eslint-disable no-unused-vars */
/* eslint-disable no-unsafe-optional-chaining */
/* eslint-disable react/prop-types */
import {
  Box,
  Button, FormControl, FormLabel, HStack,
  Tab, TabList, TabPanel, TabPanels, Tabs, Text, Textarea, VStack,
} from '@chakra-ui/react';
import {
  useParams,
} from 'react-router-dom';

import { nanoid } from '@reduxjs/toolkit';
import { useGetPatientQuery } from '../api/patients.api';
import BreadCrumbNav from '../components/BreadCrumbNav';
import TableSelectRow from '../components/tables/TableSelectRow';

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

  // const date = `${data.day_of_birth}/${data.month_of_birth}/${data.dob}`;

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
      {isLoading ? <Text>loading...</Text> : (
        <HStack
          w="full"
          alignItems="flex-start"
        >

          <Button>Allergies</Button>
        </HStack>
      )}
      <Box w="full">

        <Tabs isFitted>
          <TabList>
            <Tab>Allergies</Tab>
            <Tab>Diagnosis</Tab>
            <Tab>Radiology</Tab>
            <Tab>Vital Signs</Tab>
            <Tab>Procedures</Tab>
            <Tab>Lab Requests</Tab>
            <Tab>Pharmacy Requests</Tab>
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
              <p>Vitals</p>
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
