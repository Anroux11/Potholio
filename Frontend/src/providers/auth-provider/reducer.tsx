import { handleActions } from "redux-actions";
import {
  ICitizenRegisterStateContext,
  ICurrentUserStateContext,
  INITIAL_STATE_CITIZEN,
  INITIAL_STATE_CURRENT,
  INITIAL_STATE_MUNICIPALITY,
  INITIAL_STATE_USER,
  IMunicipalityRegisterStateContext,
  IUserLoginStateContext,
} from "./context";
import {
  MunicipalityRegisterActionEnums,
  CitizenRegisterActionEnum,
  UserLoginActionEnum,
  CurrentUserActionEnum,
} from "./actions";

export const RegisterMunicipalityReducer =
  handleActions<IMunicipalityRegisterStateContext>(
    {
      [MunicipalityRegisterActionEnums.getRegisterMunicipalityPending]: (
        state,
        action
      ) => ({
        ...state,
        ...action.payload,
      }),
      [MunicipalityRegisterActionEnums.getRegisterMunicipalitySuccess]: (
        state,
        action
      ) => ({
        ...state,
        ...action.payload,
      }),
      [MunicipalityRegisterActionEnums.getRegisterMunicipalityError]: (
        state,
        action
      ) => ({
        ...state,
        ...action.payload,
      }),
    },
    INITIAL_STATE_MUNICIPALITY
  );

export const RegisterCitizenReducer = handleActions<ICitizenRegisterStateContext>(
  {
    [CitizenRegisterActionEnum.getRegisterCitizenPending]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [CitizenRegisterActionEnum.getRegisterCitizenSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [CitizenRegisterActionEnum.getRegisterCitizenError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
  },
  INITIAL_STATE_CITIZEN
);

export const UserLoginReducer = handleActions<IUserLoginStateContext>(
  {
    [UserLoginActionEnum.getUserLoginPending]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [UserLoginActionEnum.getUserLoginSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [UserLoginActionEnum.getUserLoginError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
  },
  INITIAL_STATE_USER
);

export const CurrentUserReducer = handleActions<ICurrentUserStateContext>(
  {
    [CurrentUserActionEnum.getCurrentUserPending]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [CurrentUserActionEnum.getCurrentUserSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [CurrentUserActionEnum.getCurrentUserError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
  },
  INITIAL_STATE_CURRENT
);

