/* eslint-disable no-unused-vars */
/* eslint-disable react/forbid-prop-types */
import {
  Box, Button, HStack, Table, TableContainer, Tbody, Td, Text, Th, Thead, Tr, VStack,
} from '@chakra-ui/react';
import {
  flexRender, getCoreRowModel, getFilteredRowModel,
  getPaginationRowModel, getSortedRowModel, useReactTable,
} from '@tanstack/react-table';
import PropTypes from 'prop-types';
import { useMemo, useState } from 'react';
import { FaSort } from 'react-icons/fa';
import TableSearchInput from '../TableSearchInput';

const DataTable2 = ({ data, columns, searchQueryColumn }) => {
  const [columnFilters, setColumnFilters] = useState([]);

  const table = useReactTable({
    data,
    columns,
    state: {
      columnFilters,
    },
    getCoreRowModel: useMemo(() => getCoreRowModel(), []),
    getFilteredRowModel: useMemo(() => getFilteredRowModel(), []),
    getSortedRowModel: useMemo(() => getSortedRowModel(), []),
    getPaginationRowModel: useMemo(() => getPaginationRowModel(), []),
    columnResizeMode: 'onChange',
  });
  return (
    <>
      <TableSearchInput
        setColumFilters={setColumnFilters}
        columnFilters={columnFilters}
        searchQueryColumn={searchQueryColumn}
      />
      <TableContainer h="700px" overflowY="auto" w="98%">
        <Table>
          {table.getHeaderGroups()
            .map((headerGroup) => (
              <Thead
                key={headerGroup.id}
              >
                {headerGroup.headers.map((header) => (
                  <Th
                    key={header.id}
                    w={header.getSize()}
                    position="relative"
                  >
                    <HStack>
                      <Text fontSize="medium">
                        {header.column.columnDef.header}
                      </Text>
                      {header.column.getCanSort() && (
                        <FaSort onClick={
                          header.column.getToggleSortingHandler()
                        }
                        />
                      )}
                      <Text>
                        {header.column.getIsSorted()}

                      </Text>
                    </HStack>

                    <Box
                      onMouseDown={header.getResizeHandler()}
                      onTouchStart={header.getResizeHandler()}
                      className={`resizer ${header.column.getIsResizing() ? 'isResizing' : ''
                      }`}
                    />
                  </Th>
                ))}
              </Thead>
            ))}
          <Tbody>
            {table.getRowModel().rows.map((row) => (
              <Tr key={row.id}>
                {row.getVisibleCells().map((cell) => (
                  <Td key={cell.id}>
                    {
                      flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext(),
                      )
                    }
                  </Td>
                ))}
              </Tr>
            ))}
          </Tbody>
        </Table>
        <HStack
          justifyContent="flex-start"
          // bgColor="gray.50"
          w="100px"
          mt={2}
          p={2}
          rounded="lg"
          fontWeight="semibold"
          color="gray.600"
          border="1px"
          borderColor="gray.200"
          boxShadow="lg"
        >
          <Text>
            Page
            {' '}
            {table.getState().pagination.pageIndex + 1}
          </Text>
          <Text>
            of
            {' '}
            {table.getPageCount()}

          </Text>
          <HStack>
            {/* <Button
              onClick={() => table.previousPage()}
              isDisabled={!table.getCanPreviousPage()}
            >
              Prev

            </Button>
            <Button
              onClick={table.nextPage()}
              isDisabled={!table.getCanNextPage()}
            >
              Next

            </Button> */}

          </HStack>
        </HStack>

      </TableContainer>
    </>
  );
};

export default DataTable2;

DataTable2.propTypes = {
  data: PropTypes.array,
  columns: PropTypes.array,
  searchQueryColumn: PropTypes.string,
};

DataTable2.defaultProps = {
  data: [],
  columns: [],
  searchQueryColumn: 'first_name',
};
