import React from 'react';
import Banner from '../../assets/bestpackage1.jpg';
import Header from '../../components/header/Header';
import PackageCarousal from '../../components/packageCarousal';
import { Link } from 'react-router-dom';


class MainContent extends React.Component {
    componentDidUpdate() {
        const { match: { path } } = this.props;
        if (path.indexOf('help') > -1) {
            this.scrollToSpecificPoint();
        }
    }
    scrollToSpecificPoint() {
        window.scroll(0, window.document.body.offsetHeight);
    }
    render() {
        return (<div>
            <div className="banner">
                <Header />
                <div className="wrapper">
                    <PackageCarousal timer="3000" showArrows="true">
                        <p ><Link to="/detail/package-name-1">
                            <span>1</span>
                            <img src={require('../../assets/bestpackage1.jpg')} />
                        </Link>
                        </p>
                        <p ><Link to="/detail/package-name-2">
                            <span>2</span>
                            <img src={require('../../assets/introBanner.png')} />
                        </Link>
                        </p>
                        <p ><Link to="/detail/package-name-3">
                            <span>3</span>
                            <img src={require('../../assets/bestpackage1.jpg')} />
                        </Link>
                        </p>
                    </PackageCarousal>
                </div>
            </div>
            <div className="wrapper famousPackages">
                <h2 className="center"><span className="borderBtm">Famous Packages</span></h2>
                <div className="packageContainer">
                    <div>
                        <a href="#/detail/package1">
                            <img src={Banner} />
                            <span>
                                Meghalaya
                            </span>
                            <span>
                                2 days and 3nights
                            </span>
                        </a>
                    </div><div>
                        <a href="#/detail/package2">
                            <img src={Banner} />
                            <span>
                                Meghalaya
                            </span>
                            <span>
                                2 days and 3nights
                            </span>
                        </a>
                    </div><div>
                        <a href="#/detail/package3">
                            <img src={Banner} />
                            <span>
                                Meghalaya
                            </span>
                            <span>
                                2 days and 3nights
                            </span>
                        </a>
                    </div>
                    <div>
                        <a href="#/detail/package4">
                            <img src={Banner} />
                            <span>
                                Meghalaya
                            </span>
                            <span>
                                2 days and 3nights
                            </span>
                        </a>
                    </div><div>
                        <a href="">
                            <img src={Banner} />
                            <span>
                                Meghalaya
                            </span>
                            <span>
                                2 days and 3nights
                            </span>
                        </a>
                    </div><div>
                        <a href="">
                            <img src={Banner} />
                            <span>
                                Meghalaya
                            </span>
                            <span>
                                2 days and 3nights
                            </span>
                        </a>
                    </div>
                </div>
            </div>
            <div id="aboutUs">
                <h2 className="center"><span className="borderBtm">About Us</span></h2>
                <div className="wrapper aboutUsDesc">
                    <div>Dzukou Valley is most famous for its multicolored
                        carpets of flowers that bloom in summer,
                        most notably the Dzukou lily which is found only in the valley.
                        Dzukou Valley is most famous for its multicolored carpets of
                        flowers that bloom in su.</div>
                    <div>Dzukou Valley is most famous for its multicolored
                        carpets of flowers that bloom in summer,
                        most notably the Dzukou lily which is found only in the valley.
                        Dzukou Valley is most famous for its multicolored carpets of
                        flowers that bloom in su.</div>
                </div>
            </div>
            <div id="needHelp">
                <h2 className="center"><span className="borderBtm">Need Help</span></h2>
                <div className="wrapper">
                    <div className="center">
                        <form>
                            <input type="text" placeholder="Name" />
                            <input type="text" placeholder="Contact" />
                            <input type="submit" value="call me" />
                        </form>
                        <address>
                            <div><p>Dzukou Valley is most famous</p>
                                <p>Dzukou Valley is most famous</p>
                                <p>Dzukou Valley is most famous</p></div>
                            <div>Or</div>
                            <div><p>Dzukou Valley is most famous</p>
                                <p>Dzukou Valley is most famous</p>
                                <p>Dzukou Valley is most famous</p></div>
                        </address>
                    </div>

                </div>
            </div>
        </div>)
    }
};

export default MainContent;
