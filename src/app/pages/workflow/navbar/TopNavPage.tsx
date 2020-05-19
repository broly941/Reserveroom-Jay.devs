import * as React from 'react';
import {connect} from 'react-redux';
import './TopNavPage.scss';
import {Dispatch} from "redux";
import {logout} from "../../../pages/login/redux/login.actions";
import {loadBookings} from "../workspace/booking/redux/booking.actions";
import {loadPeople} from "../workspace/people/redux/people.actions";
import {TopNavLogo} from "./TopNavLogo";
import {loadRooms} from "../workspace/reserve/redux/reserve.actions";
import {Link} from "react-router-dom";
import {AppRouts} from '../../../shared/constants/route-config';

interface ThisProps {
    logout: () => void,
    loadBookings: () => void,
    loadPeople: () => void,
    loadRooms: () => void,
}

const TopNavPage: React.FC<ThisProps> = ({logout, loadBookings, loadPeople, loadRooms}) => {
    return (
        <nav className="navbar is-fixed-top">
            <div className="container">
                <TopNavLogo/>
                <div id="navabrMenu" className="navbar-menu">
                    <div className="navbar-end">
                        <a className="navbar-item is-active">Home</a>
                        <Link to={AppRouts.RESERVE_ROOM} className="navbar-item"
                              onClick={() => loadRooms()}>Reserve room</Link>
                        <Link to={AppRouts.BOOKING} className="navbar-item"
                              onClick={() => loadBookings()}>Booking</Link>
                        <Link to={AppRouts.PEOPLE} className="navbar-item"
                              onClick={() => loadPeople()}>People</Link>
                        <a className="navbar-item">Help</a>
                        <div className="navbar-item has-dropdown is-hoverable">
                            <a className="navbar-link">Profile</a>
                            <div className="navbar-dropdown">
                                <Link to={AppRouts.LOGIN} className="navbar-item"
                                      onClick={() => logout()}>Logout
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        logout: () => dispatch(logout()),
        loadBookings: () => dispatch(loadBookings()),
        loadPeople: () => dispatch(loadPeople()),
        loadRooms: () => dispatch(loadRooms())
    }
};

export default connect(null, mapDispatchToProps)(TopNavPage);