import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

const BASE_URL = 'http://localhost:5000/admission/';

const fetchAllAdmissions = async () => {
  let data = [];
  try {
    await axios.get(`${BASE_URL}fetchAll`)
      .then((response) => {
        data = response.data;
        return data;
      })
      .catch((error) => console.log(error));
  } catch (error) {
    console.log(error);
  }
};

export const useAdmissionQuery = () => useQuery({
  queryKey: 'Admissions',
  queryFn: fetchAllAdmissions(),
});
