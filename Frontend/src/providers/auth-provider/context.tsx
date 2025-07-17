import { createContext } from "react";

export interface IMunicipalityRegister {
  name: string;
  email: string;
  password: string;
  roleName: string;
  contactNumber: number;
  address: string;
}
export interface IMunicipalityRegisterStateContext {
  isPending: boolean;
  isSuccess: boolean;
  isError: boolean;
  municipality?: IMunicipalityRegister;
}
export interface IMunicipalityRegisterActionContext {
  registerMunicipality: (payload: IMunicipalityRegister) => void; 
}

export const INITIAL_STATE_MUNICIPALITY: IMunicipalityRegisterStateContext = {
  isPending: false,
  isSuccess: false,
  isError: false, 
};

export const MunicipalityRegisterStateContext =
  createContext<IMunicipalityRegisterStateContext>(INITIAL_STATE_MUNICIPALITY);

export const MunicipalityRegisterActionContext = createContext<
  undefined | IMunicipalityRegisterActionContext
>(undefined);

export interface ICitizenRegister {
  emailAddress: string;
  password: string;
  roleName: string;
  userName: string;
  name: string;
  surname: string;
}
export interface ICitizenRegisterStateContext {
  isPending: boolean; 
  isSuccess: boolean; 
  isError: boolean; 
  citizen?: ICitizenRegister; 
}
export interface ICitizenRegsiterActionContext {
  registerCitizen: (payload: ICitizenRegister) => void; 
}

export const INITIAL_STATE_CITIZEN: ICitizenRegisterStateContext = {
  isPending: false, 
  isSuccess: false,
  isError: false,
};

export const CitizenRegisterStateContext =
createContext<ICitizenRegisterStateContext>(INITIAL_STATE_CITIZEN);

export const CitizenRegisterActionContext = createContext<
  undefined | ICitizenRegsiterActionContext
>(undefined);

export interface IUserLogin {
  userNameOrEmailAddress: string;
  password: string;
}
export interface IUserLoginStateContext {
  isPending: boolean; 
  isSuccess: boolean; 
  isError: boolean; 
  user?: IUserLogin; 
}
export interface IUserLoginActionContext {
  userLogin: (payload: IUserLogin) => void;
}

export const INITIAL_STATE_USER: IUserLoginStateContext = {
  isPending: false, 
  isSuccess: false, 
  isError: false, 
};

export const UserLoginStateContext =
  createContext<IUserLoginStateContext>(INITIAL_STATE_USER);

export const UserLoginActionContext = createContext<
  undefined | IUserLoginActionContext
>(undefined);

export interface ICurrentUser {
  id: string;
  name: string;
  email: string;
  role: string;
  activeState: boolean;
  date: string;
}
export interface ICurrentUserStateContext {
  isPending: boolean;
  isSuccess: boolean; 
  isError: boolean; 
  currentUser?: ICurrentUser; 
}
export interface ICurrentUserActionContext {
  currentUser: () => void; 
}

export const INITIAL_STATE_CURRENT: ICurrentUserStateContext = {
  isPending: false, 
  isSuccess: false, 
  isError: false,
};

export const CurrentUserStateContext = createContext<ICurrentUserStateContext>(
  INITIAL_STATE_CURRENT
);

export const CurrentUserActionContext = createContext<
  undefined | ICurrentUserActionContext
>(undefined);
