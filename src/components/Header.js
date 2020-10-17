import React from 'react';

import '../style/Header.css';

class Header extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            background: "orange"
        }
    }

    render(){
        return(
            <div style={{color: "orange"}}>
                <h1>Hepsiburada</h1>
            </div>
        );
    }
}

export default Header;