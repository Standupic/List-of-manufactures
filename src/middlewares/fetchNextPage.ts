import { createAsyncThunk } from '@reduxjs/toolkit';
import Axios from '../api';
import { IResponseManufactureAPI } from '../types';

const fetchNextPage = createAsyncThunk(
  'manufactures/fetchNextPage',
  async (option: { nextPage: number }, api) => {
    let params: any = {};
    if (option.nextPage) {
      params = { page: option.nextPage };
    }
    const data = await Axios.get<IResponseManufactureAPI>('/vehicles/getallmanufacturers/', {
      params: {
        format: 'json',
        ...params,
      },
    });
    return { data: data.data.Results, nextPage: option.nextPage };
  },
);

export default fetchNextPage;
