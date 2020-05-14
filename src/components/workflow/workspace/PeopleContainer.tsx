import * as React from 'react';
import {State} from "../../../store";
import {connect} from "react-redux";

//todo React.FC<PeopleProps> = ({peopleProps}) => {
const PeopleContainer: ({peopleProps}: { peopleProps: any }) => false | any = ({peopleProps}) => {
    const initiateTable = (people: any) => {
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
                    people.map((person: any, index: number) => {
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
        peopleProps.isOpened &&
        <section className="hero">
            <div className="hero-body">
                <div className="container table-container">
                    <h1 className="title">People</h1>
                    <h2 className="subtitle">Around you</h2>
                    {initiateTable(peopleProps.people)}
                </div>
            </div>
        </section>
    );
}

const mapStateToProps = (state: State) => {
    return {
        peopleProps: state.peopleState
    }
};

export default connect(mapStateToProps)(PeopleContainer);
