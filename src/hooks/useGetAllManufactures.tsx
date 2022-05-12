import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import fetchAllManufactures from '../middlewares/fetchAllManufactures';

const useGetAllManufactures = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAllManufactures());
  }, [dispatch]);
};

export default useGetAllManufactures;
