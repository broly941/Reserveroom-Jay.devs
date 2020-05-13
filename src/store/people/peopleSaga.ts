import {call, put, takeLatest} from 'redux-saga/effects'
import {LOAD_PEOPLE, LOAD_PEOPLE_FAILURE, LOAD_PEOPLE_SUCCESS, LoadPeopleAction} from "./types";
import {peopleService} from "./PeopleService";

function* loadPeople(action: LoadPeopleAction) {
    try {
        const response = yield call(peopleService.loadPeople, action.payload.token);
        let result = response.data.map((person: any) => {
            return {
                username: person.userName,
                email: person.email,
                mobilePhone: person.mobilePhoneNumber
            }
        })
        yield put({
            type: LOAD_PEOPLE_SUCCESS,
            payload: {
                people: result,
                isOpened: true
            }
        });
    } catch (e) {
        let status = e.response.data.status;
        let error = e.response.data.error;
        console.error(status, error);
        yield put({
            type: LOAD_PEOPLE_FAILURE,
            payload: {
                isOpened: false,
                error: {
                    code: status + ' ' + error,
                    message: e.response.data.message
                }
            }
        });
    }
}

function* peopleSaga() {
    yield takeLatest(LOAD_PEOPLE, loadPeople);
}

export default peopleSaga;
