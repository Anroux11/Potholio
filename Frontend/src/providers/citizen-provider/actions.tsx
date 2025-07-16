import { createAction } from "redux-actions";
import { ICitizen, ICitizenStateContext } from "./context";

export enum CitizenActionEnums {
  getCitizenListPending = "GET_CITIZEN_LIST_PENDING",
  getCitizenListSuccess = "GET_CITIZENS_LIST_SUCCESS",
  getCitizenListError = "GET_CITIZENS_LIST_ERROR",

  getCitizenPending = "GET_CITIZEN_PENDING",
  getCitizenSuccess = "GET_CITIZEN_SUCCESS",
  getCitizenError = "GET_CITIZEN_ERROR",

  createCitizenPending = "CREATE_CITIZEN_PENDING",
  createCitizenSuccess = "CREATE_CITIZEN_SUCCESS",
  createCitizenError = "CREATE_CITIZEN_ERROR",

  updateCitizenPending = "UPDATE_CITIZEN_PENDING",
  updateCitizenSuccess = "UPDATE_CITIZEN_SUCCESS",
  updateCitizenError = "UPDATE_CITIZEN_ERROR",

  deleteCitizenPending = "DELETE_CITIZEN_PENDING",
  deleteCitizenSuccess = "DELETE_CITIZEN_SUCCESS",
  deleteCitizenError = "DELETE_CITIZEN_ERROR",
}

export const getCitizenListPending = createAction<ICitizenStateContext>(
  CitizenActionEnums.getCitizenListPending,
  () => ({ isPending: true, isSuccess: false, isError: false })
);

export const getCitizenListSuccess = createAction<ICitizenStateContext, ICitizen[]>(
  CitizenActionEnums.getCitizenListSuccess,
  (citizens: ICitizen[]) => ({
    isPending: false,
    isSuccess: true,
    isError: false,
    citizens,
  })
);

export const getCitizenListError = createAction<ICitizenStateContext>(
  CitizenActionEnums.getCitizenListError,
  () => ({ isPending: false, isSuccess: false, isError: true })
);

export const getCitizenPending = createAction<ICitizenStateContext>(
  CitizenActionEnums.getCitizenPending,
  () => ({ isPending: true, isSuccess: false, isError: false })
);

export const getCitizenSuccess = createAction<ICitizenStateContext, ICitizen>(
  CitizenActionEnums.getCitizenSuccess,
  (citizen: ICitizen) => ({
    isPending: false,
    isSuccess: true,
    isError: false,
    citizen,
  })
);

export const getCitizenError = createAction<ICitizenStateContext>(
  CitizenActionEnums.getCitizenError,
  () => ({ isPending: false, isSuccess: false, isError: true })
);

export const createCitizenPending = createAction<ICitizenStateContext>(
  CitizenActionEnums.createCitizenPending,
  () => ({ isPending: true, isSuccess: false, isError: false })
);

export const createCitizenSuccess = createAction<ICitizenStateContext, ICitizen>(
  CitizenActionEnums.createCitizenSuccess,
  (citizen: ICitizen) => ({
    isPending: false,
    isSuccess: true,
    isError: false,
    citizen,
  })
);

export const createCitizenError = createAction<ICitizenStateContext>(
  CitizenActionEnums.createCitizenError,
  () => ({ isPending: false, isSuccess: false, isError: true })
);

export const updateCitizenPending = createAction<ICitizenStateContext>(
  CitizenActionEnums.updateCitizenPending,
  () => ({ isPending: true, isSuccess: false, isError: false })
);

export const updateCitizenSuccess = createAction<ICitizenStateContext, ICitizen>(
  CitizenActionEnums.updateCitizenSuccess,
  (citizen: ICitizen) => ({
    isPending: false,
    isSuccess: true,
    isError: false,
    citizen,
  })
);

export const updateCitizenError = createAction<ICitizenStateContext>(
  CitizenActionEnums.updateCitizenError,
  () => ({ isPending: false, isSuccess: false, isError: true })
);

export const deleteCitizenPending = createAction<ICitizenStateContext>(
  CitizenActionEnums.deleteCitizenPending,
  () => ({ isPending: true, isSuccess: false, isError: false })
);

export const deleteCitizenSuccess = createAction<ICitizenStateContext, ICitizen>(
  CitizenActionEnums.deleteCitizenSuccess,
  (citizen: ICitizen) => ({
    isPending: false,
    isSuccess: true,
    isError: false,
    citizen,
  })
);

export const deleteCitizenError = createAction<ICitizenStateContext>(
  CitizenActionEnums.deleteCitizenError,
  () => ({ isPending: false, isSuccess: false, isError: true })
);
