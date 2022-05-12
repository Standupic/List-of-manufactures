import { createAsyncThunk } from '@reduxjs/toolkit';
import Axios from '../api';
import { IResponseDetailsAPI } from '../types';

const fetchDetails = createAsyncThunk(
  'manufactures/fetchDetails',
  async (option: { id: string }, api) => {
    const { id } = option;
    const data = await Axios.get<IResponseDetailsAPI>(`vehicles/GetMakeForManufacturer/${id}`, {
      params: {
        format: 'json',
      },
    });
    return { models: data.data.Results, id: id };
  },
);

export default fetchDetails;
