import { createAsyncThunk } from '@reduxjs/toolkit';
import Axios from '../api';
import { IResponseManufactureAPI } from '../types';

const fetchAllManufactures = createAsyncThunk(
  'manufactures/fetchAllManufactures',
  async (_, api) => {
    const data = await Axios.get<IResponseManufactureAPI>('/vehicles/getallmanufacturers/', {
      params: {
        format: 'json',
      },
    });
    return data.data.Results;
  },
);

export default fetchAllManufactures;
