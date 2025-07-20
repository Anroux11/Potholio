import { createContext } from "react";

export interface ITechnician {
    id: string;
    name: string;
    email: string;
    contactNumber: number;
    password: string;
}

export interface ITechnicianStateContext {
    isPending: boolean;
    isSuccess: boolean;
    isError: boolean;
    technician?: ITechnician;
    technicians?: ITechnician[];
}

export interface ITechnicianActionContext {
    getTechnicianList: () => void;
    getTechnician: (id: string) => void;
    createTechnician: (technician: ITechnician) => void;
    updateTechnician: (technician: ITechnician) => void;
    deleteTechnician: (id: string) => void;
}

export const INITIAL_STATE: ITechnicianStateContext = {
    isPending: false,
    isSuccess: false,
    isError: false,
}

export const TechnicianStateContext = createContext<ITechnicianStateContext>(INITIAL_STATE);

export const TechnicianActionContext = createContext<undefined | ITechnicianActionContext>(undefined);