import * as React from 'react';
import {Booking} from "./redux/types";

interface ThisProps {
    bookings: Booking[]
}

export const BookingTable: React.FC<ThisProps> = ({bookings}) => {
    const initiateTable = () => {
        return (bookings.map((booking: Booking, index: number) => {
                return (
                    <tbody key={index}>
                    <tr>
                        <th>{index}</th>
                        <td>{booking.roomName}</td>
                        <td>{booking.date.startDate}</td>
                        <td>{booking.date.finishDate}</td>
                    </tr>
                    </tbody>)
            })
        );
    };
    return (
        <table className="table is-hoverable">
            <thead>
            <tr>
                <th>#</th>
                <th>Room</th>
                <th>Start date</th>
                <th>Finish date</th>
            </tr>
            </thead>
            {initiateTable()}
        </table>
    );
}