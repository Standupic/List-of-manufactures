import { mappingAllManufactures } from '../helpers';

const obj = [
  {
    Country: 'UNITED STATES (USA)',
    Mfr_CommonName: 'Tesla',
    Mfr_ID: 955,
    Mfr_Name: 'TESLA, INC.',
    VehicleTypes: [
      {
        IsPrimary: true,
        Name: 'Passenger Car',
      },
    ],
  },
];

it('test1', () => {
  expect(mappingAllManufactures(obj)).toEqual([
    {
      country: 'UNITED STATES (USA)',
      name: 'Tesla',
      id: '955',
    },
  ]);
});
