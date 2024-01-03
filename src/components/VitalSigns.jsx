/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/prop-types */
import { useParams } from 'react-router-dom';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Text, VStack, Tag, HStack,
} from '@chakra-ui/react';
import { useGetAppointmentQuery } from '../api/appointments.api';

/* eslint-disable no-unused-vars */
const VitalSigns = () => {
  const { id } = useParams();
  const { data } = useGetAppointmentQuery(id);

  return (
    <VStack w="full" alignItems="flex-start">
      <HStack p={5}>
        <Text fontWeight="semibold" fontSize="xl">Patient Vitals</Text>

      </HStack>
      <TableContainer
        border="1px"
        rounded="lg"
        borderColor="gray.200"
        p={2}
      >
        <Table variant="simple">
          <Thead>
            <Tr>
              <Th fontSize="normal">Vital Sign</Th>
              <Th fontSize="normal">UNIT</Th>
              <Th fontSize="normal">Normal Values</Th>
              <Th fontSize="normal">Value</Th>
              <Th fontSize="normal">Flags</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>Temperature</Td>
              <Td>°C</Td>
              <Td>35.5-37.5</Td>
              <Td>{data?.temperature}</Td>
              <Td>
                {data?.temperature > 37.5 || data?.temperature < 35.5
                  ? <Tag colorScheme="red">NOT NORMAL</Tag> : <Tag colorScheme="green">NORMAL</Tag>}

              </Td>

            </Tr>

            {/* pulse */}
            <Tr>
              <Td>Pulse Rate</Td>
              <Td>Beats/min</Td>
              <Td>60 - 90</Td>
              <Td>{data?.pulse_rate}</Td>
              <Td>
                {data?.pulse_rate > 90 || data?.pulse_rate < 60
                  ? <Tag colorScheme="red">NOT NORMAL</Tag> : <Tag colorScheme="green">NORMAL</Tag>}

              </Td>

            </Tr>

            {/* resp */}
            <Tr>
              <Td>Pulse Rate</Td>
              <Td>Breath/min</Td>
              <Td>18 - 30</Td>
              <Td>{data?.respiratory_rate}</Td>
              <Td>
                {data?.respiratory_rate > 30 || data?.respiratory_rate < 18
                  ? <Tag colorScheme="red">NOT NORMAL</Tag> : <Tag colorScheme="green">NORMAL</Tag>}

              </Td>

            </Tr>

            {/* systolic */}
            <Tr>
              <Td>Systolic</Td>
              <Td>mmHg</Td>
              <Td>90 - 140</Td>
              <Td>{data?.systolic}</Td>
              <Td>
                {data?.systolic > 140 || data?.systolic < 90
                  ? <Tag colorScheme="red">NOT NORMAL</Tag> : <Tag colorScheme="green">NORMAL</Tag>}

              </Td>
            </Tr>

            {/* diastolic */}
            <Tr>
              <Td>Diastolic</Td>
              <Td>mmHg</Td>
              <Td>50 - 90</Td>
              <Td>{data?.diastolic}</Td>
              <Td>
                {data?.diastolic > 90 || data?.diastolic < 50
                  ? <Tag colorScheme="red">NOT NORMAL</Tag> : <Tag colorScheme="green">NORMAL</Tag>}

              </Td>
            </Tr>

            {/* weight */}
            <Tr>
              <Td>Weight</Td>
              <Td>Kilograms</Td>
              <Td>0 - 100</Td>
              <Td>{data?.weight}</Td>
              <Td>
                {data?.weight > 100 || data?.weight < 0
                  ? <Tag colorScheme="red">NOT NORMAL</Tag> : <Tag colorScheme="green">NORMAL</Tag>}

              </Td>
            </Tr>

            {/* height */}
            <Tr>
              <Td>Height</Td>
              <Td>Metres</Td>
              <Td>0 - 2</Td>
              <Td>{data?.diastolic}</Td>
            </Tr>

            {/* bmi */}
            <Tr>
              <Td>Body Mass Index</Td>
              <Td>kg/m²</Td>
              <Td>18.5 - 25</Td>
              <Td>{data?.bmi}</Td>
              <Td>
                {data?.bmi > 18.5 || data?.bmi < 25
                  ? <Tag colorScheme="red">NOT NORMAL</Tag> : <Tag colorScheme="green">NORMAL</Tag>}

              </Td>
            </Tr>

            {/* sp02 */}
            <Tr>
              <Td>sp02</Td>
              <Td>%</Td>
              <Td>85 - 100</Td>
              <Td>{data?.sp02}</Td>
              <Td>
                {data?.sp02 > 100 || data?.sp02 < 85
                  ? <Tag colorScheme="red">NOT NORMAL</Tag> : <Tag colorScheme="green">NORMAL</Tag>}

              </Td>
            </Tr>

          </Tbody>
        </Table>
      </TableContainer>
    </VStack>
  );
};

export default VitalSigns;
