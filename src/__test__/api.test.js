import MockAdapter from 'axios-mock-adapter';
import api from '../api';
import fetchDetails from '../middlewares/fetchDetails';
import store from '../store';
const idDetail = '590';

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

describe('fetch ', () => {
  beforeAll(() => {
    mockNetResponse();
  });

  it('Should be able to fetch the games list for a specific user', async () => {
    const result = await store.dispatch(fetchDetails({ id: idDetail }));
    const details = result.payload;
    expect(result.type).toBe('manufactures/fetchDetails/fulfilled');
    expect(details.models).toEqual(getListResponse.Results);
    expect(details.id).toEqual(idDetail);
  });
});
