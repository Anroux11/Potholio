import { createContext } from "react";
export interface IMunicipality {
  id: string;
  name: string;
  buildingAddress: Address[];
  latitude: string;
  longitude: string;
}
export interface Address {
  province: string;
  city: string;
}
export interface IMunicipalityStateContext {
  isPending: boolean; 
  isSuccess: boolean; 
  isError: boolean;
  municipality?: IMunicipality;
  municipalities? : IMunicipality[];
}
export interface IMunicipalityActionContext {
  getMunicipalityList: () => void;
  getMunicipality: (id: string) => void; 
  createMunicipality: (municipality: IMunicipality) => void; 
  updateMunicipality: (municipality: IMunicipality) => void; 
  deleteMunicipality: (id: string) => void; 
}

export const INITIAL_STATE: IMunicipalityStateContext = {
  isPending: false, 
  isSuccess: false, 
  isError: false, 
};

export const MunicipalityStateContext =
  createContext<IMunicipalityStateContext>(INITIAL_STATE);

export const MunicipalityActionContext = createContext<
  undefined | IMunicipalityActionContext
>(undefined);
