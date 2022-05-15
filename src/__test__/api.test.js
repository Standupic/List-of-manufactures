import MockAdapter from 'axios-mock-adapter';
import api from '../api';
import fetchDetails from '../middlewares/fetchDetails';
import fetchAllManufactures from '../middlewares/fetchAllManufactures';
import store from '../store';
const idDetail = '955';

const getDetailsResponse = {
  Count: 0,
  Message: 'Response returned successfully',
  SearchCriteria: null,
  Results: ['Tesla'],
};

const mockNetResponseDetails = () => {
  const mock = new MockAdapter(api);
  mock.onGet(`vehicles/GetMakeForManufacturer/${idDetail}`).reply(200, getDetailsResponse);
};

describe('fetch details', () => {
  beforeAll(() => {
    mockNetResponseDetails();
  });

  it('Should be get details', async () => {
    const result = await store.dispatch(fetchDetails({ id: idDetail }));
    const details = result.payload;
    expect(result.type).toBe('manufactures/fetchDetails/fulfilled');
    expect(details.models).toEqual(getDetailsResponse.Results);
    expect(details.id).toEqual(idDetail);
    const state = store.getState();
    expect(state.manufactures.manufactures.filter((item) => item.id === idDetail)).toBeTruthy();
  });
});

const getManufacturesResponse = {
  Results: [
    {
      Country: 'UNITED KINGDOM (UK)',
      Mfr_CommonName: 'Jaguar Land Rover',
      Mfr_ID: 1079,
      Mfr_Name: 'JAGUAR LAND ROVER LIMITED',
      VehicleTypes: [
        {
          IsPrimary: true,
          Name: 'Passenger Car',
        },
        {
          IsPrimary: false,
          Name: 'Multipurpose Passenger Vehicle (MPV)',
        },
      ],
    },
    {
      Country: 'CHINA',
      Mfr_CommonName: null,
      Mfr_ID: 1080,
      Mfr_Name: 'GEELY GROUP ZHEJIANG MOTORCYCLE CO., LTD.',
      VehicleTypes: [
        {
          IsPrimary: false,
          Name: 'Motorcycle',
        },
      ],
    },
  ],
};

const mockNetResponseManufactures = () => {
  const mock = new MockAdapter(api);
  mock
    .onGet('/vehicles/getallmanufacturers/', { params: { format: 'json' } })
    .reply(200, getManufacturesResponse);
};

describe('fetch manufactures', () => {
  beforeAll(() => {
    mockNetResponseManufactures();
  });

  it('Should be get manufactures', async () => {
    const result = await store.dispatch(fetchAllManufactures());
    expect(result.type).toBe('manufactures/fetchAllManufactures/fulfilled');
    expect(result.payload).toEqual(getManufacturesResponse.Results);
    const state = store.getState();
    expect(state.manufactures.loadingHome).toBeFalsy();
  });
});
