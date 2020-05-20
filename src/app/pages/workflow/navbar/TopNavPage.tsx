import * as React from 'react';
import './TopNavPage.scss';
import {TopNavLogo} from "./TopNavLogo";
import {Link} from "react-router-dom";
import {AppRouts} from '../../../shared/constants/route-config';
import {localStorageUtil} from '../../../shared/utils/StorageUtils';
import {StorageKeys} from '../../../shared/constants/storage-keys';
import {useDispatch} from 'react-redux';
import {loadRooms} from '../workspace/reserve/redux/reserve.actions';
import {loadBookings} from '../workspace/booking/redux/booking.actions';
import {loadPeople} from '../workspace/people/redux/people.actions';

export const TopNavPage: React.FC = () => {
    const handleLogout = () => {
        localStorageUtil.remove(StorageKeys.LOGGED_IN);
    }

    const dispatch = useDispatch();

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
                              onClick={() => dispatch(loadBookings())}>Booking</Link>
                        <Link to={AppRouts.PEOPLE} className="navbar-item"
                              onClick={() => dispatch(loadPeople())}>People</Link>
                        <a className="navbar-item">Help</a>
                        <div className="navbar-item has-dropdown is-hoverable">
                            <a className="navbar-link">Profile</a>
                            <div className="navbar-dropdown">
                                <Link to={AppRouts.LOGIN} className="navbar-item"
                                      onClick={() => handleLogout()}>Logout
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}