import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchAllManufactures from '../middlewares/fetchAllManufactures';
import { selectCurrentPage } from '../selectors/manufactures';

const useGetAllManufactures = () => {
  const dispatch = useDispatch();
  const currentPage = useSelector(selectCurrentPage);
  useEffect(() => {
    if (currentPage === 1) {
      dispatch(fetchAllManufactures());
    }
  }, [dispatch, currentPage]);
};

export default useGetAllManufactures;
