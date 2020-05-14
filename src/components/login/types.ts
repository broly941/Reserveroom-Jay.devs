import {LoginState} from "../../store/login/types";
import {ErrorState} from "../../store/types";

export interface LoginProps {
    loginProps: LoginState,
    login: (username: string, password: string) => void,
    hideNotification: () => void
}

export interface ErrorNotificationProps {
    error: ErrorState | null,
    hideNotification: () => void
}