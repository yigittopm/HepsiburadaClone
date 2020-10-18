import React, { Component } from 'react';

import '../style/NextPage.css';

export default class NextPage extends Component {
    render() {
        return (
            <div id="next-page">
                    <ul>
                        <li><a href="#">Previous Page</a></li>
                        <li><a href="#">Next Page</a></li>
                    </ul>
            </div>
        )
    }
}
