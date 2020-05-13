import * as React from 'react';
import {Component} from 'react';

class TopNavItemsContainer extends Component<any, any> {
    render() {
        let username = this.props.username;
        return (
            <div id="navbarMenu" className="navbar-menu">
                <div className="navbar-end">
                    <a className="navbar-item is-active">Home</a>
                    <a className="navbar-item">Reserve room</a>
                    <a className="navbar-item" onClick={() => this.props.loadBookings()}>Booking</a>
                    <a className="navbar-item" onClick={() => this.props.loadPeople()}>People</a>
                    <a className="navbar-item">Help</a>
                    <div className="navbar-item has-dropdown is-hoverable">
                        <a className="navbar-link">{username}</a>
                        <div className="navbar-dropdown">
                            <a className="navbar-item">Profile</a>
                            <hr className="navbar-divider"/>
                            <a className="navbar-item" onClick={() => this.props.logout()}>Logout</a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default TopNavItemsContainer;
