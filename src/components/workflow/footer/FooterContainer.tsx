import * as React from 'react';
import {Component} from 'react';
import "./FooterContainer.scss"
import {WebLinks} from "../../../shared/constants/urls";

class FooterContainer extends Component<any, any> {
    render() {
        return (
            <footer className="footer">
                <div className="content has-text-centered">
                    <p>
                        <strong>Reserveroom</strong> by <a href={WebLinks.LINKEDIN_PROFILE}>Ilya Korzhavin</a>
                    </p>
                </div>
            </footer>
        );
    }
}

export default FooterContainer;