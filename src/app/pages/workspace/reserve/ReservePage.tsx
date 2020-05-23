import * as React from 'react';
import {State} from '../../../shared/store';
import {useDispatch, useSelector} from 'react-redux';
import {Room} from './redux/types';
import {reserveRoom} from './redux/reserve.actions';
import {Link} from 'react-router-dom';
import {AppRouts} from '../../../shared/constants/route-config';
import {ReserveRoomTable} from './ReserveRoomTable';
import {ReserveDatePicker} from './ReserveDatePicker';

const useService = () => {
    const dispatch = useDispatch();
    const rooms: Room[] = useSelector((state: State) => state.reserveState.rooms);
    const selectedRoom: number = useSelector((state: State) => state.reserveState.selectedRoom);
    const selectedStartDate: number = useSelector((state: State) => state.reserveState.selectedStartDate);
    const selectedFinishDate: number = useSelector((state: State) => state.reserveState.selectedFinishDate);
    return {dispatch, selectedRoom, selectedStartDate, selectedFinishDate, rooms};
};

export const ReservePage: React.FC = () => {
    const {dispatch, selectedRoom, selectedStartDate, selectedFinishDate, rooms} = useService();
    return (
        <section className="section is-large">
            <div className="container has-text-centered">
                <div className="column is-4 is-offset-4">
                    <h3 className="title">Choose a room, set dates</h3>
                    <p className="subtitle">and finish reserving</p>
                    <ReserveRoomTable rooms={rooms}/>
                    <ReserveDatePicker/>
                    <Link to={AppRouts.BOOKING} className="button is-block is-dark is-medium is-fullwidth"
                          onClick={() => dispatch(
                              reserveRoom(selectedRoom, selectedStartDate, selectedFinishDate))}>Reserve
                        room</Link>
                </div>
            </div>
        </section>
    );
}