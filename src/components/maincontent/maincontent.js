import React from 'react';
import Banner from '../../assets/bestpackage1.jpg';
import Header from '../../components/header/Header';
import PackageCarousal from '../../components/packageCarousal';
import { Link } from 'react-router-dom';


class MainContent extends React.Component {
    componentDidUpdate() {
       
        const { match: { path } } = this.props;
        if (path.indexOf('help') > -1) {
            setTimeout(()=>{
                window.scroll(0, window.document.body.offsetHeight);
            },1);  
        }
    }
    componentDidMount(){
        let { match: { path } } = this.props;
        if (path.indexOf('help') > -1) {
            setTimeout(()=>{
                window.scroll(0, window.document.body.offsetHeight);
            },200);            
        }
    }
    scrollToSpecificPoint() {
        window.scroll(0, window.document.body.offsetHeight);
    }
    render() {
        return (<div>
            <div>
                <Header />
                <PackageCarousal timer="3000" showArrows="true">
                    <p ><Link to="/detail/package-name-1">
                        <img src={require('../../assets/tryme.jpg')} />
                    </Link>
                    </p>
                    <p ><Link to="/detail/package-name-2">
                        <img src={require('../../assets/homepageBanner1.jpg')} />
                    </Link>
                    </p>
                    <p><Link to="/detail/package-name-3">
                        <img src={require('../../assets/homepageBanner.jpg')} />
                    </Link>
                    </p>
                </PackageCarousal>
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
                <h2 className="center"><span className="borderBtm">Contact Us</span></h2>
                <section className="wrapper">

                    <form>
                        <input type="text" placeholder="Name" />
                        <input type="text" placeholder="Contact" />
                        <input type="submit" value="call me" />
                    </form>
                    <address>
                        <p>115 , Lohar Chawl, K M Sharma Marg</p>
                        <p>  Kalbadevi, Mumbai</p>
                        <p> Maharashtra</p>

                    </address>


                </section>
            </div>
        </div>)
    }
};

export default MainContent;
