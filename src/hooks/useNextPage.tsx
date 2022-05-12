import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { InViewHookResponse } from 'react-intersection-observer';
import { TOTAL_PAGES } from '../slices/manufacturesSlice';
import { selectCurrentPage } from '../selectors/manufactures';
import fetchNextPage from '../middlewares/fetchNextPage';

const useNextPage = (ref: InViewHookResponse['ref'], inView: InViewHookResponse['inView']) => {
  const currentPage = useSelector(selectCurrentPage);
  const dispatch = useDispatch();
  useEffect(() => {
    if (inView && currentPage < TOTAL_PAGES) {
      dispatch(fetchNextPage({ nextPage: currentPage + 1 }));
    }
  }, [dispatch, currentPage, inView]);
};

export default useNextPage;
