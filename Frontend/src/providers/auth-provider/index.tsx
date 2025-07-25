import { getAxiosInstance } from "../../utils/axiosInstance";
import { jwtDecode } from "jwt-decode";
import { useCitizenActions } from "../citizen-provider";
import {
  MunicipalityRegisterStateContext,
  MunicipalityRegisterActionContext,
  CitizenRegisterStateContext,
  CitizenRegisterActionContext,
  UserLoginStateContext,
  UserLoginActionContext,
  CurrentUserStateContext,
  CurrentUserActionContext,
  INITIAL_STATE_MUNICIPALITY,
  INITIAL_STATE_CITIZEN,
  INITIAL_STATE_USER,
  INITIAL_STATE_CURRENT,
  IMunicipalityRegister,
  ICitizenRegister,
  IUserLogin,
} from "./context";
import {
  CurrentUserReducer,
  RegisterCitizenReducer,
  RegisterMunicipalityReducer,
  UserLoginReducer,
} from "./reducer";
import { useContext, useReducer } from "react";
import {
  getRegisterMunicipalityPending,
  getRegisterMunicipalitySuccess,
  getRegisterMunicipalityError,
  getRegisterCitizenSuccess,
  getRegisterCitizenPending,
  getRegisterCitizenError,
  getUserLoginPending,
  getUserLoginSuccess,
  getUserLoginError,
  getCurrentUserPending,
  getCurrentUserSuccess,
  getCurrentUserError,
} from "./actions";
import { AbpTokenProperies, decodeToken } from "@/utils/jwt";

export const MunicipalityRegisterProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(
    RegisterMunicipalityReducer,
    INITIAL_STATE_MUNICIPALITY
  );
  const instance = getAxiosInstance();

  const registerMunicipality = async (payload: IMunicipalityRegister) => {
    dispatch(getRegisterMunicipalityPending());
    const endpoint = `/services/app/Register/Register`;
    await instance
      .post(endpoint, payload)
      .then((response) => {
        const token = response.data.result.accessToken;
        const decoded = jwtDecode(token);
        sessionStorage.setItem("token", token);
        sessionStorage.setItem("role", JSON.stringify(decoded));
        dispatch(getRegisterMunicipalitySuccess(token));
      })
      .catch((error) => {
        console.error(error);
        dispatch(getRegisterMunicipalityError());
      });
  };

  return (
    <MunicipalityRegisterStateContext.Provider value={state}>
      <MunicipalityRegisterActionContext.Provider
        value={{
          registerMunicipality,
        }}
      >
        {children}
      </MunicipalityRegisterActionContext.Provider>
    </MunicipalityRegisterStateContext.Provider>
  );
};

export const useRegisterMunicipalityState = () => {
  const context = useContext(MunicipalityRegisterStateContext);
  if (!context) {
    throw new Error(
      "useRegisterMunicipalityState must be used within a RegisterMunicipalityProvider"
    );
  }
  return context;
};

export const useRegisterMunicipalityActions = () => {
  const context = useContext(MunicipalityRegisterActionContext);
  if (!context) {
    throw new Error(
      "useRegisterMunicipalityActions must be used within a RegisterMunicipalityProvider"
    );
  }
  return context;
};

export const CitizenRegisterProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(
    RegisterCitizenReducer,
    INITIAL_STATE_CITIZEN
  );
  const instance = getAxiosInstance();
  const { getCitizenList } = useCitizenActions();

  const registerCitizen = async (payload: ICitizenRegister) => {
    dispatch(getRegisterCitizenPending());
    const endpoint = `/services/app/Register/Register`;
    await instance
      .post(endpoint, payload)
      .then((response) => {
        dispatch(getRegisterCitizenSuccess(response.data));
        getCitizenList();
      })
      .catch((error) => {
        console.error(error);
        dispatch(getRegisterCitizenError());
      });
  };

  return (
    <CitizenRegisterStateContext.Provider value={state}>
      <CitizenRegisterActionContext.Provider
        value={{
          registerCitizen,
        }}
      >
        {children}
      </CitizenRegisterActionContext.Provider>
    </CitizenRegisterStateContext.Provider>
  );
};

