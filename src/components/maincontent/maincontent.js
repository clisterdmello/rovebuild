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
                <p ><Link to="/package/meghalaya">
                  <img src={require('../../assets/meg3.jpg')} />
                </Link>
                </p>
                <p ><Link to="/package/nagaland">
                  <img src={require('../../assets/nag1.jpg')} />
                </Link>
                </p>
                <p><Link to="/package/sikkim">
                  <img src={require('../../assets/sik1.jpg')} />
                </Link>
                </p>
                <p><Link to="/package/assam">
                  <img src={require('../../assets/assam.jpg')} />
                </Link>
                </p>
                <p><Link to="/package/arunachal">
                  <img src={require('../../assets/ap1.jpg')} />
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
              <div>Rove Northeast is an organisation providing a gateway for adventure
                seekers and travellers across the globe to explore the virgin lands of
                mystical Northeast India.Apart from working as a travel agency, we
                encapsulate a social</div>
              <div> motive within to spread the glory and scenic
                raw beauty of the seven sisters that has remained unexplored and
                hidden. So get ready to discover Northeast in a new light!</div>
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
                      <p className="socialMedia"><a href="https://www.facebook.com/RoveNortheast" target="_blank"><img src={require('../../assets/fb.png')} /></a>
                        <a href="https://www.instagram.com/Rove_northeast" target="_blank"><img src={require('../../assets/instagram-new.png')} /></a>
                      </p>

                    </address>

                </section>
            </div>
        </div>)
    }
};

export default MainContent;
