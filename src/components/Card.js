import React from 'react'

export default class Card extends React.Component {
    
    render() {

        return (
            <div className="col-md-4">
                <div>
                    <h2>{this.props.title}</h2>
                    <h4>Card Information</h4>
                    <button className="btn btn-primary">Sepete Ekle</button>
                </div>
                <br/>
            </div>
        );
    }
}
