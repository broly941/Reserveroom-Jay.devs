import * as React from 'react';
import {State} from "../../../shared/store";
import {useSelector} from "react-redux";
import {Booking} from "./redux/types";
import {BookingTable} from './BookingTable';

export const BookingPage: React.FC = () => {
    const bookings: Booking[] = useSelector((state: State) => state.bookingState.bookings);
    return (
        <section className="hero is-large">
            <div className="hero-body">
                <div className="table-container">
                    <h1 className="title">Booking</h1>
                    <h2 className="subtitle">Your reserved rooms</h2>
                    <BookingTable bookings={bookings}/>
                </div>
            </div>
        </section>
    );
}