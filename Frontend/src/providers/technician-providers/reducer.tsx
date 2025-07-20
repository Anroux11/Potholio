import { handleActions } from "redux-actions";
import { INITIAL_STATE, ITechnicianStateContext } from "./context";
import { TechnicianActionEnums } from "./actions";

export const TechnicianReducer = handleActions<ITechnicianStateContext, ITechnicianStateContext>(
    {
        [TechnicianActionEnums.getTechnicianListPending]: (state, action) => ({
            ...state,
            ...action.payload,
        }),
        [TechnicianActionEnums.getTechnicianListSuccess]: (state, action) => ({
            ...state,
            ...action.payload,
        }),
        [TechnicianActionEnums.getTechnicianListError]: (state, action) => ({
            ...state,
            ...action.payload,
        }),
        [TechnicianActionEnums.getTechnicianPending]: (state, action) => ({
            ...state,
            ...action.payload,
        }),
        [TechnicianActionEnums.getTechnicianSuccess]: (state, action) => ({
            ...state,
            ...action.payload,
        }),
        [TechnicianActionEnums.getTechnicianError]: (state, action) => ({
            ...state,
            ...action.payload,
        }),
        [TechnicianActionEnums.createTechnicianPending]: (state, action) => ({
            ...state,
            ...action.payload,
        }),
        [TechnicianActionEnums.createTechnicianSuccess]: (state, action) => ({
            ...state,
            ...action.payload,
        }),
        [TechnicianActionEnums.createTechnicianError]: (state, action) => ({
            ...state,
            ...action.payload,
        }),
        [TechnicianActionEnums.updateTechnicianPending]: (state, action) => ({
            ...state,
            ...action.payload,
        }),
        [TechnicianActionEnums.updateTechnicianSuccess]: (state, action) => ({
            ...state,
            ...action.payload,
        }),
        [TechnicianActionEnums.updateTechnicianError]: (state, action) => ({
            ...state,
            ...action.payload,
        }),
        [TechnicianActionEnums.deleteTechnicianPending]: (state, action) => ({
            ...state,
            ...action.payload,
        }),
        [TechnicianActionEnums.deleteTechnicianSuccess]: (state, action) => ({
            ...state,
            ...action.payload,
        }),
        [TechnicianActionEnums.deleteTechnicianError]: (state, action) => ({
            ...state,
            ...action.payload,
        }),
    },
    INITIAL_STATE
)