import manufacturesSlice from '../slices/manufacturesSlice';
test('initial state', () => {
  expect(manufacturesSlice(undefined, {})).toEqual({
    loadingHome: false,
    loadingDetails: false,
    error: null,
    manufactures: [],
    currentPage: 1,
  });
});
