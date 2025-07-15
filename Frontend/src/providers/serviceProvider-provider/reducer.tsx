import { handleActions } from "redux-actions";
import { INITIAL_STATE, IServiceProviderStateContext } from "./context";
import { ServiceProviderActionEnums } from "./actions";

export const ServiceProviderReducer = handleActions<IServiceProviderStateContext, IServiceProviderStateContext>(
    {
        [ServiceProviderActionEnums.getServiceProviderPending]: (state, action) => ({
            ...state,
            ...action.payload,
        }),
        [ServiceProviderActionEnums.getServiceProviderSuccess]: (state, action) => ({
            ...state,
            ...action.payload,
        }),
        [ServiceProviderActionEnums.getServiceProviderError]: (state, action) => ({
            ...state,
            ...action.payload,
        }),
        [ServiceProviderActionEnums.createServiceProviderPending]: (state, action) => ({
            ...state,
            ...action.payload,
        }),
        [ServiceProviderActionEnums.createServiceProviderSuccess]: (state, action) => ({
            ...state,
            ...action.payload,
        }),
        [ServiceProviderActionEnums.createServiceProviderError]: (state, action) => ({
            ...state,
            ...action.payload,
        }),
        [ServiceProviderActionEnums.updateServiceProviderPending]: (state, action) => ({
            ...state,
            ...action.payload,
        }),
        [ServiceProviderActionEnums.updateServiceProviderSuccess]: (state, action) => ({
            ...state,
            ...action.payload,
        }),
        [ServiceProviderActionEnums.updateServiceProviderError]: (state, action) => ({
            ...state,
            ...action.payload,
        }),
        [ServiceProviderActionEnums.deleteServiceProviderPending]: (state, action) => ({
            ...state,
            ...action.payload,
        }),
        [ServiceProviderActionEnums.deleteServiceProviderSuccess]: (state, action) => ({
            ...state,
            ...action.payload,
        }),
        [ServiceProviderActionEnums.deleteServiceProviderError]: (state, action) => ({
            ...state,
            ...action.payload,
        }),
    },
    INITIAL_STATE
)