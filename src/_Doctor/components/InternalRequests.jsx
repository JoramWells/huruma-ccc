import {
  Button, FormControl, FormLabel, HStack, Tab, TabList, TabPanel, TabPanels, Tabs, Text, VStack,
} from '@chakra-ui/react';
import React from 'react';
import { FaPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import DiagnosisTab from './DiagnosisTab';
import VitalSigns from './VitalSigns';
import ProceduresTab from './ProceduresTab';
import PharmacyRequestsCard from './PharmacyRequestsCard';

const InternalRequests = () => {
  const navigate = useNavigate();
  const data = [];
  return (
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
  );
};

export default InternalRequests;