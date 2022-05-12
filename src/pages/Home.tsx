import React, { useMemo } from 'react';
import { Box, Button, Heading, Td, Tr, Spinner, Center } from '@chakra-ui/react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { uniqueId } from 'lodash/fp';
import { useInView } from 'react-intersection-observer';
import { IManufactureState } from '../types';
import {
  selectAllManufactures,
  selectManufacturesLoading,
  selectNextPageLoading,
} from '../selectors/manufactures';
import useNextPage from '../hooks/useNextPage';
import TableComponent from '../components/Table';
import { PAGE_TITTLE } from './types';

const Home = () => {
  const AllManufactures = useSelector(selectAllManufactures);
  const dataLoading = useSelector(selectManufacturesLoading);
  const nextPageLoading = useSelector(selectNextPageLoading);

  const { ref, inView } = useInView({
    threshold: 0,
  });
  useNextPage(ref, inView);
  const history = useHistory();

  const data = useMemo(() => {
    const returnSpinner = (td: string | JSX.Element) => (dataLoading ? <Spinner /> : td);
    const getDetailsHandler = (id: string) => {
      history.push(`/details/${id}`);
    };
    return AllManufactures?.map((item: IManufactureState, index: number) => {
      const flag = AllManufactures.length - 1 === index;
      return (
        <Tr key={uniqueId(item.id)} ref={flag ? ref : undefined}>
          <Td>{returnSpinner(item.country)}</Td>
          <Td>{returnSpinner(item.name)}</Td>
          <Td isNumeric>{returnSpinner(item.id)}</Td>
          <Td>
            {returnSpinner(
              <Button
                colorScheme="teal"
                onClick={() => {
                  getDetailsHandler(item.id);
                }}>
                Get more
              </Button>,
            )}
          </Td>
        </Tr>
      );
    });
  }, [ref, dataLoading, history, AllManufactures]);
  return (
    <Box>
      <Heading as="h1" size="4xl" isTruncated>
        Table manufactures
      </Heading>
      {nextPageLoading ? (
        <Center h="100vh">
          <Spinner />
        </Center>
      ) : (
        <TableComponent data={data} pageType={PAGE_TITTLE.home} />
      )}
    </Box>
  );
};

export default Home;
