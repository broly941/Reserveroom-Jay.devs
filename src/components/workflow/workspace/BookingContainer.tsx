import * as React from 'react';
import {State} from "../../../store";
import {connect} from "react-redux";

//todo React.FC<BookingProps> = ({bookingProps}) => {
const BookingContainer: ({bookingProps}: { bookingProps: any }) => false | any = ({bookingProps}) => {
    const initiateTable = (booking: any) => {
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
                    booking.map((booking: any, index: number) => {
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
        bookingProps.isOpened &&
        <section className="hero">
            <div className="hero-body">
                <div className="container table-container">
                    <h1 className="title">Booking</h1>
                    <h2 className="subtitle">Your reserved rooms</h2>
                    {initiateTable(bookingProps.bookings)}
                </div>
            </div>
        </section>
    );
}

const mapStateToProps = (state: State) => {
    return {
        bookingProps: state.bookingState
    }
};

export default connect(mapStateToProps)(BookingContainer);
