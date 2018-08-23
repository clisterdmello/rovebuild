import React from 'react';
import { Link } from 'react-router-dom'
class Header extends React.Component {
    render() {
        return (<div className="paleGreen paleGreenBorder">
            <div id="header" className="wrapper">
                <div className="logo"></div>
                <menu>
                    <ul>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/signin'>SIGN IN</Link></li>
                        <li><Link to='/signup'>SIGN UP</Link></li>
                        <li><Link to='/tripstatus'>STATUS</Link></li>
                        <li><Link to='/results'>Cart</Link></li>
                    </ul>

                </menu>
            </div>

        </div>)
    }
};

export default Header;
