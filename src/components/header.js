import React from 'react';
const divStyle = {
    margin: '0 auto',
    padding: '0px',
    width: '100%',
    maxWidth:'960px',
  };
  
class Header extends React.Component {
    render() {
        return (<div>
            <div id="header" style={divStyle}>
                <div>Logo</div>
                <menu>
                    <ul>
                            <li>Sign In</li>
                            <li>Sign Up</li>
                            <li>Status</li>
                            <li>Cart</li>
                    </ul>

                </menu>
            </div>

        </div>)
    }
};

export default Header;
