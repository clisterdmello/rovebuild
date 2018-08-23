import React from 'react';
import { Link } from 'react-router-dom'
import Banner from '../../assets/bestpackage1.jpg';

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

                <div>Total 12 search results </div>


                <div className="searchResultListing">


                    <div className="searchListElement">
                        <div className="likeAndCart">
                            <span>Like</span>
                            <span>Cart</span>
                        </div>
                        <div className="packageDetails">
                            <p><Link to="/detail/package-name"><img src={Banner} /></Link></p>
                            <p>
                                <span>Slot Booking</span>
                                <span>Book Now</span>
                            </p>
                        </div>
                    </div>

                     <div className="searchListElement">
                        <div className="likeAndCart">
                            <span>Like</span>
                            <span>Cart</span>
                        </div>
                        <div className="packageDetails">
                            <p><Link to="/detail/package-name"><img src={Banner} /></Link></p>
                            <p>
                                <span>Slot Booking</span>
                                <span>Book Now</span>
                            </p>
                        </div>
                    </div>

                     <div className="searchListElement">
                        <div className="likeAndCart">
                            <span>Like</span>
                            <span>Cart</span>
                        </div>
                        <div className="packageDetails">
                            <p><Link to="/detail/package-name"><img src={Banner} /></Link></p>
                            <p>
                                <span>Slot Booking</span>
                                <span>Book Now</span>
                            </p>
                        </div>
                    </div>

                    <div className="searchListElement">
                        <div className="likeAndCart">
                            <span>Like</span>
                            <span>Cart</span>
                        </div>
                        <div className="packageDetails">
                            <p><Link to="/detail/package-name"><img src={Banner} /></Link></p>
                            <p>
                                <span>Slot Booking</span>
                                <span>Book Now</span>
                            </p>
                        </div>
                    </div>

                     <div className="searchListElement">
                        <div className="likeAndCart">
                            <span>Like</span>
                            <span>Cart</span>
                        </div>
                        <div className="packageDetails">
                            <p><Link to="/detail/package-name"><img src={Banner} /></Link></p>
                            <p>
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
