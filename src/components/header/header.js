import React from 'react';
import { Link } from 'react-router-dom';
import CartImage from '../../assets/cart.png';

class Header extends React.Component {
    render() {
        return (<div className="paleGreen paleGreenBorder">
            <div id="header" className="wrapper">
                <div className="logo"></div>
                <menu>
                    <ul>
                        <li><Link to='/'>HOME</Link></li>
                        <li><Link to='/signin'>LOGIN &amp; SIGNUP</Link></li>
                        <li><Link to='/tripstatus'>STATUS</Link></li>                        
                        <li><Link to='/results'><img src={CartImage} className="headerCart" /></Link></li>
                    </ul>

                </menu>
            </div>

        </div>)
    }
};

export default Header;
