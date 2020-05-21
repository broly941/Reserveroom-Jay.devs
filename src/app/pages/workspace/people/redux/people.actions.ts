import {LOAD_PEOPLE_SUCCESS, People, PeopleActionTypes} from "./types";
import {peopleService} from './PeopleService';
import {Action, ThunkAction} from '@reduxjs/toolkit';
import {State} from '../../../../shared/store';
import {showError} from '../../../../shared/components/error-notification/redux/error.notification.actions';

export const loadPeople = ():
    ThunkAction<void, State, unknown, Action<string>> => async dispatch => {
    try {
        const peopleResponse = await peopleService.loadPeople();
        let people: People[] = peopleResponse.data.map((person: any) => {
            return {
                username: person.userName,
                email: person.email,
                mobilePhone: person.mobilePhoneNumber
            }
        });
        dispatch(loadPeopleSuccess(people));
    } catch (e) {
        let status = e.response.data.status;
        let error = e.response.data.error;
        console.error(status, error);
        dispatch(showError({
            isExists: true,
            error: {
                code: status + ' ' + error,
                message: 'Load People Error. ' + e.response.data.message
            }
        }));
    }
};

export const loadPeopleSuccess = (people: People[]): PeopleActionTypes => {
    return {
        type: LOAD_PEOPLE_SUCCESS,
        payload: people
    };
};