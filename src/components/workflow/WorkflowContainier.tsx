import {Redirect} from 'react-router-dom';
import React, {useEffect} from "react";
import {State} from "../../store";
import {connect} from "react-redux";
import TopNavContainer from "./topnav/TopNavContainer";
import {WorkspaceContainer} from "./workspace/WorkspaceContainer";
import {WorkflowProps} from "./types";
import {Titles} from "../../shared/constants/title";
import {Footer} from "./footer/Footer";

const WorkflowContainer: React.FC<WorkflowProps> = ({loggedIn}) => {
    useEffect(() => {
        document.title = Titles.WORKFLOW
    }, []);

    return (
        !loggedIn ? <Redirect to={'/login'}/> :
            <div>
                <TopNavContainer/>
                <WorkspaceContainer/>
                <Footer/>
            </div>
    )
}

const mapStateToProps = (state: State) => {
    return {
        loggedIn: state.loginState.loggedIn,
    }
};

export default connect(mapStateToProps)(WorkflowContainer);