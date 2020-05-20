import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {hideNotification} from './redux/error.notification.actions';
import './ErrorNotification.scss';
import {State} from '../../store';

export const ErrorNotification: React.FC = () => {
    const dispatch = useDispatch();
    const errorProps = useSelector((state: State) => state.errorState);
    return (
        errorProps.isExists ?
            <div className="notification is-danger has-text-centered">
                <button className="delete" onClick={() => dispatch(hideNotification())}/>
                <p>Error: {errorProps.error.code}</p>
                <p>Description: {errorProps.error.message}</p>
            </div> : <div/>
    )
}