import * as React from 'react';
import {useDispatch} from 'react-redux';
import {selectFinishDate, selectStartDate} from './redux/reserve.actions';

const useService = () => {
    const dispatch = useDispatch();
    const defaultDate: string = JSON.stringify(new Date()).slice(1, 17);
    return {dispatch, defaultDate};
}

export const ReserveDatePicker: React.FC = () => {
    const {dispatch, defaultDate} = useService();
    return (
        <div className="container has-text-left">
            <label className="label">Start date</label>
            <input type="datetime-local" className="input" defaultValue={defaultDate}
                   onChange={event => dispatch(selectStartDate(new Date(event.target.value).getTime()))}/>
            <label className="label">Finish date</label>
            <input type="datetime-local" className="input" defaultValue={defaultDate}
                   onChange={event => dispatch(selectFinishDate(new Date(event.target.value).getTime()))}/>
        </div>
    );
}