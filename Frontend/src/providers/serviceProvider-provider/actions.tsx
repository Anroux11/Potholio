import { createAction } from "redux-actions";
import { IServiceProvider, IServiceProviderStateContext } from "./context";

export enum ServiceProviderActionEnums {
    getServiceProviderPending = "GET_SERVICE_PROVIDER_PENDING",
    getServiceProviderSuccess = "GET_SERVICE_PROVIDER_SUCCESS",
    getServiceProviderError = "GET_SERVICE_PROVIDER_ERROR",

    createServiceProviderPending = "CREATE_SERVICE_PROVIDER_PENDING",
    createServiceProviderSuccess = "CREATE_SERVICE_PROVIDER_SUCCESS",
    createServiceProviderError = "CREATE_SERVICE_PROVIDER_ERROR",

    updateServiceProviderPending = "UPDATE_SERVICE_PROVIDER_PENDING",
    updateServiceProviderSuccess = "UPDATE_SERVICE_PROVIDER_SUCCESS",
    updateServiceProviderError = "UPDATE_SERVICE_PROVIDER_ERROR",

    deleteServiceProviderPending = "DELETE_SERVICE_PROVIDER_PENDING",
    deleteServiceProviderSuccess = "DELETE_SERVICE_PROVIDER_SUCCESS",
    deleteServiceProviderError = "DELETE_SERVICE_PROVIDER_ERROR",
}

export const getServiceProviderPending = createAction<IServiceProviderStateContext>(
    ServiceProviderActionEnums.getServiceProviderPending, () => (
        {
            isPending: true,
            isSuccess: false,
            isError: false
        }
    )
);

export const getServiceProviderSuccess = createAction<IServiceProviderStateContext, IServiceProvider>(
    ServiceProviderActionEnums.getServiceProviderSuccess, (serviceProvider?: IServiceProvider) => (
        {
            isPending: false,
            isSuccess: true,
            isError: false,
            serviceProvider,
        }
    )
);

export const getServiceProviderError = createAction<IServiceProviderStateContext>(
    ServiceProviderActionEnums.getServiceProviderError, () => (
        {
            isPending: false,
            isSuccess: false,
            isError:true,
        }
    )
);

export const createServiceProviderPending = createAction<IServiceProviderStateContext>(
    ServiceProviderActionEnums.createServiceProviderPending, () => (
        {
            isPending: true,
            isSuccess: false,
            isError: false,
        }
    )
);

export const createServiceProviderSuccess = createAction<IServiceProviderStateContext, IServiceProvider>(
    ServiceProviderActionEnums.createServiceProviderSuccess, (serviceProvider?: IServiceProvider) => (
        {
            isPending: false,
            isSuccess: true,
            isError: false,
            serviceProvider,
        }
    )
);

export const createServiceProviderError = createAction<IServiceProviderStateContext>(
    ServiceProviderActionEnums.createServiceProviderError, () => (
        {
            isPending: false,
            isSuccess: false,
            isError: true,
        }
    )
);

export const updateServiceProviderPending = createAction<IServiceProviderStateContext>(
    ServiceProviderActionEnums.updateServiceProviderPending, () => (
        {
            isPending: true,
            isSuccess: false,
            isError: false,
        }
    )
);

export const updateServiceProviderSuccess = createAction<IServiceProviderStateContext, IServiceProvider>(
    ServiceProviderActionEnums.updateServiceProviderSuccess, (serviceProvider?: IServiceProvider) => (
        {
            isPending: false,
            isSuccess: true,
            isError: false,
            serviceProvider,
        }
    )
);

export const updateServiceProviderError = createAction<IServiceProviderStateContext>(
    ServiceProviderActionEnums.updateServiceProviderError, () => (
        {
            isPending: false,
            isSuccess: false,
            isError: true,
        }
    )
);

export const deleteServiceProviderPending = createAction<IServiceProviderStateContext>(
    ServiceProviderActionEnums.deleteServiceProviderPending, () => (
        {
            isPending: true,
            isSuccess: false,
            isError: false,
        }
    )
);

export const deleteServiceProviderSuccess = createAction<IServiceProviderStateContext, IServiceProvider>(
    ServiceProviderActionEnums.deleteServiceProviderSuccess, (serviceProvider?: IServiceProvider) => (
        {
            isPending: false,
            isSuccess: true,
            isError: false,
            serviceProvider,
        }
    )
);

export const deleteServiceProviderError = createAction<IServiceProviderStateContext>(
    ServiceProviderActionEnums.deleteServiceProviderError, () => (
        {
            isPending: false,
            isSuccess: false,
            isError: true,
        }
    )
);