import { getAxiosInstance } from "../../utils/axiosInstance";
import {
  INITIAL_STATE,
  IMunicipality,
  MunicipalityActionContext,
  MunicipalityStateContext,
} from "./context";
import { MunicipalityReducer } from "./reducer";
import { useContext, useReducer } from "react";
import {
  getMunicipalityListPending,
  getMunicipalityListSuccess,
  getMunicipalityListError,
  getMunicipalityPending,
  getMunicipalityError,
  createMunicipalityPending,
  createMunicipalitySuccess,
  createMunicipalityError,
  updateMunicipalityError,
  updateMunicipalitySuccess,
  updateMunicipalityPending,
  deleteMunicipalityPending,
  deleteMunicipalitySuccess,
  deleteMunicipalityError,
  getMunicipalitySuccess,
} from "./actions";

export const MunicipalityProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(MunicipalityReducer, INITIAL_STATE);
  const instance = getAxiosInstance();

  const getMunicipalityList = async () => {
      dispatch(getMunicipalityListPending());
      const endpoint = `/services/app/Municipality/GetAll`;
      await instance
        .get(endpoint)
        .then((response) => {
          const filteredData = response.data.data.map((municipality: IMunicipality) => ({
            name: municipality.name ?? "",
            buildingAddress: municipality.buildingAddress ?? "",
            latitude: municipality.latitude ?? "",
            longitude: municipality.longitude ?? "",
          }));
          dispatch(getMunicipalityListSuccess(filteredData));
        })
        .catch((error) => {
          console.error(error);
          dispatch(getMunicipalityListError());
        });
    };

  const getMunicipality = async (id: string) => {
    dispatch(getMunicipalityPending());
    const endpoint = `/municipality/${id}`;
    await instance
      .get(endpoint)
      .then((response) => {
        dispatch(getMunicipalitySuccess(response.data));
      })
      .catch((error) => {
        console.error(error);
        dispatch(getMunicipalityError());
      });
  };

  const createMunicipality = async (trainer: IMunicipality) => {
    dispatch(createMunicipalityPending());
    const endpoint = `/municipality`;
    await instance
      .post(endpoint, trainer)
      .then((response) => {
        dispatch(createMunicipalitySuccess(response.data));
      })
      .catch((error) => {
        console.error(error);
        dispatch(createMunicipalityError());
      });
  };

  const updateMunicipality = async (municipality: IMunicipality) => {
    dispatch(updateMunicipalityPending());
    const endpoint = `/municipality/${municipality.id}`;
    await instance
      .put(endpoint, municipality)
      .then((response) => {
        dispatch(updateMunicipalitySuccess(response.data));
      })
      .catch((error) => {
        console.error(error);
        dispatch(updateMunicipalityError());
      });
  };

  const deleteMunicipality = async (id: string) => {
    dispatch(deleteMunicipalityPending());
    const endpoint = `https:/municipality/${id}`;
    await instance
      .delete(endpoint)
      .then((response) => {
        dispatch(deleteMunicipalitySuccess(response.data));
      })
      .catch((error) => {
        console.error(error);
        dispatch(deleteMunicipalityError());
      });
  };

  return (
    <MunicipalityStateContext.Provider value={state}>
      <MunicipalityActionContext.Provider
        value={{
          getMunicipalityList,
          getMunicipality,
          createMunicipality,
          updateMunicipality,
          deleteMunicipality,
        }}
      >
        {children}
      </MunicipalityActionContext.Provider>
    </MunicipalityStateContext.Provider>
  );
};

export const useMunicipalityState = () => {
  const context = useContext(MunicipalityStateContext);
  if (!context) {
    throw new Error("useMunicipalityState must be used within a MunicipalityProvider");
  }
  return context;
};

export const useMunicipalityActions = () => {
  const context = useContext(MunicipalityActionContext);
  if (!context) {
    throw new Error("useMunicipalityActions must be used within a MunicipalityProvider");
  }
  return context;
};