export const useRegisterCitizenState = () => {
  const context = useContext(CitizenRegisterStateContext);
  if (!context) {
    throw new Error(
      "useRegisterCitizenState must be used within a RegisterCitizenProvider"
    );
  }
  return context;
};

export const useRegisterCitizenActions = () => {
  const context = useContext(CitizenRegisterActionContext);
  if (!context) {
    throw new Error(
      "useRegisterCitizenActions must be used within a RegisterCitizenProvider"
    );
  }
  return context;
};

export const UserLoginProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(UserLoginReducer, INITIAL_STATE_USER);
  const instance = getAxiosInstance();
  const { currentUser } = useCurrentUserActions();

  const userLogin = async (payload: IUserLogin) => {
    dispatch(getUserLoginPending());
    const endpoint = `/TokenAuth/Authenticate`;
    await instance
      .post(endpoint, payload)
      .then((response) => {
        const token = response.data.result.accessToken;
        const decoded = decodeToken(token);
        const userRole = decoded[AbpTokenProperies.role];
        const userId = decoded[AbpTokenProperies.nameidentifier];

        sessionStorage.setItem("token", token);
        sessionStorage.setItem("role", userRole);
        sessionStorage.setItem("userId", userId);

        currentUser();

        dispatch(getUserLoginSuccess(token));
      })
      .catch((error) => {
        console.error(error);
        dispatch(getUserLoginError());
      });
  };

  return (
    <UserLoginStateContext.Provider value={state}>
      <UserLoginActionContext.Provider
        value={{
          userLogin,
        }}
      >
        {children}
      </UserLoginActionContext.Provider>
    </UserLoginStateContext.Provider>
  );
};

export const useUserLoginState = () => {
  const context = useContext(UserLoginStateContext);
  if (!context) {
    throw new Error(
      "useUserLoginState must be used within a UserLoginProvider"
    );
  }
  return context;
};

export const useUserLoginActions = () => {
  const context = useContext(UserLoginActionContext);
  if (!context) {
    throw new Error(
      "useUserLoginActions must be used within a UserLoginProvider"
    );
  }
  return context;
};

export const CurrentUserProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(
    CurrentUserReducer,
    INITIAL_STATE_CURRENT
  );
  const instance = getAxiosInstance();

  const currentUser = async () => {
    // const token = sessionStorage.getItem("token")?.trim();
    dispatch(getCurrentUserPending());
    const endpoint = `services/app/Session/GetCurrentLoginInformations`;
    await instance
      .get(endpoint)
    await instance
      .get(endpoint)
      .then((response) => {
        const result = response.data.result.user.name;
        const municipalityName = result || "";
        sessionStorage.setItem("municipalityName", municipalityName);

        const result2 = response.data.result.user.name;

        const serviceProviderName = result2 || "";

        sessionStorage.setItem("serviceProviderName", serviceProviderName);

        sessionStorage.setItem(
          "currentUser",
          JSON.stringify(response.data.result.user.id)
        );
        dispatch(getCurrentUserSuccess(response.data.result.user));

        // dispatch(getCurrentUserSuccess(result));
      })
      .catch((error) => {
        console.error(error);
        dispatch(getCurrentUserError());
      });

  };

  return (
    <CurrentUserStateContext.Provider value={state}>
      <CurrentUserActionContext.Provider
        value={{
          currentUser,
        }}
      >
        {children}
      </CurrentUserActionContext.Provider>
    </CurrentUserStateContext.Provider>
  );
};

export const useCurrentUserState = () => {
  const context = useContext(CurrentUserStateContext);
  if (!context) {
    throw new Error(
      "useCurrentUserState must be used within a CurrentUserProvider"
    );
  }
  return context;
};

export const useCurrentUserActions = () => {
  const context = useContext(CurrentUserActionContext);
  if (!context) {
    throw new Error(
      "useCurrentUserActions must be used within a CurrentUserProvider"
    );
  }
  return context;
};
