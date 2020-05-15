import {call, put, takeEvery, takeLatest} from 'redux-saga/effects'
import {loginService} from "./LoginService";
import {LOGIN, LOGIN_FAILURE, LOGIN_SUCCESS, LoginAction, LOGOUT} from "./types";
import {peopleService} from "../people/PeopleService";

function* login(action: LoginAction) {
    try {
        let password = action.payload.password;
        const authResponse = yield call(loginService.loggedIn, action.payload.username, password);
        let token = authResponse.data.token;
        const userInfo = yield call(peopleService.loadUserInfo, action.payload.username, token);
        yield put({
            type: LOGIN_SUCCESS,
            payload: {
                user: {
                    userId: userInfo.data.userId,
                    username: userInfo.data.userName,
                    email: userInfo.data.email,
                    mobilePhone: userInfo.data.mobilePhoneNumber
                },
                password: password,
                token: token,
                loggedIn: true
            }
        });
    } catch (e) {
        let status = e.response.data.status;
        let error = e.response.data.error;
        console.error(status, error);
        yield put({
            type: LOGIN_FAILURE,
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
    yield takeEvery(LOGIN, login);
    yield takeLatest(LOGOUT, logout);
}

export default loginSaga;
