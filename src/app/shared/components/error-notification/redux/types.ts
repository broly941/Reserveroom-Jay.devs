export const SHOW_ERROR = 'SHOW_ERROR';
export const HIDE_ERROR_NOTIFICATION = 'HIDE_ERROR_NOTIFICATION';

export interface ErrorBody {
    code: string,
    message: string
}

export interface ErrorState {
    isExists: boolean,
    error: ErrorBody
}

export interface ShowErrorAction {
    type: typeof SHOW_ERROR,
    payload: ErrorState
}

export interface HideNotificationAction {
    type: typeof HIDE_ERROR_NOTIFICATION
}

export type ErrorNotificationActionTypes =
    ShowErrorAction | HideNotificationAction