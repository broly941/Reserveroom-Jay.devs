import * as React from 'react';
import {State} from "../../../../shared/store";
import {connect, useSelector} from "react-redux";
import {People} from "./redux/types";

export const PeoplePage: React.FC = () => {

    const people = useSelector((state: State) => state.peopleState.people)
    const initiatePeopleTable = () => {
        return (
            <table className="table">
                <thead>
                <tr>
                    <th>#</th>
                    <th>User name</th>
                    <th>Email</th>
                    <th>Phone number</th>
                </tr>
                </thead>
                {
                    people.map((person: People, index: number) => {
                        return (
                            <tbody key={index}>
                            <tr>
                                <th>{index}</th>
                                <td>{person.username}</td>
                                <td>{person.email}</td>
                                <td>{person.mobilePhone}</td>
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
                    <h1 className="title">People</h1>
                    <h2 className="subtitle">Around you</h2>
                    {initiatePeopleTable()}
                </div>
            </div>
        </section>
    );
}