import * as React from 'react';
import {State} from "../../../../store";
import {connect} from "react-redux";
import {BookingProps} from "../types";
import {Booking} from "../../../../store/booking/types";

const BookingContainer: React.FC<BookingProps> = ({bookings, error}) => {
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

const mapStateToProps = (state: State) => {
    return {
        bookings: state.bookingState.bookings,
        error: state.bookingState.error
    }
};

export default connect(mapStateToProps)(BookingContainer);
