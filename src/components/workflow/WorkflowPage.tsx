import './WorkflowPage.scss';
import React, {Component} from "react";
import {State} from "../../store";
import {Dispatch} from "redux";
import {logout} from "../../store/login/login.actions";
import {connect} from "react-redux";
import {Redirect} from "react-router-dom";

class WorkflowPage extends Component<any, any> {
    render() {
        debugger;
        return (
            !this.props.loginState.loggedIn ? <Redirect to={'/login'}/> :
            <nav className="navbar">
                <div className="container">
                    <div className="navbar-item">
                       <div className="brand-name">
                           <h1>Reserveroom</h1>
                       </div>
                    </div>
                    <div id="navbarMenu" className="navbar-menu">
                        <div className="navbar-end">
                            <a className="navbar-item is-active">Home</a>
                            <a className="navbar-item">Reserve room</a>
                            <a className="navbar-item">Events</a>
                            <a className="navbar-item">People</a>
                            <a className="navbar-item">Help</a>
                            <div className="navbar-item has-dropdown is-hoverable">
                                <a className="navbar-link">Account</a>
                                <div className="navbar-dropdown">
                                    <a className="navbar-item">Profile</a>
                                    <a className="navbar-item">Settings</a>
                                    <hr className="navbar-divider"/>
                                    <a className="navbar-item" onClick={() => this.props.logout()}>Logout</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

const mapStateToProps = (state: State) => {
    return {
        loginState: state.loginState,
    }
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        logout: () => dispatch(logout())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(WorkflowPage);