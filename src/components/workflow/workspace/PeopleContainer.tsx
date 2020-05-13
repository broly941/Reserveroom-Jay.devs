import * as React from 'react';
import {Component} from 'react';

class PeopleContainer extends Component<any, any> {
    initiateTable = (people: any) => {
        debugger;
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

    render() {
        debugger;
        return (
            this.props.isOpened &&
            <section className="hero">
                <div className="hero-body">
                    <div className="container table-container">
                        <h1 className="title">People</h1>
                        <h2 className="subtitle">Around you</h2>
                        {this.initiateTable(this.props.people)}
                    </div>
                </div>
            </section>
        );
    }
}

export default PeopleContainer;
