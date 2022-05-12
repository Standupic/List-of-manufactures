import { createSlice } from '@reduxjs/toolkit';
import fetchAllManufactures from '../middlewares/fetchAllManufactures';
import fetchDetails from '../middlewares/fetchDetails';
import { IManufactureState, IVehicleModelsAPI } from '../types';
import { mappingAllManufactures } from '../helpers';
import fetchNextPage from '../middlewares/fetchNextPage';

export const TOTAL_PAGES = 30;

export interface manufacturesState {
  loadingHome: boolean;
  loadingDetails: boolean;
  loadingNextPage: boolean;
  error: unknown;
  manufactures: IManufactureState[];
  currentPage: number;
}

const initialState: manufacturesState = {
  loadingHome: false,
  loadingDetails: false,
  loadingNextPage: false,
  error: null,
  manufactures: [],
  currentPage: 1,
};

const manufacturesSlice = createSlice({
  name: 'manufactures',
  initialState,
  reducers: {},
  extraReducers: (builders) => {
    builders.addCase(fetchAllManufactures.fulfilled, (state, action) => {
      state.loadingHome = false;
      state.manufactures = mappingAllManufactures(action.payload);
    });
    builders.addCase(fetchAllManufactures.pending, (state, action) => {
      state.loadingHome = true;
    });
    builders.addCase(
      fetchDetails.fulfilled,
      (state, action: { payload: { models: IVehicleModelsAPI[]; id: string } }) => {
        state.loadingDetails = false;
        const { id, models } = action.payload;
        const index = state.manufactures.findIndex((el) => el.id === id);
        state.manufactures[index] = {
          ...state.manufactures[index],
          models: models.map((item) => item.Make_Name),
        };
        return state;
      },
    );
    builders.addCase(fetchDetails.pending, (state, action) => {
      state.loadingDetails = true;
    });
    builders.addCase(fetchDetails.rejected, (state, action) => {
      state.error = 'Something went wrong!';
    });
    builders.addCase(fetchNextPage.fulfilled, (state, action) => {
      const { data, nextPage } = action.payload;
      state.manufactures = [...state.manufactures, ...mappingAllManufactures(data)];
      state.currentPage = nextPage;
      state.loadingNextPage = false;
    });
    builders.addCase(fetchNextPage.pending, (state, action) => {
      state.loadingNextPage = true;
    });
    builders.addCase(fetchNextPage.rejected, (state, action) => {
      state.error = 'Something went wrong!';
      state.loadingNextPage = false;
    });
  },
});

export default manufacturesSlice.reducer;
