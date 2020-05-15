import {LoginState} from "../../store/login/types";

export interface WorkflowProps {
    loggedIn: boolean
}

export interface TopNavProps {
    loginProps: LoginState,
    logout: () => void,
    loadBookings: (username: string, token: string) => void,
    loadPeople: (token: string) => void,
    loadRooms: (token: string) => void,
}