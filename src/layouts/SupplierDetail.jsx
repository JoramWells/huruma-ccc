/* eslint-disable no-unused-vars */

import { Text, VStack } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getSupplierDetail } from '../_reducers/supplierSlice';

const SupplierDetail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();

  const { data, loading } = useSelector((state) => state.suppliers);

  useEffect(() => {
    dispatch(getSupplierDetail(id));
  }, [dispatch]);

  return (
    <VStack
      h="100vh"
      w="full"
      mt="55px"
    >
      <VStack>
        {loading ? 'loading...'
          : (
            <VStack>
              <Text>
                {data.supplierName}
              </Text>
              <Text>
                {data.mobileNo}
              </Text>
              <Text>
                {data.classification}
              </Text>
              <Text>
                {data.status}
              </Text>
            </VStack>
          )}
      </VStack>

    </VStack>
  );
};

export default SupplierDetail;
