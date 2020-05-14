import React from 'react';
import {ErrorNotificationProps} from "./types";

export const ErrorNotification: React.FC<ErrorNotificationProps> = ({error, hideNotification}) => {
    return (
        error &&
        <div className="notification is-danger is-light has-text-centered">
            <button className="delete " onClick={() => hideNotification()}/>
            <p>Error: {error.code}</p>
            <p>Description: {error.message}</p>
        </div>
    )
}