/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/prop-types */
import React from 'react';
import {
  useReactTable,
  flexRender,
  getCoreRowModel,
  createColumnHelper,
  getPaginationRowModel,
  getFilteredRowModel,
} from '@tanstack/react-table';
import moment from 'moment/moment';
import {
  Button,
  HStack,
  Input,
  InputGroup,
  InputLeftElement,
  Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr, VStack,
} from '@chakra-ui/react';
import { FaSearch } from 'react-icons/fa';
import { useGetProceduresQuery } from '../../api/procedureDetails.api';

function IndeterminateCheckbox({ indeterminate, ...rest }) {
  const ref = React.useRef(null);

  React.useEffect(() => {
    if (typeof indeterminate === 'boolean') {
      ref.current.indeterminate = !rest.checked && indeterminate;
    }
  }, [ref, indeterminate, rest.checked]);

  return <input type="checkbox" ref={ref} {...rest} />;
}

const columnHelper = createColumnHelper();

const columnDefWithCheckBox = [
  {
    id: 'select',
    header: ({ table }) => (
      <IndeterminateCheckbox
        {...{
          checked: table.getIsAllRowsSelected(),
          indeterminate: table.getIsSomeRowsSelected(),
          onChange: table.getToggleAllRowsSelectedHandler(),
        }}
      />
    ),
    cell: ({ row }) => (
      <IndeterminateCheckbox
        {...{
          checked: row.getIsSelected(),
          disabled: !row.getCanSelect(),
          indeterminate: row.getIsSomeSelected(),
          onChange: row.getToggleSelectedHandler(),
        }}
      />
    ),
  },
  columnHelper.accessor('procedure_id', {
    header: 'Id',
  }),
  {
    accessorFn: (row) => `${row?.procedure_name}`,
    header: 'Procedure Name',
  },
  {
    accessorKey: 'procedure_cost',
    header: 'Procedure Cost',
  },
];

const TableSelectRow = () => {
  const finalColumnDef = React.useMemo(() => columnDefWithCheckBox, []);

  const [rowSelection, setRowSelection] = React.useState({});
  const [columnFilters, setColumFilters] = React.useState([]);

  const { data: procedureData, isLoading } = useGetProceduresQuery();
  const finalData = React.useMemo(() => procedureData, [procedureData]);

  const tableInstance = useReactTable({
    columns: finalColumnDef,
    data: finalData || [],
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getFilteredRowModel: React.useMemo(() => getFilteredRowModel(), []),

    state: {
      rowSelection,
      columnFilters,
    },
    onRowSelectionChange: setRowSelection,
    enableRowSelection: true,
  });

  const onFilterChange = (id, value) => setColumFilters(
    (prev) => prev.filter((f) => f.id !== id).concat({
      id, value,
    }),
  );
  const procedureName = columnFilters.find((f) => f.id === 'procedure_name')?.value || '';

  //   console.log("test", tableInstance.getHeaderGroups());

  return (
    <TableContainer
      w="50%"
      border="1px"
      borderColor="gray.200"
      rounded="lg"
    >

      <VStack w="full" p={3}>
        <InputGroup>
          <InputLeftElement>
            <FaSearch
              style={{
                marginTop: '7px',
              }}
              size={20}
              color="gray"
            />
          </InputLeftElement>
          <Input
            placeholder="Search procedure"
            value={procedureName}
            backgroundColor="gray.50"
            size="lg"
            onChange={(e) => onFilterChange('procedure_name', e.target.value)}
          />
        </InputGroup>

      </VStack>

      {isLoading ? <Text>Fetching data..</Text>
        : (
          <Table>
            <Thead>
              {tableInstance.getHeaderGroups().map((headerEl) => (
                <Tr key={headerEl.id}>
                  {headerEl.headers.map((columnEl) => (
                    <Th key={columnEl.id} colSpan={columnEl.colSpan}>
                      {columnEl.isPlaceholder
                        ? null
                        : flexRender(
                          columnEl.column.columnDef.header,
                          columnEl.getContext(),
                        )}
                    </Th>
                  ))}
                </Tr>
              ))}
            </Thead>
            <Tbody>
              {tableInstance.getRowModel().rows.map((rowEl) => (
                <Tr key={rowEl.id}>
                  {rowEl.getVisibleCells().map((cellEl) => (
                    <Td key={cellEl.id}>
                      {flexRender(
                        cellEl.column.columnDef.cell,
                        cellEl.getContext(),
                      )}
                    </Td>
                  ))}
                </Tr>
              ))}
            </Tbody>
          </Table>
        )}
      <hr />
      <div>
        <ul>
          {tableInstance.getSelectedRowModel()
            .flatRows.map((el) => <li key={el.id}>{JSON.stringify(el.original)}</li>)}
        </ul>
      </div>
      <HStack
        justifyContent="space-between"
              // bgColor="gray.50"
        w="full"
        mt={2}
        p={2}
        rounded="lg"
        fontWeight="semibold"
        color="gray.600"
        border="1px"
        borderColor="gray.200"
        boxShadow="lg"
      >
        <HStack>
          <Text>
            Page
            {' '}
            {tableInstance.getState().pagination.pageIndex + 1}
          </Text>
          <Text>
            of
            {' '}
            {tableInstance.getPageCount()}

          </Text>
        </HStack>
        <HStack>
          <Button
            onClick={() => tableInstance.previousPage()}
            isDisabled={!tableInstance.getCanPreviousPage()}
          >
            Prev

          </Button>
          <Button
            onClick={() => tableInstance.nextPage()}
            isDisabled={!tableInstance.getCanNextPage()}
          >
            Next

          </Button>

        </HStack>
      </HStack>
    </TableContainer>
  );
};

export default TableSelectRow;
