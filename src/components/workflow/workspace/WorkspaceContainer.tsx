import * as React from 'react';
import './WorkspaceContainer.scss';
import BookingContainer from "./BookingContainer";
import PeopleContainer from "./PeopleContainer";

export const WorkspaceContainer: React.FC = () => {
    return (
        <div>
            <BookingContainer/>
            <PeopleContainer/>
        </div>
    );
}
