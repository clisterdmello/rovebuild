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
                <p><Link to="/package/arunachalpradesh">
                  <img src={require('../../assets/ap1.jpg')} />
                </Link>
                </p>
              </PackageCarousal>
            </div>
          <div className="wrapper famousPackages">
            <h2 className="center"><span className="borderBtm">Famous Packages</span></h2>
            <div className="packageContainer">
              <div>
                <a href="../#package/Meghalaya/WeekenderSpecial">
                  <img src={Banner} />
                  <span>
                                Meghalaya Weekender Special
                            </span>
                  <span>
                                6 Nights 7 Days
                            </span>
                </a>
              </div><div>
              <a href="../#package/ArunachalPradesh/ExploringTawang">
                <img src={Banner} />
                <span>
                                Explore Tawang
                            </span>
                <span>
                                5 Nights 6 Days
                            </span>
              </a>
            </div><div>
              <a href="../#package/Sikkim/HoneymoonPackage">
                <img src={Banner} />
                <span>
                                Sikkim Honeymoon Package
                            </span>
                <span>
                                3 Nights 4 Days
                            </span>
              </a>
            </div>
              <div>
                <a href="../#package/Meghalaya/ExploreMeghalaya">
                  <img src={Banner} />
                  <span>
                                Explore Meghalaya
                            </span>
                  <span>
                                2 Nights 3 Days
                            </span>
                </a>
              </div><div>
              <a href="../#package/Nagaland/TrekRouteToValleyOfFlower">
                <img src={Banner} />
                <span>
                                Trek Route To Valley Of Flower
                            </span>
                <span>
                                4 Nights 5 Days
                            </span>
              </a>
            </div><div>
              <a href="../#package/Assam/ManasSafariPackage">
                <img src={Banner} />
                <span>
                                Manas Safari Package
                            </span>
                <span>
                                2 Nights 3 Days
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
                      <p>Rove Northeast (1,381.53 km) 781007</p>
                      <p>Dr. B. Barooah Road, Ulubari</p>
                      <p>Guwahati</p>
                      <p className="socialMedia">
                        <a href="https://www.facebook.com/RoveNortheast" target="_blank"><img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTYuMC4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgd2lkdGg9IjY0cHgiIGhlaWdodD0iNjRweCIgdmlld0JveD0iMCAwIDc5MiA3OTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDc5MiA3OTI7IiB4bWw6c3BhY2U9InByZXNlcnZlIj4KPGc+Cgk8cGF0aCBkPSJNNDU0LjQwNiw3OTJIMzE2LjAwNWMtMTAuNDU0LDAtMTguOTM4LTguNDg0LTE4LjkzOC0xOC45MzhWNDQ4LjAwNWgtOTYuODUxYy0xMC40NTQsMC0xOC45MzgtOC40ODQtMTguOTM4LTE4LjkzOFYyOTUuMDIxICAgYzAtMTAuNDU0LDguNDg0LTE4LjkzOCwxOC45MzgtMTguOTM4aDk2Ljg1MXYtNzkuODgyQzI5Ny4wNjYsNzUuMTQ3LDM3MC4zNTgsMCw0ODguMzgxLDBjNTIuNzI0LDAsOTUuMTg0LDQuMDUzLDEwNS45MDIsNS40OTIgICBjOS40MzIsMS4yNSwxNi40MzgsOS4yOCwxNi40MzgsMTguNzg3djExOS44NDJjMCwxMC40NTQtOC40ODQsMTguOTM4LTE4LjkzOCwxOC45MzhsLTcwLjkwNSwwLjA3NiAgIGMtNDAuOTQ0LDAtNDcuNTM1LDEzLjYzNS00Ny41MzUsNDYuMzIzdjY2LjY2M2gxMTMuODE5YzUuNDU0LDAsMTAuNjQ0LDIuMzQ4LDE0LjIwMyw2LjQzOWMzLjU5OSw0LjA1Myw1LjI2Niw5LjUwNyw0LjU4NCwxNC45MjMgICBsLTE3LjI3MiwxMzQuMDQ1Yy0xLjIxMiw5LjQ2OS05LjI3OSwxNi41NTItMTguNzg2LDE2LjU1MmgtOTYuNTQ4djMyNS4wNThDNDczLjM0NCw3ODMuNTU0LDQ2NC44Niw3OTIsNDU0LjQwNiw3OTJ6ICAgIE0zMzQuOTQzLDc1NC4xMjNoMTAwLjUyNFY0MjkuMDY2YzAtMTAuNDU0LDguNDg0LTE4LjkzOCwxOC45MzgtMTguOTM4aDk4LjgybDEyLjQyNC05Ni4xNjlINDU0LjQwNiAgIGMtMTAuNDU0LDAtMTguOTM4LTguNDg0LTE4LjkzOC0xOC45MzhWMjA5LjQyYzAtMzYuMTM0LDguODYzLTg0LjIsODUuNDEyLTg0LjJsNTIuMDA1LTAuMDM4VjQxLjM2MSAgIGMtMTkuMzU1LTEuNjY3LTUwLjQ1Mi0zLjQ4NS04NC41MDMtMy40ODVjLTk2LjA5MywwLTE1My40MzgsNTkuMTY0LTE1My40MzgsMTU4LjMyNHY5OC44MmMwLDEwLjQ1NC04LjQ4NCwxOC45MzgtMTguOTM4LDE4LjkzOCAgIGgtOTYuODUxdjk2LjE2OWg5Ni44NTFjMTAuNDU0LDAsMTguOTM4LDguNDg0LDE4LjkzOCwxOC45MzhWNzU0LjEyM3oiIGZpbGw9IiMxMTJlMGMiLz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8Zz4KPC9nPgo8L3N2Zz4K" /></a>
                        <a href="https://www.instagram.com/Rove_northeast" target="_blank"><img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iaXNvLTg4NTktMSI/Pgo8IS0tIEdlbmVyYXRvcjogQWRvYmUgSWxsdXN0cmF0b3IgMTkuMS4wLCBTVkcgRXhwb3J0IFBsdWctSW4gLiBTVkcgVmVyc2lvbjogNi4wMCBCdWlsZCAwKSAgLS0+CjxzdmcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgdmVyc2lvbj0iMS4xIiBpZD0iQ2FwYV8xIiB4PSIwcHgiIHk9IjBweCIgdmlld0JveD0iMCAwIDMxLjA1OSAzMS4wNTkiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDMxLjA1OSAzMS4wNTk7IiB4bWw6c3BhY2U9InByZXNlcnZlIiB3aWR0aD0iNjRweCIgaGVpZ2h0PSI2NHB4Ij4KPGc+Cgk8Zz4KCQk8cGF0aCBkPSJNMjMuMTI4LDMxLjA1OUg3LjkzMUMzLjU1OCwzMS4wNTksMCwyNy41LDAsMjMuMTI3VjcuOTNDMCwzLjU1NywzLjU1OCwwLDcuOTMxLDBoMTUuMTk3ICAgIGM0LjM3MywwLDcuOTMxLDMuNTU3LDcuOTMxLDcuOTN2MTUuMTk3QzMxLjA1OSwyNy41LDI3LjUwMSwzMS4wNTksMjMuMTI4LDMxLjA1OXogTTcuOTMxLDEuNzc0Yy0zLjM5NSwwLTYuMTU2LDIuNzYxLTYuMTU2LDYuMTU1ICAgIHYxNS4xOTdjMCwzLjM5NSwyLjc2Miw2LjE1Niw2LjE1Niw2LjE1NmgxNS4xOTdjMy4zOTUsMCw2LjE1NS0yLjc2Miw2LjE1NS02LjE1NlY3LjkzYzAtMy4zOTUtMi43NjEtNi4xNTUtNi4xNTUtNi4xNTVINy45MzF6IiBmaWxsPSIjMTEyZTBjIi8+Cgk8L2c+Cgk8Zz4KCQk8cGF0aCBkPSJNMzAuMTcxLDExLjY1NEgxOS4yMzJjLTAuNDksMC0wLjg4OC0wLjM5OC0wLjg4OC0wLjg4OGMwLTAuNDksMC4zOTctMC44ODgsMC44ODgtMC44ODhoMTAuOTM4ICAgIGMwLjQ5LDAsMC44ODgsMC4zOTcsMC44ODgsMC44ODhDMzEuMDU5LDExLjI1NiwzMC42NjEsMTEuNjU0LDMwLjE3MSwxMS42NTR6IiBmaWxsPSIjMTEyZTBjIi8+Cgk8L2c+Cgk8Zz4KCQk8cGF0aCBkPSJNMTEuNTk3LDExLjY1NEgwLjg4N0MwLjM5NywxMS42NTQsMCwxMS4yNTYsMCwxMC43NjdjMC0wLjQ5LDAuMzk3LTAuODg4LDAuODg3LTAuODg4aDEwLjcxICAgIGMwLjQ5LDAsMC44ODgsMC4zOTcsMC44ODgsMC44ODhDMTIuNDg0LDExLjI1NiwxMi4wODcsMTEuNjU0LDExLjU5NywxMS42NTR6IiBmaWxsPSIjMTEyZTBjIi8+Cgk8L2c+Cgk8Zz4KCQk8cGF0aCBkPSJNMTUuNTI5LDIyLjQ1Yy0zLjgxNiwwLTYuOTIyLTMuMTA0LTYuOTIyLTYuOTIxYzAtMy44MTcsMy4xMDUtNi45MjIsNi45MjItNi45MjIgICAgYzMuODE2LDAsNi45MjEsMy4xMDQsNi45MjEsNi45MjJDMjIuNDUsMTkuMzQ2LDE5LjM0NiwyMi40NSwxNS41MjksMjIuNDV6IE0xNS41MjksMTAuMzgyYy0yLjgzOCwwLTUuMTQ4LDIuMzEtNS4xNDgsNS4xNDggICAgczIuMzEsNS4xNDYsNS4xNDgsNS4xNDZjMi44MzgsMCw1LjE0Ni0yLjMwOCw1LjE0Ni01LjE0NlMxOC4zNjcsMTAuMzgyLDE1LjUyOSwxMC4zODJ6IiBmaWxsPSIjMTEyZTBjIi8+Cgk8L2c+Cgk8Zz4KCQk8cGF0aCBkPSJNMjUuNTU3LDkuMzYxaC0zLjk5M2MtMC40OSwwLTAuODg4LTAuMzk3LTAuODg4LTAuODg3VjQuNDhjMC0wLjQ5LDAuMzk4LTAuODg3LDAuODg4LTAuODg3aDMuOTkzICAgIGMwLjQ5LDAsMC44ODcsMC4zOTcsMC44ODcsMC44ODd2My45OTRDMjYuNDQzLDguOTY1LDI2LjA0Nyw5LjM2MSwyNS41NTcsOS4zNjF6IE0yMi40NSw3LjU4NmgyLjIxOVY1LjM2OEgyMi40NVY3LjU4NnoiIGZpbGw9IiMxMTJlMGMiLz4KCTwvZz4KCTxnPgoJCQoJCQk8cGF0aCBzdHlsZT0ic3Ryb2tlLXdpZHRoOjEuNzc0ODtzdHJva2UtbGluZWNhcDpyb3VuZDtzdHJva2UtbGluZWpvaW46cm91bmQ7c3Ryb2tlLW1pdGVybGltaXQ6MTA7IiBkPSIgICAgTTE5LjIzMiwxMC43NjciIHN0cm9rZT0iIzExMmUwYyIgZmlsbD0iIzExMmUwYyIvPgoJPC9nPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+CjxnPgo8L2c+Cjwvc3ZnPgo=" /></a>
                        <a href="https://www.google.com/maps/place/Rove+Northeast/@26.1780685,91.7543568,17z/data=!3m1!4b1!4m5!3m4!1s0x375a5981295e2e87:0x6a4dc85be05ade32!8m2!3d26.1780685!4d91.7565455" target="_blank"><img src="data:image/svg+xml;utf8;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4KPCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KPHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA1MTIgNTEyIiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCA1MTIgNTEyIiB3aWR0aD0iNjRweCIgaGVpZ2h0PSI2NHB4Ij4KICA8Zz4KICAgIDxnIGZpbGw9IiMyMzFGMjAiPgogICAgICA8cGF0aCBkPSJtMzEzLjksMzc2LjdjNDEuMy02OC41IDkzLjUtMTY0LjggOTMuNS0yMTQuMyAwLTgzLjUtNjcuOS0xNTEuNC0xNTEuNC0xNTEuNC04My41LDAtMTUxLjQsNjcuOS0xNTEuNCwxNTEuNCAwLDQ5LjUgNTIuMiwxNDUuOCA5My41LDIxNC4zLTQ5LDMuNy0xNjAuNSwxNy0xNjAuNSw2MS4xIDAsNDMuNCAxMTMuMiw2My4yIDIxOC41LDYzLjIgMTA1LjIsMCAyMTguNS0xOS44IDIxOC41LTYzLjItMC4xLTQ0LjEtMTExLjctNTcuNC0xNjAuNy02MS4xem0tMTg4LjQtMjE0LjNjMC03MiA1OC42LTEzMC42IDEzMC41LTEzMC42IDcyLDAgMTMwLjYsNTguNiAxMzAuNiwxMzAuNiAwLDYyLjktMTAwLjIsMjIwLjctMTMwLjYsMjY3LjEtMzAuNC00Ni40LTEzMC41LTIwNC4yLTEzMC41LTI2Ny4xem0xMzAuNSwzMTcuN2MtMTI3LjksMC0xOTcuNi0yOC0xOTcuNi00Mi40IDAtMTEuMSA0Ni0zNSAxNTItNDEuMSAxOS45LDMyLjEgMzUsNTQuOCAzNyw1Ny41IDIuNywzLjYgMTAuNiw3LjkgMTcuMywwIDIuMS0yLjUgMTcuMS0yNS40IDM3LTU3LjUgMTA2LDYuMSAxNTIsMjkuOSAxNTIsNDEuMS0wLjEsMTQuNS02OS44LDQyLjQtMTk3LjcsNDIuNHoiIGZpbGw9IiMxMTJlMGMiLz4KICAgICAgPHBhdGggZD0ibTMyMS45LDE2Mi40YzAtMzYuNC0yOS41LTY1LjktNjUuOS02NS45LTM2LjQsMC02NS45LDI5LjUtNjUuOSw2NS45IDAsMzYuNCAyOS41LDY1LjkgNjUuOSw2NS45IDM2LjQsMCA2NS45LTI5LjUgNjUuOS02NS45em0tMTExLDBjMC0yNC45IDIwLjItNDUuMSA0NS4xLTQ1LjFzNDUuMSwyMC4yIDQ1LjEsNDUuMWMwLDI0LjktMjAuMiw0NS4xLTQ1LjEsNDUuMXMtNDUuMS0yMC4yLTQ1LjEtNDUuMXoiIGZpbGw9IiMxMTJlMGMiLz4KICAgIDwvZz4KICA8L2c+Cjwvc3ZnPgo=" /></a>
                      </p>

                    </address>

                </section>
            </div>
        </div>)
    }
};

export default MainContent;
