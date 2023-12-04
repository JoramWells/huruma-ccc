import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getDepartmentDetail } from '../_reducers/departmentSlice';

const DepartmentDetail = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { data } = useSelector((state) => state.departments);

  useEffect(() => {
    dispatch(getDepartmentDetail(id));
  }, []);
  console.log(data);
  return (
    <div>DepartmentDetail</div>
  );
};

export default DepartmentDetail;
