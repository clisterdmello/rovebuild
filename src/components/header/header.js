import React from 'react';  
class Header extends React.Component {
    render() {
        return (<div className="paleGreen paleGreenBorder">
            <div id="header" className="wrapper">
                <div>Logo</div>
                <menu>
                    <ul>
                            <li>SIGN IN</li>
                            <li>SIGN UP</li>
                            <li>STATUS</li>
                            <li>CART</li>
                    </ul>

                </menu>
            </div>

        </div>)
    }
};

export default Header;
