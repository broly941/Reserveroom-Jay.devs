import * as React from 'react';
import {State} from "../../../store";
import {connect} from "react-redux";
import {BookingProps} from "./types";

const BookingContainer: React.FC<BookingProps> = ({bookings, error}) => {
    const initiateTable = () => {
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
                    bookings.map((booking: any, index: number) => {
                        return (
                            <tbody key={index}>
                            <tr>
                                <th>{index}</th>
                                <td>{booking.roomName}</td>
                                <td>{booking.startDate}</td>
                                <td>{booking.finishDate}</td>
                            </tr>
                            </tbody>)
                    })
                }
            </table>
        );
    };

    return (
        <section className="hero">
            <div className="hero-body">
                <div className="container table-container">
                    <h1 className="title">Booking</h1>
                    <h2 className="subtitle">Your reserved rooms</h2>
                    {initiateTable()}
                </div>
            </div>
        </section>
    );
}

const mapStateToProps = (state: State) => {
    return {
        bookings: state.bookingState.bookings,
        error: state.bookingState.error
    }
};

export default connect(mapStateToProps)(BookingContainer);
