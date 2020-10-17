import React from 'react'

export default class Card extends React.Component {

    state = {
        products: [
            {name:"Laptop", price:1555, rating: 4.7},
            {name:"Laptop", price:4865, rating: 6.2},
            {name:"Laptop", price:7770, rating: 7.7},
            {name:"Laptop", price:4877, rating: 3.4},
            {name:"Laptop", price:10055, rating: 9.8},
            {name:"Laptop", price:9500, rating: 8.7}
        ]
    }

    render() {
        return (
            <div className="col-md-4 card">
                <div className="cardTitle">
                    {this.state.products.name}
                </div>
                <Card></Card>
            </div>
        );
    }
}
