import * as React from 'react';
import './TopNavPage.scss';
import {TopNavLogo} from "./logo/TopNavLogo";
import {Link} from "react-router-dom";
import {AppRouts} from '../../constants/route-config';
import {useDispatch, useSelector} from 'react-redux';
import {State} from '../../store';
import {loadRooms} from '../../../pages/workspace/reserve/redux/reserve.actions';
import {loadBookings} from '../../../pages/workspace/booking/redux/booking.actions';
import {loadPeople} from '../../../pages/workspace/people/redux/people.actions';
import {logout} from '../../../pages/login/redux/login.actions';

const useService = () => {
    const dispatch = useDispatch();
    const userId: number = useSelector((state: State) => state.loginState.userId);
    const username: string = useSelector((state: State) => state.loginState.username);
    return {dispatch, userId, username};
};

export const TopNavPage: React.FC = () => {
    const {dispatch, userId, username} = useService();
    return (
        <nav className="navbar is-fixed-top">
            <div className="container">
                <TopNavLogo/>
                <div id="navabrMenu" className="navbar-menu">
                    <div className="navbar-end">
                        <a className="navbar-item is-active">Home</a>
                        <Link to={AppRouts.RESERVE_ROOM} className="navbar-item"
                              onClick={() => dispatch(loadRooms())}>Reserve room</Link>
                        <Link to={AppRouts.BOOKING} className="navbar-item"
                              onClick={() => dispatch(loadBookings(userId))}>Booking</Link>
                        <Link to={AppRouts.PEOPLE} className="navbar-item"
                              onClick={() => dispatch(loadPeople())}>People</Link>
                        <a className="navbar-item">Help</a>
                        <div className="navbar-item has-dropdown is-hoverable">
                            <a className="navbar-link">{username}</a>
                            <div className="navbar-dropdown">
                                <a className="navbar-item"
                                   onClick={() => dispatch(logout())}>Logout
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}