import React from 'react';
import { Link } from 'react-router-dom';

class Header extends React.Component {
    render() {
        return (<div className="paleGreen paleGreenBorder">
            <div id="header" className="">
                <div >
                    <Link to='/'><img className="logo" src={require('../../assets/logo.png')} /></Link>
                </div>
                <menu>
                    <ul>
                        <li className="helpLine helpline-title">                            
                           <span>Call to book </span>                       
                                                     
                        </li>
                        <li className="helpLine helpline-body"> 
                           <span>+91 9577565655 <br/>+91 8473065223</span>                                                     
                        </li>
                        <li><Link to='/packages'>Explore Packages</Link></li>
                        <li><Link to='/help'>Contact Us</Link></li>
                    </ul>
                </menu>
            </div>
        </div>);
    }
};

export default Header;
