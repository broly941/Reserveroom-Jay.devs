import * as React from 'react';
import './WorkspaceContainer.scss';
import BookingContainer from "./booking/BookingContainer";
import PeopleContainer from "./people/PeopleContainer";
import {State} from "../../../store";
import {connect} from "react-redux";
import {WorkspaceContainerProps} from "./types";
import ReserveContainer from "./reserve/ReserveContainer";

const WorkspaceContainer: React.FC<WorkspaceContainerProps> = ({isBookingOpened, isPeopleOpened, isReserveOpened}) => {
    return (
        <div>
            {isBookingOpened && <BookingContainer/>}
            {isPeopleOpened && <PeopleContainer/>}
            {isReserveOpened && <ReserveContainer/>}
        </div>
    );
}

const mapStateToProps = (state: State) => {
    return {
        isBookingOpened: state.bookingState.isOpened,
        isPeopleOpened: state.peopleState.isOpened,
        isReserveOpened: state.reserveState.isOpened,
    }
};

export default connect(mapStateToProps)(WorkspaceContainer);
