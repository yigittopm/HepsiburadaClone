import React from 'react'

import '../style/ProductList.css';
import Card from './Card';


export default class ProductList extends React.Component {
    

    render() {

        let products = [
            { name: "Asus Zenbook", price: 1555, rating: 4.7 },
            { name: "MSI x8", price: 4865, rating: 6.2 },
            { name: "Monster V7", price: 7770, rating: 7.7 },
            { name: "Lenovo V330", price: 4877, rating: 3.4 },
            { name: "Macbook Pro 16", price: 10055, rating: 9.8 },
            { name: "Macbook Air", price: 9500, rating: 8.7 }
        ]

        return (
            <div id="product-list" className="col-md-9">
                <div className="card-list">
                    <Card title="Macbook" />
                    <Card title="Macbook" />
                    <Card title="Macbook" />
                    <Card title="Macbook" />
                    <Card title="Macbook" />
                </div>
            </div>
        );
    }
}
