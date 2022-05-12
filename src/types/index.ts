export enum TableHading {
  country = 'country',
  name = 'name',
  id = 'id',
  button = 'action',
  models = 'models',
}

export interface IManufactureState {
  country: string;
  name: string;
  id: string;
  models?: string[];
}

export interface IResponseManufactureAPI {
  Count: number;
  Message: string;
  Results: IManufactureAPI[];
  SearchCriteria: null;
}

export interface IResponseDetailsAPI {
  Count: number;
  Message: string;
  SearchCriteria: string;
  Results: IVehicleModelsAPI[];
}

export interface IManufactureAPI {
  Country: string;
  Mfr_CommonName: string | null;
  Mfr_ID: number;
  Mfr_Name: string;
  VehicleTypes: IVehicleAPI[];
}

export interface IVehicleAPI {
  IsPrimary: boolean;
  Name: string;
}

export interface IVehicleModelsAPI {
  Make_ID: number;
  Make_Name: string;
  Mfr_Name: string;
}
