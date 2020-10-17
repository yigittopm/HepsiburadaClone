import React from 'react';

class Footer extends React.Component {
    render() {

        const myStyle = {
            textAlign: "center",
            color: "blue"
        }

        return (
            <div className="justift-content-center" style={{ myStyle }}>
                <p >
                    W3Schools is optimized for learning and training. 
                    Examples might be simplified to improve reading and learning. 
                    Tutorials, references, and examples are constantly reviewed to avoid errors, but we cannot warrant full correctness of all content. While using W3Schools, you agree to have read and accepted our terms of use, cookie and privacy policy.
                    Copyright 1999-2020 by Refsnes Data. All Rights Reserved.
                    W3Schools is Powered by W3.CSS.
                </p>
            </div>

        );
    }
}

export default Footer;