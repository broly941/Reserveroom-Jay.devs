import * as React from 'react';
import {State} from "../../../../shared/store";
import {useSelector} from "react-redux";
import {Booking} from "./redux/types";

export const BookingPage: React.FC = () => {
    const bookings = useSelector((state: State) => state.bookingState.bookings);

    const initiateBookingTable = () => {
        return (
            <table className="table">
                <thead>
                <tr>
                    <th>#</th>
                    <th>Room</th>
                    <th>Start date</th>
                    <th>Finish date</th>
                </tr>
                </thead>
                {
                    bookings.map((booking: Booking, index: number) => {
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
                }
            </table>
        );
    };

    return (
        <section className="hero is-large">
            <div className="hero-body">
                <div className="table-container">
                    <h1 className="title">Booking</h1>
                    <h2 className="subtitle">Your reserved rooms</h2>
                    {initiateBookingTable()}
                </div>
            </div>
        </section>
    );
}