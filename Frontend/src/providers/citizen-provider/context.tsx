import { createContext } from "react";
export interface ICitizen {
  id?: number;
  // username: string;
  // firstName?: string;
  // lastName?: string;
  // email?: string;
  // activeState?: boolean;
  key?: string;
  userName?: string;
  name?: string;
  surname?: string;
  emailAddress?: string;
  isActive?: boolean;
  fullName?: string;
  lastLoginTime?: Date;
  creationTime?: Date;
  roleNames?: [string];
  roleName: string;
  password?: string
}
export interface ICitizenStateContext {
  isPending: boolean;
  isSuccess: boolean;
  isError: boolean;
  citizen?: ICitizen;
  citizens?: ICitizen[];
}
export interface ICitizenActionContext {
  getCitizenList: () => void;
  // getCitizenList: () => Promise<void>;
  // getCitizenList: () => void;
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
