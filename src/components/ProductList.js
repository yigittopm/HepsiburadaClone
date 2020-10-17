import React from 'react'

import Card from './Card';

export default class ProductList extends React.Component {
    
    render() {
        return (
            <div className="col-md-9">
                <div className="card-list">
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                    <Card/>
                </div>
            </div>
        );
    }
}
