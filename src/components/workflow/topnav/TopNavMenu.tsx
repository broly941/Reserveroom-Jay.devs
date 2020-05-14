import * as React from 'react';
import {TopNavMenuProps} from "./types";

const TopNavMenu: React.FC<TopNavMenuProps> = ({username, logout, loadBookings, loadPeople}) => {
    return (
        <div id="navabrMenu" className="navbar-menu">
            <div className="navbar-end">
                <a className="navbar-item is-active">Home</a>
                <a className="navbar-item">Reserve room</a>
                <a className="navbar-item" onClick={() => loadBookings()}>Booking</a>
                <a className="navbar-item" onClick={() => loadPeople()}>People</a>
                <a className="navbar-item">Help</a>
                <div className="navbar-item has-dropdown is-hoverable">
                    <a className="navbar-link">{username}</a>
                    <div className="navbar-dropdown">
                        <a className="navbar-item">Profile</a>
                        <hr className="navbar-divider"/>
                        <a className="navbar-item" onClick={() => logout()}>Logout</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TopNavMenu;
