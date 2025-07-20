import { createContext } from "react";
export interface IServiceProvider {
    id: string;
    name: string;
    emailAddress: string;
    buildingAddress: Address[];
    password: string;
    latitude: string;
    longitude: string;
    municipalityId: string //might chnge
}
export interface Address {
    province: string;
    city: string;
}

export interface IServiceProviderStateContext {
    isPending: boolean;
    isSuccess: boolean;
    isError: boolean;
    serviceProvider?: IServiceProvider;
    serviceProviders?: IServiceProvider[];
}

export interface IServiceProviderActionContext {
    getServiceProviderList: () => void;
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