import * as React from 'react';
import {Person} from './redux/types';

interface ThisProps {
    people: Person[]
}

export const PeopleTable: React.FC<ThisProps> = ({people}) => {
    const initiateTable = () => {
        return (people.map((person: Person, index: number) => {
            return (
                <tbody key={index}>
                <tr>
                    <th>{index}</th>
                    <td>{person.username}</td>
                    <td>{person.email}</td>
                    <td>{person.mobilePhone}</td>
                </tr>
                </tbody>)
        }))
    }
    return (
        <table className="table is-hoverable">
            <thead>
            <tr>
                <th>#</th>
                <th>User name</th>
                <th>Email</th>
                <th>Phone number</th>
            </tr>
            </thead>
            {initiateTable()}
        </table>
    );
}