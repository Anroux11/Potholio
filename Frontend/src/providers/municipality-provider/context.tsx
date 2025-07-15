import { createContext } from "react";
export interface IMunicipality {
  id: string;
  name: string;
  email: string;
  contactNumber: number;
  address: string;
  role: string
  activeState: boolean;
}

export interface IMunicipalityStateContext {
  isPending: boolean; 
  isSuccess: boolean; 
  isError: boolean;
  municipality?: IMunicipality;
}
export interface IMunicipalityActionContext {
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
