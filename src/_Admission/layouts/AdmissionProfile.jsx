/* eslint-disable no-unused-vars */
import {
  HStack, Tab, TabList, TabPanel, TabPanels, Tabs, Text, VStack,
} from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { nanoid } from '@reduxjs/toolkit';
import { useGetAdmissionQuery } from '../../api/admissions.api';

const tabList = [
  { id: nanoid(), text: 'Anaesthetic Records' },
  { id: nanoid(), text: 'Bed Reallocation' },
  { id: nanoid(), text: 'Bills' },
  { id: nanoid(), text: 'History' },
  { id: nanoid(), text: 'Inpatient Core Fee' },
  { id: nanoid(), text: 'Operation Notes' },
  { id: nanoid(), text: 'Requests' },
  { id: nanoid(), text: 'Treatment Chart' },
  { id: nanoid(), text: 'Treatment Record' },
  { id: nanoid(), text: 'NHIF' },
  { id: nanoid(), text: 'Visits' },

];

const AdmissionProfile = () => {
  const { id } = useParams();
  const { data } = useGetAdmissionQuery(id);
  console.log(data);
  return (
    <VStack
      w="full"
      h="100vh"
      mt="65px"
      p={3}
    >
      <Text>Admission</Text>

      <HStack
        w="full"
        bgColor="white"
      >
        <Tabs isFitted>
          <TabList>
            {tabList.map((item) => (
              <Tab key={item.id}>{item.text}</Tab>
            ))}
          </TabList>

          <TabPanels>
            <TabPanel>
              <p>one!</p>
            </TabPanel>
            <TabPanel>
              <p>two!</p>
            </TabPanel>
            <TabPanel>
              <p>three!</p>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </HStack>
    </VStack>
  );
};

export default AdmissionProfile;
