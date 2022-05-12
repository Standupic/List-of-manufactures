import React, { useMemo } from 'react';
import { Box, Heading, Spinner, Td, Tr } from '@chakra-ui/react';
import { uniqueId } from 'lodash/fp';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import useDetails from '../hooks/useDetails';
import TableComponent from '../components/Table';
import { IManufactureState } from '../types';
import { selectAllManufactures, selectDetailsLoading } from '../selectors/manufactures';
import { PAGE_TITTLE } from './types';

const Details = () => {
  const AllManufactures = useSelector(selectAllManufactures);
  const loading = useSelector(selectDetailsLoading);
  const params = useParams<{ id: string }>();
  useDetails();
  const data = useMemo(() => {
    return AllManufactures?.map((item: IManufactureState) => {
      return (
        <Tr key={uniqueId(item.id)} id={item.id}>
          <Td>{item.country}</Td>
          <Td>{item.name}</Td>
          <Td isNumeric>{item.id}</Td>
          {params.id === item.id ? (
            <Td>{loading ? <Spinner /> : item.models ? item.models.join() : '-'}</Td>
          ) : (
            <Td>{item.models ? item.models.join() : '-'}</Td>
          )}
        </Tr>
      );
    });
  }, [params.id, loading, AllManufactures]);
  return (
    <Box>
      <Heading as="h1" size="4xl" isTruncated>
        Table with models
      </Heading>
      <TableComponent data={data} pageType={PAGE_TITTLE.details} />
    </Box>
  );
};

export default Details;
