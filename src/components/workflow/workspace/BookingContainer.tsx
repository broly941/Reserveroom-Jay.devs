import * as React from 'react';
import {Component} from 'react';

class BookingContainer extends Component<any, any> {
    initiateTable = (booking: any) => {
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

    render() {
        return (
            this.props.isOpened &&
            <section className="hero">
                <div className="hero-body">
                    <div className="container table-container">
                        <h1 className="title">Booking</h1>
                        <h2 className="subtitle">Your reserved rooms</h2>
                        {this.initiateTable(this.props.bookings)}
                    </div>
                </div>
            </section>
        );
    }
}

export default BookingContainer;
