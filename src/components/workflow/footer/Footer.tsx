import * as React from 'react';
import "./Footer.scss"
import {WebLinks} from "../../../shared/constants/urls";

export const Footer: React.FC = () => {
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
