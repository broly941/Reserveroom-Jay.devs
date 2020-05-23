import * as React from 'react';
import "./FooterPage.scss"

const LINKEDIN_PROFILE = 'https://www.linkedin.com/in/ilya-korzhavin-33a1ab17b/';

export const FooterPage: React.FC = () => {
    return (
        <footer className="footer">
            <div className="content has-text-centered">
                <p>
                    <strong>Reserveroom</strong> by <a href={LINKEDIN_PROFILE}>Ilya Korzhavin</a>
                </p>
            </div>
        </footer>
    );
}
