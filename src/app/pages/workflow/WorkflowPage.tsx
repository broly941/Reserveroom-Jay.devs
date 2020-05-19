import React, {useEffect} from 'react';
import {Titles} from '../../shared/constants/titles';
import {FooterPage} from './footer/FooterPage';
import TopNavPage from './navbar/TopNavPage';
import {WorkspacePage} from './workspace/WorkspacePage';

export const WorkflowPage: React.FC = ({}) => {
    useEffect(() => {
        document.title = Titles.WORKFLOW
    }, []);

    return (
        <div>
            <TopNavPage/>
            <WorkspacePage/>
            <FooterPage/>
        </div>
    )
}