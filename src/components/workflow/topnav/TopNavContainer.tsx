import * as React from 'react';
import {connect} from 'react-redux';
import './TopNavContainer.scss';
import {State} from "../../../store";
import {Dispatch} from "redux";
import {logout} from "../../../store/login/login.actions";
import {loadBookings} from "../../../store/booking/booking.actions";
import {loadPeople} from "../../../store/people/people.actions";
import {TopNavProps} from "../types";
import TopNavMenu from "./TopNavMenu";
import {TopNavLogo} from "./TopNavLogo";
import {loadRooms} from "../../../store/reserve/reserve.actions";

const TopNavContainer: React.FC<TopNavProps> = ({loginProps, logout, loadBookings, loadPeople, loadRooms}) => {
    return (
        <nav className="navbar is-fixed-top">
            <div className="container">
                <TopNavLogo/>
                <TopNavMenu
                    username={loginProps.user.username} logout={logout}
                    loadBookings={() => loadBookings(loginProps.user.username, loginProps.token)}
                    loadPeople={() => loadPeople(loginProps.token)}
                    loadRooms={() => loadRooms(loginProps.token)}
                />
            </div>
        </nav>
    );
}

const mapStateToProps = (state: State) => {
    return {
        loginProps: state.loginState,
    }
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        logout: () => dispatch(logout()),
        loadBookings: (username: string, token: string) => dispatch(loadBookings(username, token)),
        loadPeople: (token: string) => dispatch(loadPeople(token)),
        loadRooms: (token: string) => dispatch(loadRooms(token))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(TopNavContainer);