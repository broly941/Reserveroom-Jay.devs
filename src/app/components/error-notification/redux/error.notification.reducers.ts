import {ErrorNotificationActionTypes, ErrorState, HIDE_ERROR_NOTIFICATION, SHOW_ERROR} from "./types";

const initialState: ErrorState = {
    isExists: false,
    error: {
        code: '',
        message: ''
    }
};

export function errorReducer(state: ErrorState = initialState, action: ErrorNotificationActionTypes): ErrorState {
    switch (action.type) {
        case SHOW_ERROR:
            return {
                ...state,
                ...action.payload
            }
        case HIDE_ERROR_NOTIFICATION:
            return {
                ...state,
                isExists: false
            }
        default:
            return state;
    }
}