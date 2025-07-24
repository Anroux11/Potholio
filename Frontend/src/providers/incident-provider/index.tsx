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
  getIncidentListSuccess,
  getIncidentListPending,
  getIncidentListError,
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
import { useCurrentUserActions } from "../auth-provider";

export const IncidentProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [state, dispatch] = useReducer(IncidentReducer, INITIAL_STATE);
  const instance = getAxiosInstance();
  const { currentUser } = useCurrentUserActions();

  const getIncidentList = async () => {
    dispatch(getIncidentListPending());
    const endpoint = `/services/app/Incident/GetAll`;
    await instance
      .get(endpoint)
      .then((response) => {
        currentUser();
        const userId = parseInt(sessionStorage.getItem("userId") || "");
        const municipality = (sessionStorage.getItem("municipalityName") || "").toString();
        const filteredData = response.data.result.items
          .filter((incident: IIncident) =>
            incident.reportingUserId === userId ||
            incident.municipalityName === municipality || incident.serviceProviderName === sessionStorage.getItem("serviceProviderName")
          )
          .sort((a: IIncident, b: IIncident) =>
            new Date(b.incidentAddress?.creationTime ?? "").getTime() -
            new Date(a.incidentAddress?.creationTime ?? "").getTime()
          )
          .map((incident: IIncident) => ({
            id: incident.id ?? "",
            description: incident.description ?? "",
            status: incident.status ?? "",
            imageUrl: incident.imageUrl ?? "",
            latitude: incident.latitude ?? null,
            longitude: incident.longitude ?? null,
            incidentAddress: {
              city: incident.incidentAddress?.city ?? "Unknown",
              province: incident.incidentAddress?.province ?? "Unknown",
            },
            municipalityName: incident.municipalityName ?? "",
            reportingUserId: incident.reportingUserId ?? 0,
            serviceProviderName: incident.serviceProviderName ?? "",
          }));
        dispatch(getIncidentListSuccess(filteredData));
      })
      .catch((error) => {
        console.error(error);
        dispatch(getIncidentListError());
      });
  };

  const getIncident = async (id: string) => {
    dispatch(getIncidentPending());
    const endpoint = `services/app/Incident/Get?Id=${id}`;
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
    const endpoint = `services/app/Incident/Create`;
    await instance
      .post(endpoint, incident)
      .then((response) => {
        dispatch(createIncidentSuccess(response.data.data));
      })
      .catch((error) => {
        console.error(error);
        dispatch(createIncidentError());
      });
  };

  const updateIncident = async (incident: IIncident) => {
    dispatch(updateIncidentPending());
    const endpoint = `services/app/Incident/Update`;
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
    const endpoint = `services/app/Incident/Delete?Id=${id}`;
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
          getIncidentList,
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
