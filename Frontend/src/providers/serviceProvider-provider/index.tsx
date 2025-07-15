import { getAxiosInstance } from "../../utils/axiosInstance";
import {
    INITIAL_STATE,
    IServiceProvider,
    ServiceProviderStateContext,
    ServiceProviderActionContext,
} from "./context";
import { ServiceProviderReducer } from "./reducer";
import { useContext, useReducer } from "react";
import {
    getServiceProviderPending,
    getServiceProviderSuccess,
    getServiceProviderError,
    createServiceProviderPending,
    createServiceProviderSuccess,
    createServiceProviderError,
    updateServiceProviderPending,
    updateServiceProviderSuccess,
    updateServiceProviderError,
    deleteServiceProviderPending,
    deleteServiceProviderSuccess,
    deleteServiceProviderError
} from "./actions";

export const ServiceProviderProvider = ({
    children,
}: {
    children: React.ReactNode;
}) => {
    const [state, dispatch] = useReducer(ServiceProviderReducer, INITIAL_STATE);
    const instance = getAxiosInstance();

    const getServiceProvider = async (id: string) => {
        dispatch(getServiceProviderPending());
        const endpoint = `/serviceProvider/${id}`;
        await instance
            .get(endpoint)
            .then((response) => {
                dispatch(getServiceProviderSuccess(response.data));
            })
            .catch((error) => {
                console.error(error);
                dispatch(getServiceProviderError());
            });
    };

    const createServiceProvider = async (serviceProvider: IServiceProvider) => {
        dispatch(createServiceProviderPending());
        const endpoint = `/serviceProvider`;
        await instance
            .post(endpoint, serviceProvider)
            .then((response) => {
                dispatch(createServiceProviderSuccess(response.data));
            })
            .catch((error) => {
                console.error(error);
                dispatch(createServiceProviderError());
            });
    };

    const updateServiceProvider = async (serviceProvider: IServiceProvider) => {
        dispatch(updateServiceProviderPending());
        const endpoint = `/serviceProvider/${serviceProvider.id}`;
        await instance
            .put(endpoint, serviceProvider)
            .then((response) => {
                dispatch(updateServiceProviderSuccess(response.data));
            })
            .catch((error) => {
                console.error(error);
                dispatch(updateServiceProviderError());
            });
    };

    const deleteServiceProvider = async (id: string) => {
        dispatch(deleteServiceProviderPending());
        const endpoint = `/serviceProvider/${id}`;
        await instance
            .delete(endpoint)
            .then((response) => {
                dispatch(deleteServiceProviderSuccess(response.data));
            })
            .catch((error) => {
                console.error(error);
                dispatch(deleteServiceProviderError());
            });
    };

    return (
        <ServiceProviderStateContext.Provider value={state}>
            <ServiceProviderActionContext.Provider value={{
                getServiceProvider,
                createServiceProvider,
                updateServiceProvider,
                deleteServiceProvider
            }}>
                {children}
            </ServiceProviderActionContext.Provider>
        </ServiceProviderStateContext.Provider>
    );
};

export const useServiceProviderState = () => {
    const context = useContext(ServiceProviderStateContext);
    if (!context) {
        throw new Error("useServiceProviderState must be used with a ServiceProviderProvider");
    }
    return context;
}

export const useServiceProviderActions = () => {
    const context = useContext(ServiceProviderActionContext);
    if (!context) {
        throw new Error("useServiceProviderActions must be used with a ServiceProviderProvider");
    }
    return context;
}