import * as React from 'react';
import './WorkspacePage.scss';
import BookingPage from './booking/BookingPage';
import PeoplePage from './people/PeoplePage';
import ReservePage from './reserve/ReservePage';
import {Route} from 'react-router-dom';
import {AppRouts} from '../../../shared/constants/route-config';

export const WorkspacePage: React.FC = ({}) => {
    return (
        <div>
            <Route path={AppRouts.RESERVE_ROOM} component={ReservePage}/>
            <Route path={AppRouts.BOOKING} component={BookingPage}/>
            <Route path={AppRouts.PEOPLE} component={PeoplePage}/>
        </div>
    );
}
