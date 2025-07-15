import { handleActions } from "redux-actions";
import { INITIAL_STATE, ICitizenStateContext } from "./context";
import { CitizenActionEnums } from "./actions";

export const CitizenReducer = handleActions<
  ICitizenStateContext,
  ICitizenStateContext
>(
  {
    [CitizenActionEnums.getCitizensPending]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [CitizenActionEnums.getCitizensSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [CitizenActionEnums.getCitizensError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [CitizenActionEnums.getCitizenPending]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [CitizenActionEnums.getCitizenSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [CitizenActionEnums.getCitizenError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [CitizenActionEnums.createCitizenPending]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [CitizenActionEnums.createCitizenSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [CitizenActionEnums.createCitizenError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [CitizenActionEnums.updateCitizenPending]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [CitizenActionEnums.updateCitizenSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [CitizenActionEnums.updateCitizenError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [CitizenActionEnums.deleteCitizenPending]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [CitizenActionEnums.deleteCitizenSuccess]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
    [CitizenActionEnums.deleteCitizenError]: (state, action) => ({
      ...state,
      ...action.payload,
    }),
  },
  INITIAL_STATE
);
