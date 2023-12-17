/* eslint-disable no-unused-vars */
import { VStack } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { getPatientDetail } from '../_reducers/patientSlice';

const PatientDetail = () => {
  const { id } = useParams();
  const { data } = useSelector((state) => state.patients);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getPatientDetail(id));
  }, []);
  console.log(data);
  return (
    <VStack h="100vh" w="full" mt="55px" bgColor="gray.100">PatientDetail</VStack>
  );
};

export default PatientDetail;
