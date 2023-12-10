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

const DataTable2 = ({ data, columns }) => {
  const [columnFilters, setColumnFilters] = useState([]);

  const table = useReactTable({
    data,
    columns,
    state: {
      columnFilters,
    },
    getCoreRowModel: useMemo(() => getCoreRowModel()),
    getFilteredRowModel: useMemo(() => getFilteredRowModel()),
    getSortedRowModel: useMemo(() => getSortedRowModel()),
    getPaginationRowModel: useMemo(() => getPaginationRowModel()),
    columnResizeMode: 'onChange',
  });
  return (
    <>
      <TableSearchInput
        setColumFilters={setColumnFilters}
        columnFilters={columnFilters}
      />
      <TableContainer>
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
        <HStack justifyContent="space-between">
          <Text>
            {table.getState().pagination.pageIndex}
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
};

DataTable2.defaultProps = {
  data: [],
  columns: [],
};
