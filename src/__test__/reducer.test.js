import manufacturesSlice from '../slices/manufacturesSlice';
test('initial state', () => {
  expect(manufacturesSlice(undefined, {})).toEqual({
    loadingHome: false,
    loadingDetails: false,
    loadingNextPage: false,
    error: null,
    manufactures: [],
    currentPage: 1,
  });
});
