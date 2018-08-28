import React from 'react';
import { Link } from 'react-router-dom'
import Banner from '../../assets/bestpackage1.jpg';
import likes from '../../assets/likes.png';
import cart from '../../assets/searchListCart.png';

class SearchResults extends React.Component {
    render() {
        return (<div className="banner bannerOther">
            <div className="searchResultsBarContainer">
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
                    <div >
                        <span>Modify Search</span>
                    </div>
                </form>
            </div>


            <div className="wrapper searchResults">

                <div className="resultCount">Total 12 search results </div>

                <div className="searchResultListing">
                    <div className="searchListElement">
                        <div className="likeAndCart">
                            <p>
                                <img src={likes} />
                                200
                            </p>
                            <p>
                                <img src={cart} />
                            </p>
                        </div>
                        <div className="packageDetails">
                            <p><Link to="/detail/package-name"><img src={require('../../assets/bestpackage1.jpg')} /></Link></p>
                            <p className="booking">
                                <span>Slot Booking</span>
                                <span>Book Now</span>
                            </p>
                        </div>
                    </div>

                    <div className="searchListElement">
                        <div className="likeAndCart">
                            <p>
                                <img src={likes} />
                                200
                            </p>
                            <p>
                                <img src={cart} />
                            </p>
                        </div>
                        <div className="packageDetails">
                            <p><Link to="/detail/package-name"><img src={require('../../assets/bestpackage1.jpg')} /></Link></p>
                            <p className="booking">
                                <span>Slot Booking</span>
                                <span>Book Now</span>
                            </p>
                        </div>
                    </div>
                    <div className="searchListElement">
                        <div className="likeAndCart">
                            <p>
                                <img src={likes} />
                                200
                            </p>
                            <p>
                                <img src={cart} />
                            </p>
                        </div>
                        <div className="packageDetails">
                            <p><Link to="/detail/package-name"><img src={require('../../assets/bestpackage1.jpg')} /></Link></p>
                            <p className="booking">
                                <span>Slot Booking</span>
                                <span>Book Now</span>
                            </p>
                        </div>
                    </div>
                    <div className="searchListElement">
                        <div className="likeAndCart">
                            <p>
                                <img src={likes} />
                                200
                            </p>
                            <p>
                                <img src={cart} />
                            </p>
                        </div>
                        <div className="packageDetails">
                            <p><Link to="/detail/package-name"><img src={require('../../assets/bestpackage1.jpg')} /></Link></p>
                            <p className="booking">
                                <span>Slot Booking</span>
                                <span>Book Now</span>
                            </p>
                        </div>
                    </div>
                    <div className="searchListElement">
                        <div className="likeAndCart">
                            <p>
                                <img src={likes} />
                                200
                            </p>
                            <p>
                                <img src={cart} />
                            </p>
                        </div>
                        <div className="packageDetails">
                            <p><Link to="/detail/package-name"><img src={require('../../assets/bestpackage1.jpg')} /></Link></p>
                            <p className="booking">
                                <span>Slot Booking</span>
                                <span>Book Now</span>
                            </p>
                        </div>
                    </div>
                    <div className="searchListElement">
                        <div className="likeAndCart">
                            <p>
                                <img src={likes} />
                                200
                            </p>
                            <p>
                                <img src={cart} />
                            </p>
                        </div>
                        <div className="packageDetails">
                            <p><Link to="/detail/package-name"><img src={require('../../assets/bestpackage1.jpg')} /></Link></p>
                            <p className="booking">
                                <span>Slot Booking</span>
                                <span>Book Now</span>
                            </p>
                        </div>
                    </div>

                </div>


            </div>
            <footer>Footer ends here</footer>
        </div>)
    }
};

export default SearchResults;
