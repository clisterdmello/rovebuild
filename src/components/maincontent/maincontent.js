import React from 'react';
import Banner from '../../assets/bestpackage1.jpg';

class MainContent extends React.Component {
    render() {
        return (<div>
            <div className="banner">
                <div className="wrapper packageIntro">
                </div>
                <div>
                    <form className="wrapper searchBarContainer" method="post">
                        <div>
                            <label>Start Date</label>
                            <input type="date" name="startDate"></input>
                        </div>
                        <div>
                            <label>Finish Date</label>
                            <input type="date" name="startDate" ></input>
                        </div>
                        <div>
                            <label>Place to Explore</label>
                            <input type="datetime" name="placetoexplore" placeholder="North East"></input>
                        </div>
                        <div>
                            <label>Type to Explore</label>
                            <input type="datetime" name="actiontoexplore" placeholder="Hiking" ></input>
                        </div>
                        <div>
                            <label>No of people</label>
                            <input type="number" name="noofpeople" placeholder="1"></input>
                        </div>
                        <div className="searchButton">
                            <input type="submit" name="search" ></input>
                        </div>
                    </form>
                </div>
            </div>
            <div className="wrapper famousPackages">
                <h2 className="center"><span className="borderBtm">Famous Packages</span></h2>
                <div className="packageContainer">
                    <div>
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
