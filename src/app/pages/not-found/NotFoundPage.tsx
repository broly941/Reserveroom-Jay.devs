import * as React from 'react';
import {useEffect} from 'react';
import {Titles} from "../../shared/constants/titles";

export const NotFoundPage: React.FC = () => {
    useEffect(() => {
        document.title = Titles.PAGE_NOT_FOUND
    }, []);
    return (
        <section className="section is-large">
            <div className="container">
                <div className="columns is-vcentered">
                    <div className="column has-text-centered">
                        <h1 className="title">404 Page Not Found</h1>
                        <h2 className="subtitle">An unexpected error has occurred. Please contact the site owner.</h2>
                        <button className="button">Home</button>
                        <button className="button">Contact</button>
                    </div>
                    <div className="column has-text-centered">
                        <img
                            src="https://www.eastfieldcollege.edu/PublishingImages/Pages/PageNotFoundError/404-robot.gif"
                            alt={"Robot"}/>
                    </div>
                </div>
            </div>
        </section>
    );
}