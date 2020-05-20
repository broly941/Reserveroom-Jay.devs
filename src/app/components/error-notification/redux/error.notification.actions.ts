import {ErrorNotificationActionTypes, ErrorState, HIDE_ERROR_NOTIFICATION, SHOW_ERROR} from "./types";

export const showError = (error: ErrorState): ErrorNotificationActionTypes => {
    return {
        type: SHOW_ERROR,
        payload: error
    };
};

export const hideNotification = (): ErrorNotificationActionTypes => ({type: HIDE_ERROR_NOTIFICATION});