/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/prop-types */
import {
  Avatar,
  Box, Button, HStack, Tag, Text, VStack,
} from '@chakra-ui/react';
// import axios from "axios"
import { FaFileDownload, FaPrint } from 'react-icons/fa';
import { useMemo } from 'react';
import moment from 'moment/moment';
import { useNavigate } from 'react-router-dom';
import BreadCrumbNav from '../components/BreadCrumbNav';
import DataTable2 from '../components/tables/DataTable';
import { useGetAllMedicationQuery } from '../api/medication.api';

const UserNameAvatar = ({ fullName }) => (
  <HStack>
    <Avatar
      // size="sm"
      name={fullName}
      color="white"
    />
    <Text>{fullName}</Text>
  </HStack>
);

const MedicationCategory = () => {
  const { data } = useGetAllMedicationQuery();

  const navigate = useNavigate();

  const columns = useMemo(
    () => [
      {
        header: 'Medication Name',
        accessorKey: 'medication_name',
        cell: (props) => <Text>{props.getValue().substring(0, 30)}</Text>,
        width: 50,

      },

      {
        header: 'Medication Category',
        accessorKey: 'medication_category',
        enableSorting: false,
        cell: (props) => <Text>{props.getValue()?.category_name}</Text>,

      },
      {
        header: 'Price',
        accessorKey: 'price',
        cell: (props) => <Text>{props.getValue()}</Text>,

      },

      {
        header: 'Corporate Price',
        accessorKey: 'price_corporate',
        cell: (props) => <Text>{props.getValue()}</Text>,
        size: 200,

      },

      {
        header: 'Foreigner Price',
        accessorKey: 'price_foreigner',
        cell: (props) => <Text>{props.getValue()}</Text>,
        size: 200,

      },
      {
        header: 'Quantity',
        accessorKey: 'quantity',
        cell: (props) => <Text>{props.getValue()}</Text>,
        size: 200,

      },
    ],

    [],
  );

  const subRowData = data
    && data.map((item) => ({
      ...item,
      subRows: [],
    }));

  const filteredData = subRowData?.filter((item) => {
    const itemDate = moment(item.appointment_date);
    const todayDate = moment(new Date()).format('YYYY-MM-DD');
    return itemDate.isSame(todayDate, 'day');
  });

  console.log(subRowData);

  return (
    <VStack
      mt="55px"
      w="full"
      bgColor="gray.500"
      p={3}
      h="95vh"
      position="relative"
    >
      <VStack w="full">
        <BreadCrumbNav link="/add-suppliers" />
        <HStack w="full" mt={2} mb={2}>
          <Button>Categories</Button>
          <Button>Groups</Button>
          <Button>Packaging</Button>
        </HStack>

        <HStack
          w="100%"
          justifyContent="space-between"
          bgColor="white"
          p={3}
          rounded="lg"
          // mt={2}
        >
          <Text fontSize="xl" fontWeight="bold">
            Medication
            <span style={{
              fontSize: '18px',
              // fontWeight: 'normal',
              color: 'gray',
            }}
            >
              {' '}
              (
              {filteredData?.length}
              )

            </span>
          </Text>
          <HStack>
            <Button leftIcon={<FaPrint />}>Print Report</Button>

            <Button leftIcon={<FaFileDownload />}>Download</Button>

          </HStack>
        </HStack>
        <VStack
          w="100%"
          bgColor="white"
          p={3}
          h="89%"
          border="1px"
          mt={2}
        >
          <DataTable2 data={filteredData} columns={columns} />
        </VStack>
      </VStack>
    </VStack>
  );
};

export default MedicationCategory;
