import { createContext } from "react";
export interface IServiceProvider {
    id: string;
    name: string;
    email: string;
    address: string;
    contactNumber: number;
    password: string;
    role: string;
}

export interface IServiceProviderStateContext {
    isPending: boolean;
    isSuccess: boolean;
    isError: boolean;
    serviceProvider?: IServiceProvider;
}

export interface IServiceProviderActionContext {
    getServiceProvider: (id: string) => void;
    createServiceProvider: (serviceProvider: IServiceProvider) => void;
    updateServiceProvider: (serviceProvider: IServiceProvider) => void;
    deleteServiceProvider: (id: string) => void;
}

export const INITIAL_STATE: IServiceProviderStateContext = {
    isPending: false,
    isSuccess: false,
    isError: false,
}

export const ServiceProviderStateContext = createContext<IServiceProviderStateContext>(INITIAL_STATE);

export const ServiceProviderActionContext = createContext<undefined | IServiceProviderActionContext>(undefined);