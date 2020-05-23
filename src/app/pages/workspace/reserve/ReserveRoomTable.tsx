import * as React from 'react';
import {Room} from './redux/types';
import {useDispatch, useSelector} from 'react-redux';
import {State} from '../../../shared/store';
import {selectRoom} from './redux/reserve.actions';

interface ThisProps {
    rooms: Room[],
}

const useService = () => {
    const dispatch = useDispatch();
    const selectedRoom = useSelector((state: State) => state.reserveState.selectedRoom);
    return {dispatch, selectedRoom};
}

export const ReserveRoomTable: React.FC<ThisProps> = ({rooms}) => {
    const {dispatch, selectedRoom} = useService();
    const initiateRoomTable = () => {
        return (
            rooms.map((room: Room, index: number) => {
                return (
                    <tbody key={index}>
                    <tr onClick={() => dispatch(selectRoom(room.roomId))}
                        className={`${selectedRoom != room.roomId ? "" : "is-selected"}`}>
                        <td>{room.roomNumber}</td>
                    </tr>
                    </tbody>)
            })
        );
    };
    return (
        <div className="table-container">
            <table className="table is-hoverable is-fullwidth">
                {initiateRoomTable()}
            </table>
        </div>
    );
}