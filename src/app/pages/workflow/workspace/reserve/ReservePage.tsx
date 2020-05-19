import * as React from 'react';
import {useState} from 'react';
import {State} from '../../../../shared/store';
import {connect} from 'react-redux';
import {ReserveState, Room} from './redux/types';
import {Dispatch} from 'redux';
import {reserveRoom} from './redux/reserve.actions';
import {BookDate} from '../../../../shared/store/types';
import {Link} from 'react-router-dom';
import {AppRouts} from '../../../../shared/constants/route-config';

interface ThisProps {
    reserveProps: ReserveState,
    reserveRoom: (roomId: number, date: BookDate) => void
}

const ReservePage: React.FC<ThisProps> = ({reserveProps, reserveRoom}) => {
    const [selectedRoom, selectRoom] = useState(-1);
    const [selectedDate, setDate] = useState({
        startDate: new Date(),
        finishDate: new Date()
    });

    const initiateRoomTable = () => {
        return (
            <table className="table is-hoverable is-fullwidth">
                {
                    reserveProps.rooms.map((room: Room, index: number) => {
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
                          onClick={() => reserveRoom(selectedRoom, selectedDate)}>Reserve room</Link>
                </div>
            </div>
        </section>
    );
}

const mapStateToProps = (state: State) => {
    return {
        loginProps: state.loginState,
        reserveProps: state.reserveState
    }
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return {
        reserveRoom: (roomId: number, date: BookDate) => dispatch(reserveRoom(roomId, date))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ReservePage);