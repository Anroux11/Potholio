import { createAction } from "redux-actions";
import { ITechnician, ITechnicianStateContext } from "./context";

export enum TechnicianActionEnums {
    getTechnicianListPending = "GET_TECHNICIAN_LIST_PENDING",
    getTechnicianListSuccess = "GET_TECHNICIAN_LIST_SUCCESS",
    getTechnicianListError = "GET_TECHNICIAN_LIST_ERROR",

    getTechnicianPending = "GET_TECHNICIAN_PENDING",
    getTechnicianSuccess = "GET_TECHNICIAN_SUCCESS",
    getTechnicianError = "GET_TECHNICIAN_ERROR",

    createTechnicianPending = "CREATE_TECHNICIAN_PENDING",
    createTechnicianSuccess = "CREATE_TECHNICIAN_SUCCESS",
    createTechnicianError = "CREATE_TECHNICIAN_ERROR",

    updateTechnicianPending = "UPDATE_TECHNICIAN_PENDING",
    updateTechnicianSuccess = "UPDATE_TECHNICIAN_SUCCESS",
    updateTechnicianError = "UPDATE_TECHNICIAN_ERROR",

    deleteTechnicianPending = "DELETE_TECHNICIAN_PENDING",
    deleteTechnicianSuccess = "DELETE_TECHNICIAN_SUCCESS",
    deleteTechnicianError = "DELETE_TECHNICIAN_ERROR",
}

export const getTechnicianListPending = createAction<ITechnicianStateContext>(
    TechnicianActionEnums.getTechnicianListPending, () => (
        {
            isPending: true,
            isSuccess: false,
            isError: false,
        }
    )
);

export const getTechnicianListSuccess = createAction<ITechnicianStateContext, ITechnician[]>(
    TechnicianActionEnums.getTechnicianListSuccess, (technicians: ITechnician[]) => (
        {
            isPending: false,
            isSuccess: true,
            isError: false,
            technicians,
        }
    )
);

export const getTechnicianListError = createAction<ITechnicianStateContext>(
    TechnicianActionEnums.getTechnicianListError, () => (
        {
            isPending: false,
            isSuccess: false,
            isError: true,
        }
    )
);

export const getTechnicianPending = createAction<ITechnicianStateContext>(
    TechnicianActionEnums.getTechnicianPending, () => (
        {
            isPending: true,
            isSuccess: false,
            isError: false
        }
    )
);

export const getTechnicianSuccess = createAction<ITechnicianStateContext, ITechnician>(
    TechnicianActionEnums.getTechnicianSuccess, (technician?: ITechnician) => (
        {
            isPending: false,
            isSuccess: true,
            isError: false,
            technician,
        }
    )
);

export const getTechnicianError = createAction<ITechnicianStateContext>(
    TechnicianActionEnums.getTechnicianError, () => (
        {
            isPending: false,
            isSuccess: false,
            isError:true,
        }
    )
);

export const createTechnicianPending = createAction<ITechnicianStateContext>(
    TechnicianActionEnums.createTechnicianPending, () => (
        {
            isPending: true,
            isSuccess: false,
            isError: false,
        }
    )
);

export const createTechnicianSuccess = createAction<ITechnicianStateContext, ITechnician>(
    TechnicianActionEnums.createTechnicianSuccess, (technician?: ITechnician) => (
        {
            isPending: false,
            isSuccess: true,
            isError: false,
            technician,
        }
    )
);

export const createTechnicianError = createAction<ITechnicianStateContext>(
    TechnicianActionEnums.createTechnicianError, () => (
        {
            isPending: false,
            isSuccess: false,
            isError: true,
        }
    )
);

export const updateTechnicianPending = createAction<ITechnicianStateContext>(
    TechnicianActionEnums.updateTechnicianPending, () => (
        {
            isPending: true,
            isSuccess: false,
            isError: false,
        }
    )
);

export const updateTechnicianSuccess = createAction<ITechnicianStateContext, ITechnician>(
    TechnicianActionEnums.updateTechnicianSuccess, (technician?: ITechnician) => (
        {
            isPending: false,
            isSuccess: true,
            isError: false,
            technician,
        }
    )
);

export const updateTechnicianError = createAction<ITechnicianStateContext>(
    TechnicianActionEnums.updateTechnicianError, () => (
        {
            isPending: false,
            isSuccess: false,
            isError: true,
        }
    )
);

export const deleteTechnicianPending = createAction<ITechnicianStateContext>(
    TechnicianActionEnums.deleteTechnicianPending, () => (
        {
            isPending: true,
            isSuccess: false,
            isError: false,
        }
    )
);

export const deleteTechnicianSuccess = createAction<ITechnicianStateContext, ITechnician>(
    TechnicianActionEnums.deleteTechnicianSuccess, (technician?: ITechnician) => (
        {
            isPending: false,
            isSuccess: true,
            isError: false,
            technician,
        }
    )
);

export const deleteTechnicianError = createAction<ITechnicianStateContext>(
    TechnicianActionEnums.deleteTechnicianError, () => (
        {
            isPending: false,
            isSuccess: false,
            isError: true,
        }
    )
);