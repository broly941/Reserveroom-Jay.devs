import * as React from 'react';
import './WorkspaceContainer.scss';
import BookingContainer from "./BookingContainer";
import PeopleContainer from "./PeopleContainer";
import {State} from "../../../store";
import {connect} from "react-redux";
import {WorkspaceContainerProps} from "./types";

const WorkspaceContainer: React.FC<WorkspaceContainerProps> = ({isBookingOpened, isPeopleOpened}) => {
    return (
        <div>
            {isBookingOpened && <BookingContainer/>}
            {isPeopleOpened && <PeopleContainer/>}
        </div>
    );
}

const mapStateToProps = (state: State) => {
    return {
        isBookingOpened: state.bookingState.isOpened,
        isPeopleOpened: state.peopleState.isOpened
    }
};

export default connect(mapStateToProps)(WorkspaceContainer);
