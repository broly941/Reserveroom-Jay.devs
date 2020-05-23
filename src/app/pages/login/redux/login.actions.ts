import {LOGIN_SUCCESS, LoginActionTypes, LOGOUT} from "./types";
import {loginService} from './LoginService';
import {AppThunk} from '../../../shared/store';
import {localStorageUtil, StorageKeys} from '../../../shared/utils/StorageUtils';
import {peopleService} from '../../workspace/people/redux/PeopleService';
import {showError} from '../../../shared/components/error-notification/redux/error.notification.actions';

export const login = (username: string, password: string): AppThunk => async dispatch => {
    try {
        const authResponse = await loginService.loggedIn(username, password);
        let token = authResponse.data.token;
        localStorageUtil.put(StorageKeys.TOKEN, token);
        const userInfoResponse = await peopleService.loadUserInfo(username);
        dispatch(loginSuccess(true, token,
            userInfoResponse.data.userId, userInfoResponse.data.userName));
    } catch (e) {
        let status = e.response.data.status;
        let error = e.response.data.error;
        console.error(status, error);
        dispatch(showError({
            isExists: true,
            error: {
                code: status + ' ' + error,
                message: 'Login Error. ' + e.response.data.message
            }
        }));
    }
}

export const loginSuccess = (loggedIn: boolean, token: string, userId: number, username: string): LoginActionTypes => {
    return {
        type: LOGIN_SUCCESS,
        payload: {
            loggedIn: loggedIn,
            token: token,
            userId: userId,
            username: username
        }
    };
};

export const logout = (): LoginActionTypes => {
    return {
        type: LOGOUT,
    };
};