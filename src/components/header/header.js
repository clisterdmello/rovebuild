import React from 'react';
import { Link } from 'react-router-dom';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
} from 'reactstrap';


class Header extends React.Component {
    constructor(props) {
        super(props);
        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }
    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (<div id="header" >
            <Navbar color="light" light expand="md">
                <NavbarBrand href='/' className="col-xs-10 col-sm-3 col-md-3 col-lg-2" >
                    <img className="logo" src={require('../../assets/logo.png')} />
                </NavbarBrand>
                <NavbarToggler onClick={this.toggle} className="pull-right visible-xs-inline col-xs-2" />
                <Collapse isOpen={this.state.isOpen} navbar className="col-xs-12 col-sm-1 pull-right" >
                    <Nav navbar>
                        <NavItem className="helpLine helpline-title">
                            <span>Call to book </span>
                        </NavItem>
                        <NavItem className="helpLine helpline-body">
                          <span><a href="tel:+91-9577565655">+91 9577565655 </a><a href="tel:+91-8473065223"><br />+91 8473065223</a></span>
                        </NavItem>
                        <NavItem>
                            <Link to="/packages">Explore Packages</Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/help">Contact Us</Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>

        );
    }
};



export default Header;
