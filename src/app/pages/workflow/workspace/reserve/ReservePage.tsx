import * as React from 'react';
import {useState} from 'react';
import {State} from '../../../../shared/store';
import {useDispatch, useSelector} from 'react-redux';
import {Room} from './redux/types';
import {reserveRoom} from './redux/reserve.actions';
import {Link} from 'react-router-dom';
import {AppRouts} from '../../../../shared/constants/route-config';

export const ReservePage: React.FC = () => {
    const [selectedRoom, selectRoom] = useState(-1);
    const [selectedDate, setDate] = useState({
        startDate: new Date(),
        finishDate: new Date()
    });
    const rooms = useSelector((state: State) => state.reserveState.rooms);
    const dispatch = useDispatch();

    const initiateRoomTable = () => {
        return (
            <table className="table is-hoverable is-fullwidth">
                {
                    rooms.map((room: Room, index: number) => {
                        return (
                            <tbody key={index}>
                            <tr onClick={() => selectRoom(room.roomId)}
                                className={`${selectedRoom != room.roomId ? "" : "is-selected"}`}>
                                <td>{room.roomNumber}</td>
                            </tr>
                            </tbody>)
                    })
                }
            </table>
        );
    };

    const date = JSON.stringify(new Date()).slice(1, 17);
    debugger;
    return (
        <section className="section is-large">
            <div className="container has-text-centered">
                <div className="column is-4 is-offset-4">
                    <h3 className="title">Choose a room, set dates</h3>
                    <p className="subtitle">and finish reserving</p>
                    <div className="table-container">
                        {initiateRoomTable()}
                    </div>
                    <div className="container has-text-left">
                        <label className="label">Start date</label>
                        <input type="datetime-local" className="input" defaultValue={date}
                               onChange={event => setDate({
                                   ...selectedDate,
                                   startDate: new Date(event.target.value)
                               })}/>
                        <label className="label">Finish date</label>
                        <input type="datetime-local" className="input" defaultValue={date}
                               onChange={event => setDate({
                                   ...selectedDate,
                                   finishDate: new Date(event.target.value)
                               })}/>
                    </div>
                    <Link to={AppRouts.BOOKING} className="button is-block is-dark is-medium is-fullwidth"
                          onClick={() => dispatch(reserveRoom(selectedRoom, selectedDate))}>Reserve room</Link>
                </div>
            </div>
        </section>
    );
}