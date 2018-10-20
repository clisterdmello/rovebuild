import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (<div className="paleGreen paleGreenBorder">
            <div id="header" className="wrapper">
                <div className="logo">
                    <a href="/"></a>
                </div>
                <menu>
                    <ul>
                        <li className="helpLine">                            
                            <span>Call to book, </span>
                            <span>0800 083 4000</span>                            
                        </li>
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/'>View Packages</Link></li>
                        <li><Link to='/help'>Need Help?</Link></li>
                    </ul>
                </menu>
            </div>
        </div>);
    }
};

export default Header;
