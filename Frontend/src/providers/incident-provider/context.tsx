import { createContext } from "react";
export interface IIncident {
  id?: string;
  description?: string;
  status: string;
  imageUrl?: string;
  incidentAddress?: Address;
  latitude: number;
  longitude: number;
  municipalityName?: string;
  reportingUserId?: number;
  serviceProviderName?: string; 
}
export interface Address {
  province: string;
  city: string;
}
export interface IIncidentStateContext {
  isPending: boolean;
  isSuccess: boolean;
  isError: boolean;
  incident?: IIncident;
  incidents?: IIncident[];
}
export interface IIncidentActionContext {
  getIncidentList: () => void;
  getIncident: (id: string) => void;
  createIncident: (incident: IIncident) => void;
  updateIncident: (incident: IIncident) => void;
  deleteIncident: (id: string) => void;
}

export const INITIAL_STATE: IIncidentStateContext = {
  isPending: false,
  isSuccess: false,
  isError: false,
};

export const IncidentStateContext =
  createContext<IIncidentStateContext>(INITIAL_STATE);

export const IncidentActionContext = createContext<
  undefined | IIncidentActionContext
>(undefined);
