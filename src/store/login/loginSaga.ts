import {call, put, takeLatest, takeLeading} from 'redux-saga/effects'
import {loginService} from "../../shared/services/LoginService";
import {LOGIN, LOGIN_FAILURE, LOGIN_SUCCESS, LoginAction, LOGOUT} from "./types";

function* login(action: LoginAction) {
    try {
        const response = yield call(loginService.loggedIn, action.payload.username, action.payload.password);
        yield put({
            type: LOGIN_SUCCESS,
            payload: {
                username: action.payload.username,
                password: action.payload.password,
                loggedIn: true,
                token: response.data.token
            }
        });
    } catch (e) {
        let status = e.response.data.status;
        let error = e.response.data.error;
        console.error(status, error);
        yield put({type: LOGIN_FAILURE,
            payload: {
                error: {
                    code: status + ' ' + error,
                    message: e.response.data.message
                }
            }
        });
    }
}

function* logout() {
}

function* loginSaga() {
    yield takeLatest(LOGIN, login);
    yield takeLeading(LOGOUT, logout);
}

export default loginSaga;
