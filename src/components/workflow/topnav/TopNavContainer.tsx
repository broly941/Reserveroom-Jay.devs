import * as React from 'react';
import {Component} from 'react';
import {connect} from 'react-redux';
import './TopNavContainer.scss';
import TopNavLogo from "./TopNavLogo";
import {State} from "../../../store";
import {Dispatch} from "redux";
import {logout} from "../../../store/login/login.actions";
import TopNavItemsContainer from "./TopNavItemsContainer";
import {loadBookings} from "../../../store/booking/booking.actions";
import {loadPeople} from "../../../store/people/people.actions";

class TopNavContainer extends Component<any, any> {
    render() {
        return (
            <nav className="navbar">
                <div className="container">
                    <TopNavLogo/>
                    <TopNavItemsContainer
                        username={this.props.loginState.username}
                        logout={this.props.logout}
                        loadBookings={() => this.props.loadBookings(this.props.loginState.username,
                            this.props.loginState.token)}
                        loadPeople={() => this.props.loadPeople(this.props.loginState.token)}
                    />
                </div>
            </nav>
        );
    }
}

const mapStateToProps = (state: State) => {
    return {
        loginState: state.loginState,
    }
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        logout: () => dispatch(logout()),
        loadBookings: (username: string, token: string) => dispatch(loadBookings(username, token)),
        loadPeople: (token: string) => dispatch(loadPeople(token)),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TopNavContainer);