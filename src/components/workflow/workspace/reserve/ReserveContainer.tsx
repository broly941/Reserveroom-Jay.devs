import * as React from 'react';
import {useState} from 'react';
import {State} from "../../../../store";
import {connect} from "react-redux";
import {ReserveProps} from "../types";
import './ReserveContainer.scss';
import {Room} from "../../../../store/reserve/types";
import {Dispatch} from "redux";
import {reserveRoom} from "../../../../store/reserve/reserve.actions";
import {BookDate} from "../../../../store/types";
// import '../../../../bulma-debug.css';

const ReserveContainer: React.FC<ReserveProps> = ({loginProps, reserveProps, reserveRoom}) => {
    const [selectedRoom, selectRoom] = useState(-1);
    const [selectedDate, setDate] = useState({
        startDate: new Date(),
        finishDate: new Date()
    });

    const initiateRoomTable = () => {
        return (
            <table className="table is-striped is-hoverable">
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
    return (
        <section className="section is-large">
            <div className="container has-text-centered">
                <div className="column is-4 is-offset-4">
                    <h3 className="title">Choose a room</h3>
                    <p className="subtitle">and finish reserving</p>
                    <div className="table-container">
                        {initiateRoomTable()}
                    </div>
                    <div className="container">
                        <input type="datetime-local" className="input" defaultValue={date}/>
                        <input type="datetime-local" className="input" defaultValue={date}/>
                    </div>
                    <button className="button is-block is-info is-large is-fullwidth"
                            onClick={() => reserveRoom(loginProps.user.userId, selectedRoom, selectedDate, loginProps.token)}>Reserve
                    </button>
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
        reserveRoom: (userId: number, roomId: number, date: BookDate, token: string) => dispatch(reserveRoom(userId, roomId, date, token))
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(ReserveContainer);