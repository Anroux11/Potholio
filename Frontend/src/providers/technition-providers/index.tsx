import { getAxiosInstance } from "../../utils/axiosInstance";
import {
    INITIAL_STATE,
    ITechnician,
    TechnicianStateContext,
    TechnicianActionContext,
} from "./context";
import { TechnicianReducer } from "./reducer";
import { useContext, useReducer } from "react";
import {
    getTechnicianListPending,
    getTechnicianListSuccess,
    getTechnicianListError,
    getTechnicianPending,
    getTechnicianSuccess,
    getTechnicianError,
    createTechnicianPending,
    createTechnicianSuccess,
    createTechnicianError,
    updateTechnicianPending,
    updateTechnicianSuccess,
    updateTechnicianError,
    deleteTechnicianPending,
    deleteTechnicianSuccess,
    deleteTechnicianError
} from "./actions";

export const TechnicianProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [state, dispatch] = useReducer(TechnicianReducer, INITIAL_STATE);
    const instance = getAxiosInstance();

    const getTechnicianList = async () => {
        dispatch(getTechnicianListPending());
        const endpoint = `technician/`;
        await instance
            .get(endpoint)
            .then((response) => {
                const filteredData = response.data.data.map((technician: ITechnician) => ({
                    name: technician.name ?? "",
                    email: technician.email ?? "",
                    contactNumber: technician.contactNumber ?? "",
                    password: technician.password ?? "",
                }));
                dispatch(getTechnicianListSuccess(filteredData));
            })
            .catch((error) => {
                console.error(error);
                dispatch(getTechnicianListError());
            });
    };

    const getTechnician = async (id: string) => {
        dispatch(getTechnicianPending());
        const endpoint = `/technician/${id}`;
        await instance
            .get(endpoint)
            .then((response) => {
                dispatch(getTechnicianSuccess(response.data));
            })
            .catch((error) => {
                console.error(error);
                dispatch(getTechnicianError());
            });
    };

    const createTechnician = async (technician: ITechnician) => {
        dispatch(createTechnicianPending());
        const endpoint = `/technician`;
        await instance
            .post(endpoint, technician)
            .then((response) => {
                dispatch(createTechnicianSuccess(response.data));
            })
            .catch((error) => {
                console.error(error);
                dispatch(createTechnicianError());
            });
    };

    const updateTechnician = async (technician: ITechnician) => {
        dispatch(updateTechnicianPending());
        const endpoint = `/technician/${technician.id}`;
        await instance
            .put(endpoint, technician)
            .then((response) => {
                dispatch(updateTechnicianSuccess(response.data));
            })
            .catch((error) => {
                console.error(error);
                dispatch(updateTechnicianError());
            });
    };

    const deleteTechnician = async (id: string) => {
        dispatch(deleteTechnicianPending());
        const endpoint = `/response.data.result.accesstoken/${id}`;
        await instance
            .delete(endpoint)
            .then((response) => {
                dispatch(deleteTechnicianSuccess(response.data));
            })
            .catch((error) => {
                console.error(error);
                dispatch(deleteTechnicianError());
            });
    };

    return (
        <TechnicianStateContext.Provider value={state}>
            <TechnicianActionContext.Provider value={{
                getTechnicianList,
                getTechnician,
                createTechnician,
                updateTechnician,
                deleteTechnician
            }}>
                {children}
            </TechnicianActionContext.Provider>
        </TechnicianStateContext.Provider>
    );
};

export const useTechnicianState = () => {
    const context = useContext(TechnicianStateContext);
    if (!context) {
        throw new Error("useTechnicianState must be used with a TechnicianProvider");
    }
    return context;
}

export const useTechnicianActions = () => {
    const context = useContext(TechnicianActionContext);
    if (!context) {
        throw new Error("useTechnicianActions must be used with a TechnicianProvider");
    }
    return context;
}