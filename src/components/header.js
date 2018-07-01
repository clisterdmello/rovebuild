import React from 'react';  
class Header extends React.Component {
    render() {
        return (<div className="paleGreen paleGreenBorder">
            <div id="header" className="wrapper">
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
