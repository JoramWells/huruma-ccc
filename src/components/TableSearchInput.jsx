/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { HStack, Input } from '@chakra-ui/react';
import PropTypes from 'prop-types';
// import TableSearchFilter from './Tables/TableSearchFilter';

const TableSearchInput = ({ columnFilters, setColumFilters }) => {
  const patientName = columnFilters.find((f) => f.id === 'patientName')?.value || '';

  const onFilterChange = (id, value) => setColumFilters(
    (prev) => prev.filter((f) => f.id !== id).concat({
      id, value,
    }),
  );

  return (
    <HStack w="98%" p={2} m="auto">
      <Input
        placeholder="Enter Item Description"
        onChange={(e) => onFilterChange('itemDescription', e.target.value)}
        backgroundColor="gray.50"
        border="0"
                // borderColor="gray.100"
        rounded="lg"
                // _active={{
                //   boxShadow: 'lg',
                // }}
        _selected={{
          boxShadow: 'md',
          borderColor: 'gray.100',
          backgroundColor: 'white',
        }}
        _focus={{
          boxShadow: 'md',
          borderColor: 'gray.100',
          backgroundColor: 'white',
        }}
        size="lg"
        value={patientName}
      />
      {/* <TableSearchFilter
        columnFilters={columnFilters}
        setColumFilters={setColumFilters}
      /> */}
    </HStack>
  );
};

export default TableSearchInput;

// TableSearchInput.propTypes = {
//   setFilter: PropTypes.func,
//   searchText: PropTypes.string,
// };

// TableSearchInput.defaultProps = {
//   setFilter: () => {},
//   searchText: '',
// };
