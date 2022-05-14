import MockAdapter from 'axios-mock-adapter';
import api from '../api';
import fetchDetails from '../middlewares/fetchDetails';
import store from '../store';
const idDetail = '955';

const getListResponse = {
  Count: 0,
  Message: 'Response returned successfully',
  SearchCriteria: null,
  Results: ['Tesla'],
};

const mockNetResponse = () => {
  const mock = new MockAdapter(api);
  mock.onGet(`vehicles/GetMakeForManufacturer/${idDetail}`).reply(200, getListResponse);
};

describe('fetch details', () => {
  beforeAll(() => {
    mockNetResponse();
  });

  it('Should be get details', async () => {
    const result = await store.dispatch(fetchDetails({ id: idDetail }));
    const details = result.payload;
    expect(result.type).toBe('manufactures/fetchDetails/fulfilled');
    expect(details.models).toEqual(getListResponse.Results);
    expect(details.id).toEqual(idDetail);
    const state = store.getState();
    expect(state.manufactures.manufactures.filter((item) => item.id === idDetail)).toBeTruthy();
  });
});



