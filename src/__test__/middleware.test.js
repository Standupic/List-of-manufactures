const thunk =
  ({ dispatch, getState }) =>
  (next) =>
  (action) => {
    if (typeof action === 'function') {
      return action(dispatch, getState);
    }
    return next(action);
  };

const create = () => {
  const store = {
    getState: jest.fn(() => ({})),
    dispatch: jest.fn(),
  };
  const next = jest.fn();
  const invoke = (action) => thunk(store)(next)(action);
  return { store, next, invoke };
};

test('fetchingManufactures', () => {
  const { next, invoke } = create();
  const action = { type: 'manufactures/fetchAllManufactures/pending' };
  invoke(action);
  expect(next).toHaveBeenCalledWith(action);
});

test('fetchedManufactures', () => {
  const { next, invoke } = create();
  const action = { type: 'manufactures/fetchAllManufactures/fulfilled' };
  invoke(action);
  expect(next).toHaveBeenCalledWith(action);
});

test('fetchingNextPage', () => {
  const { next, invoke } = create();
  const action = { type: 'manufactures/fetchNextPage/pending' };
  invoke(action);
  expect(next).toHaveBeenCalledWith(action);
});

test('fetchedNextPage', () => {
  const { next, invoke } = create();
  const action = { type: 'manufactures/fetchNextPage/fulfilled' };
  invoke(action);
  expect(next).toHaveBeenCalledWith(action);
});

test('fetchingDetails', () => {
  const { next, invoke } = create();
  const action = { type: 'manufactures/fetchDetails/pending' };
  invoke(action);
  expect(next).toHaveBeenCalledWith(action);
});

test('fetchedDetails', () => {
  const { next, invoke } = create();
  const action = { type: 'manufactures/fetchDetails/fulfilled' };
  invoke(action);
  expect(next).toHaveBeenCalledWith(action);
});
