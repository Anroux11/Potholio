import { getAxiosInstance } from "../../utils/axiosInstance";
import {
  INITIAL_STATE,
  ICitizen,
  CitizenActionContext,
  CitizenStateContext,
} from "./context";
import { CitizenReducer } from "./reducer";
import { useContext, useReducer } from "react";
import {
  getCitizenListSuccess,
  getCitizenListPending,
  getCitizenListError,
  getCitizenPending,
  getCitizenError,
  createCitizenPending,
  createCitizenSuccess,
  createCitizenError,
  updateCitizenError,
  updateCitizenSuccess,
  updateCitizenPending,
  deleteCitizenPending,
  deleteCitizenSuccess,
  deleteCitizenError,
} from "./actions";

export const CitizenProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(CitizenReducer, INITIAL_STATE);
  const instance = getAxiosInstance();

  const getCitizenList = async () => {
    dispatch(getCitizenListPending());
    const endpoint = `services/app/User/GetAll`;
    await instance
      .get(endpoint)
      .then((response) => {
        const filteredData = response.data.result.items
          .filter((citizen: ICitizen) =>
            citizen.roleNames?.includes("MUNICIPALITY")
          )
          .map((citizen: ICitizen) => ({
            name: citizen.name || "",
            userName: citizen.userName || "",
            surname: citizen.surname || "",
            emailAddress: citizen.emailAddress || "",
            roleName: citizen.roleNames?.[0] || "",
            activeState: citizen.isActive ?? true,
          }));
        dispatch(getCitizenListSuccess(filteredData));
      })
      .catch((error) => {
        console.error(error);
        dispatch(getCitizenListError());
      });
  };

  const getCitizen = async (id: string) => {
    dispatch(getCitizenPending());
    const endpoint = `services/app/User/Get?Id=${id}`;
    await instance
      .get(endpoint)
      .then((response) => {
        dispatch(getCitizenListSuccess(response.data));
      })
      .catch((error) => {
        console.error(error);
        dispatch(getCitizenError());
      });
  };

  const createCitizen = async (citizen: ICitizen) => {
    const token = sessionStorage.getItem("token")?.trim();
    dispatch(createCitizenPending());
    const endpoint = `/citizen`;
    await instance
      .post(endpoint, citizen, {
        headers: {
          Authorization: `${token}`,
        },
      })
      .then((response) => {
        dispatch(createCitizenSuccess(response.data));
      })
      .catch((error) => {
        console.error(error);
        dispatch(createCitizenError());
      });
  };

  const updateCitizen = async (citizen: ICitizen) => {
    dispatch(updateCitizenPending());
    const endpoint = `services/app/User/Update`;
    await instance
      .put(endpoint, citizen)
      .then((response) => {
        dispatch(updateCitizenSuccess(response.data));
      })
      .catch((error) => {
        console.error(error);
        dispatch(updateCitizenError());
      });
  };

  const deleteCitizen = async (id: string) => {
    dispatch(deleteCitizenPending());
    const endpoint = `services/app/User/Delete?Id=${id}`;
    await instance
      .delete(endpoint)
      .then((response) => {
        dispatch(deleteCitizenSuccess(response.data));
      })
      .catch((error) => {
        console.error(error);
        dispatch(deleteCitizenError());
      });
  };

  return (
    <CitizenStateContext.Provider value={state}>
      <CitizenActionContext.Provider
        value={{
          getCitizenList,
          getCitizen,
          createCitizen,
          updateCitizen,
          deleteCitizen,
        }}
      >
        {children}
      </CitizenActionContext.Provider>
    </CitizenStateContext.Provider>
  );
};

export const useCitizenState = () => {
  const context = useContext(CitizenStateContext);
  if (!context) {
    throw new Error("useCitizenState must be used within a CitizenProvider");
  }
  return context;
};

export const useCitizenActions = () => {
  const context = useContext(CitizenActionContext);
  if (!context) {
    throw new Error("useCitizenActions must be used within a CitizenProvider");
  }
  return context;
};
