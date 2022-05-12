import { RootState } from '../store';

export const selectManufacturesLoading = (state: RootState) => state.manufactures.loadingHome;
export const selectDetailsLoading = (state: RootState) => state.manufactures.loadingDetails;
export const selectAllManufactures = (state: RootState) => state.manufactures.manufactures;
export const selectCurrentPage = (state: RootState) => state.manufactures.currentPage;
export const selectNextPageLoading = (state: RootState) => state.manufactures.loadingNextPage;
