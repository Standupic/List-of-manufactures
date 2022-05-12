import { IManufactureAPI, IManufactureState } from '../types';

export const mappingAllManufactures = (data: IManufactureAPI[]) => {
  return data.reduce((acc: IManufactureState[], item) => {
    return [
      ...acc,
      {
        country: item.Country,
        name: item.Mfr_CommonName === null ? '-' : item.Mfr_CommonName,
        id: item.Mfr_ID.toString(),
      },
    ];
  }, []);
};
