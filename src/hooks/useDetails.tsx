import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import fetchDetails from '../middlewares/fetchDetails';

const useDetails = () => {
  const dispatch = useDispatch();
  const params = useParams<{ id: string }>();
  useEffect(() => {
    if (params && params.id) {
      dispatch(fetchDetails({ id: params.id }));
    }
  }, [dispatch, params.id, params]);
};

export default useDetails;
