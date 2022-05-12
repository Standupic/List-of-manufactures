import { Table, TableContainer, Tbody, Th, Thead, Tr } from '@chakra-ui/react';
import React, { FC } from 'react';
import { TableHading } from '../../types';
import { PAGE_TITTLE } from '../../pages/types';

interface ITableProps {
  data: JSX.Element[];
  pageType: PAGE_TITTLE;
}

const TableComponent: FC<ITableProps> = ({ data, pageType }) => {
  return (
    <TableContainer>
      <Table variant="striped" colorScheme="telegram" id="table">
        <Thead>
          {pageType === PAGE_TITTLE.home && (
            <Tr>
              <Th>{TableHading.country}</Th>
              <Th>{TableHading.name}</Th>
              <Th>{TableHading.id}</Th>
              <Th>{TableHading.button}</Th>
            </Tr>
          )}
          {pageType === PAGE_TITTLE.details && (
            <Tr>
              <Th>{TableHading.country}</Th>
              <Th>{TableHading.name}</Th>
              <Th>{TableHading.id}</Th>
              <Th>{TableHading.models}</Th>
            </Tr>
          )}
        </Thead>
        <Tbody>{data}</Tbody>
      </Table>
    </TableContainer>
  );
};

export default React.memo(TableComponent);
