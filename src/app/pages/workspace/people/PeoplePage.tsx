import * as React from 'react';
import {State} from "../../../shared/store";
import {useSelector} from "react-redux";
import {Person} from "./redux/types";
import {PeopleTable} from './PeopleTable';

export const PeoplePage: React.FC = () => {
    const people: Person[] = useSelector((state: State) => state.peopleState.people);
    return (
        <section className="hero is-large">
            <div className="hero-body">
                <div className="table-container">
                    <h1 className="title">People</h1>
                    <h2 className="subtitle">Around you</h2>
                    <PeopleTable people={people}/>
                </div>
            </div>
        </section>
    );
}