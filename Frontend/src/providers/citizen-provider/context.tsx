import { createContext } from "react";
export interface ICitizen {
  id?: string;
  username: string;
  firstName?: string;
  lastName?: string;
  email?: string;
  activeState?: boolean;
}
export interface ICitizenStateContext {
  isPending: boolean;
  isSuccess: boolean;
  isError: boolean;
  citizen?: ICitizen;
  citizens?: ICitizen[];
}
export interface ICitizenActionContext {
  // getCitizens: (trainerId: string) => ICitizen[];
  getCitizenList: (trainerId: string) => void;
  getCitizen: (id: string) => void;
  createCitizen: (citizen: ICitizen) => void;
  updateCitizen: (citizen: ICitizen) => void;
  deleteCitizen: (id: string) => void;
}

export const INITIAL_STATE: ICitizenStateContext = {
  isPending: false,
  isSuccess: false,
  isError: false,
};

export const CitizenStateContext =
  createContext<ICitizenStateContext>(INITIAL_STATE);

export const CitizenActionContext = createContext<
  undefined | ICitizenActionContext
>(undefined);
