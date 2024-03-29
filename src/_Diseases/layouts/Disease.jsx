/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable react/prop-types */
import {
  Box, Button, HStack, Text, VStack,
} from '@chakra-ui/react';
// import axios from "axios"
import { FaFileDownload, FaPrint } from 'react-icons/fa';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import BreadCrumbNav from '../../components/BreadCrumbNav';
import DataTable2 from '../../components/tables/DataTable';
import { useGetDiseasesQuery } from '../../api/disease.api';

const Disease = () => {
  const navigate = useNavigate();

  const {
    data, isLoading,
  } = useGetDiseasesQuery();

  // const { data } = useSelector((state) => state.admission);

  const columns = useMemo(
    () => [
      {
        header: 'Disease Name',
        accessorKey: 'disease_name',
        cell: (props) => <Text>{props.getValue()}</Text>,

      },
      {
        header: 'Ministry Disease',
        accessorKey: 'ministry_disease_id',
        enableSorting: false,
        cell: (props) => <Text>{props.getValue()}</Text>,
      },
      {
        header: 'ICD ten Code',
        accessorKey: 'disease_icd_ten_code',
        enableSorting: false,
        cell: (props) => <Text>{props.getValue()}</Text>,

      },
    ],

    [navigate],
  );

  const subRowData = data
    && data.map((item) => ({
      ...item,
      subRows: [],
    }));

  if (isLoading) return <div>loading..</div>;

  return (
    <VStack
      mt="65px"
      w="full"
      bgColor="gray.50"
      p={3}
      h="95vh"
      position="relative"
    >
      <Box bgColor="white" w="full">
        <BreadCrumbNav link="/add-admission" />

        <HStack
          w="100%"
          justifyContent="space-between"
          bgColor="white"
          p={3}
          rounded="lg"
          mt={2}
        >
          <Text fontSize="xl" fontWeight="bold">
            Diseases
            <span style={{
              fontSize: '18px',
              // fontWeight: 'normal',
              color: 'gray',
            }}
            >
              {' '}
              (
              {subRowData?.length.toLocaleString()}
              )

            </span>
          </Text>
          <HStack>
            <Button leftIcon={<FaPrint />}>Print Report</Button>

            <Button leftIcon={<FaFileDownload />}>Download</Button>

          </HStack>
        </HStack>
        <Box
          w="100%"
          bgColor="white"
          p={3}
          h="89%"
        >
          <DataTable2
            searchQueryColumn="pay_status"
            data={subRowData}
            columns={columns}
          />
        </Box>
      </Box>
    </VStack>
  );
};

export default Disease;
