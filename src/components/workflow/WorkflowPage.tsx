import {Redirect} from 'react-router-dom';
import React, {Component} from "react";
import {State} from "../../store";
import {connect} from "react-redux";
import TopNavContainer from "./topnav/TopNavContainer";
import WorkspaceContainer from "./workspace/WorkspaceContainer";
import FooterContainer from "./footer/FooterContainer";

class WorkflowPage extends Component<any, any> {
    render() {
        return (
            !this.props.loginState.loggedIn ? <Redirect to={'/login'}/> :
                <div>
                    <TopNavContainer/>
                    <WorkspaceContainer/>
                    <FooterContainer/>
                </div>
        )
    }
}

const mapStateToProps = (state: State) => {
    return {
        loginState: state.loginState,
    }
};

export default connect(mapStateToProps)(WorkflowPage);