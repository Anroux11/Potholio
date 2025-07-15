import { createAction } from "redux-actions";
import {
  IMunicipalityRegister,
  IMunicipalityRegisterStateContext,
  ICitizenRegister,
  ICitizenRegisterStateContext,
  IUserLogin,
  ICurrentUser,
  IUserLoginStateContext,
  ICurrentUserStateContext,
} from "./context";

export enum MunicipalityRegisterActionEnums {
  getRegisterMunicipalityPending = "GET_REGISTER_MUNICIPALITY_PENDING",
  getRegisterMunicipalitySuccess = "GET_REGISTER_MUNICIPALITY_SUCCESS",
  getRegisterMunicipalityError = "GET_REGISTER_MUNICIPALITY_ERROR",
}

export enum CitizenRegisterActionEnum {
  getRegisterCitizenPending = "GET_REGISTER_CITIZEN_PENDING",
  getRegisterCitizenSuccess = "GET_REGISTER_CITIZEN_SUCCESS",
  getRegisterCitizenError = "GET_REGISTER_CITIZEN_ERROR",
}

export enum UserLoginActionEnum {
  getUserLoginPending = "GET_USER_LOGIN_PENDING",
  getUserLoginSuccess = "GET_USER_LOGIN_SUCCESS",
  getUserLoginError = "GET_USER_LOGIN_ERROR",
}

export enum CurrentUserActionEnum {
  getCurrentUserPending = "GET_CURRENT_USER_PENDING",
  getCurrentUserSuccess = "GET_CURRENT_USER_SUCCESS",
  getCurrentUserError = "GET_CURRENT_USER_ERROR",
}

export const getRegisterMunicipalityPending =
  createAction<IMunicipalityRegisterStateContext>(
    MunicipalityRegisterActionEnums.getRegisterMunicipalityPending,

    () => ({ isPending: true, isSuccess: false, isError: false })
  );

export const getRegisterMunicipalitySuccess = createAction<
  IMunicipalityRegisterStateContext,
  IMunicipalityRegister
>(
  MunicipalityRegisterActionEnums.getRegisterMunicipalitySuccess,

  (municipality: IMunicipalityRegister) => ({
    isPending: false,
    isSuccess: true,
    isError: false,
    municipality,
  })
);

export const getRegisterMunicipalityError =
  createAction<IMunicipalityRegisterStateContext>(
    MunicipalityRegisterActionEnums.getRegisterMunicipalityError,

    () => ({ isPending: false, isSuccess: false, isError: true })
  );

export const getRegisterCitizenPending =
  createAction<ICitizenRegisterStateContext>(
    CitizenRegisterActionEnum.getRegisterCitizenPending,

    () => ({ isPending: true, isSuccess: false, isError: false })
  );

export const getRegisterCitizenSuccess = createAction<
  ICitizenRegisterStateContext,
  ICitizenRegister
>(
  CitizenRegisterActionEnum.getRegisterCitizenSuccess,

  (citizen: ICitizenRegister) => ({
    isPending: false,
    isSuccess: true,
    isError: false,
    citizen,
  })
);

export const getRegisterCitizenError = createAction<ICitizenRegisterStateContext>(
  CitizenRegisterActionEnum.getRegisterCitizenError,

  () => ({ isPending: false, isSuccess: false, isError: true })
);

export const getUserLoginPending = createAction<IUserLoginStateContext>(
  UserLoginActionEnum.getUserLoginPending,

  () => ({ isPending: true, isSuccess: false, isError: false })
);

export const getUserLoginSuccess = createAction<
  IUserLoginStateContext,
  IUserLogin
>(
  UserLoginActionEnum.getUserLoginSuccess,

  (user: IUserLogin) => ({
    isPending: false,
    isSuccess: true,
    isError: false,
    user,
  })
);

export const getUserLoginError = createAction<IUserLoginStateContext>(
  UserLoginActionEnum.getUserLoginError,

  () => ({ isPending: false, isSuccess: false, isError: true })
);

export const getCurrentUserPending = createAction<ICurrentUserStateContext>(
  CurrentUserActionEnum.getCurrentUserPending,

  () => ({ isPending: true, isSuccess: false, isError: false })
);

export const getCurrentUserSuccess = createAction<
  ICurrentUserStateContext,
  ICurrentUser
>(
  CurrentUserActionEnum.getCurrentUserSuccess,

  (currentuser: ICurrentUser) => ({
    isPending: false,
    isSuccess: true,
    isError: false,
    currentuser,
  })
);

export const getCurrentUserError = createAction<ICurrentUserStateContext>(
  CurrentUserActionEnum.getCurrentUserError,
  () => ({ isPending: false, isSuccess: false, isError: true })
);
