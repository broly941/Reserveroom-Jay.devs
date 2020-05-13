import * as React from 'react';
import {Component} from 'react';
import {Titles} from "../../../shared/constants/title";

class NotFoundPage extends Component<any, any> {

    constructor(props: any) {
        super(props);
        document.title = Titles.NOT_FOUND_PAGE;
    }

    render() {
        return (
            <div>
                Page not found
            </div>
        );
    }
}

export default NotFoundPage;