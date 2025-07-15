import { getAxiosInstance } from "../../utils/axiosInstance";
import {
  INITIAL_STATE,
  IIncident,
  IncidentActionContext,
  IncidentStateContext,
} from "./context";
import { IncidentReducer } from "./reducer";
import { useContext, useReducer } from "react";
import {
  getIncidentsSuccess,
  getIncidentsPending,
  getIncidentsError,
  getIncidentPending,
  getIncidentError,
  createIncidentPending,
  createIncidentSuccess,
  createIncidentError,
  updateIncidentError,
  updateIncidentSuccess,
  updateIncidentPending,
  deleteIncidentPending,
  deleteIncidentSuccess,
  deleteIncidentError,
  getIncidentSuccess,
} from "./actions";

export const IncidentProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(IncidentReducer, INITIAL_STATE);
  const instance = getAxiosInstance();

  const getIncidents = async () => {
    dispatch(getIncidentsPending());
    const endpoint = `incident/`;
    await instance
      .get(endpoint)
      .then((response) => {
        const filteredData = response.data.data.map((food: IIncident) => ({
          description: food.description ?? "",
          status: food.status ?? "",
          imageUrl: food.imageUrl ?? "",
          geolocation: food.geolocation ?? "",
          //   reportingUser: ;
        }));
        dispatch(getIncidentsSuccess(filteredData));
        console.log("food items", filteredData);
      })
      .catch((error) => {
        console.error(error);
        dispatch(getIncidentsError());
      });
  };

  const getIncident = async (id: string) => {
    dispatch(getIncidentPending());
    const endpoint = `/api/incident${id}`;
    await instance
      .get(endpoint)
      .then((response) => {
        dispatch(getIncidentSuccess(response.data));
      })
      .catch((error) => {
        console.error(error);
        dispatch(getIncidentError());
      });
  };

  const createIncident = async (incident: IIncident) => {
    dispatch(createIncidentPending());
    const endpoint = `food`;
    await instance
      .post(endpoint, incident)
      .then((response) => {
        dispatch(createIncidentSuccess(response.data));
      })
      .catch((error) => {
        console.error(error);
        dispatch(createIncidentError());
      });
  };

  const updateIncident = async (incident: IIncident) => {
    dispatch(updateIncidentPending());
    const endpoint = `/incidents/${incident.id}`;
    await instance
      .put(endpoint, incident)
      .then((response) => {
        dispatch(updateIncidentSuccess(response.data));
      })
      .catch((error) => {
        console.error(error);
        dispatch(updateIncidentError());
      });
  };

  const deleteIncident = async (id: string) => {
    dispatch(deleteIncidentPending());
    const endpoint = `https://fakestoreapi.com/incidents/${id}`;
    await instance
      .delete(endpoint)
      .then((response) => {
        dispatch(deleteIncidentSuccess(response.data));
      })
      .catch((error) => {
        console.error(error);
        dispatch(deleteIncidentError());
      });
  };

  return (
    <IncidentStateContext.Provider value={state}>
      <IncidentActionContext.Provider
        value={{
          getIncidents,
          getIncident,
          createIncident,
          updateIncident,
          deleteIncident,
        }}
      >
        {children}
      </IncidentActionContext.Provider>
    </IncidentStateContext.Provider>
  );
};

export const useIncidentState = () => {
  const context = useContext(IncidentStateContext);
  if (!context) {
    throw new Error("useIncidentState must be used within a IncidentProvider");
  }
  return context;
};

export const useIncidentActions = () => {
  const context = useContext(IncidentActionContext);
  if (!context) {
    throw new Error(
      "useIncidentActions must be used within a IncidentProvider"
    );
  }
  return context;
};
