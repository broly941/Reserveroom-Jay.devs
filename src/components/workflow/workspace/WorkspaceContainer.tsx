import * as React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import './WorkspaceContainer.scss';
import {State} from "../../../store";
import BookingContainer from "./BookingContainer";
import PeopleContainer from "./PeopleContainer";

class WorkspaceContainer extends Component<any, any> {
    render() {
        return (
            <div>
                <BookingContainer isOpened={this.props.bookingState.isOpened}
                                  bookings={this.props.bookingState.bookings}/>
                <PeopleContainer isOpened={this.props.peopleState.isOpened}
                                  people={this.props.peopleState.people}/>
            </div>
        );
    }
}


const mapStateToProps = (state: State) => {
    return {
        bookingState: state.bookingState,
        peopleState: state.peopleState
    }
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {}
};

export default connect(mapStateToProps, mapDispatchToProps)(WorkspaceContainer);
