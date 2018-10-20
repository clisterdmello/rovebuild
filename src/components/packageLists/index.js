import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/header/Header';

class PackageLists extends React.Component {
    render() {
        return (<div className="banner bannerOther">
            <Header />
            <div className="mainContentPadding"></div>
            <div className="wrapper searchResults">
                <div className="searchResultListing">
                    <div className="searchListElement">
                        <div className="listedPackageDetails">
                            <p><Link to="/detail/package-name">
                                <img src={require('../../assets/bestpackage1.jpg')} />
                            </Link></p>
                        </div>
                    </div>
                    <div className="searchListElement">
                        <div className="listedPackageDetails">
                            <p><Link to="/detail/package-name">
                                <img src={require('../../assets/bestpackage1.jpg')} />
                            </Link></p>
                        </div>
                    </div>
                    <div className="searchListElement">
                        <div className="listedPackageDetails">
                            <p><Link to="/detail/package-name">
                                <img src={require('../../assets/bestpackage1.jpg')} />
                            </Link></p>
                        </div>
                    </div>
                    <div className="searchListElement">
                        <div className="listedPackageDetails">
                            <p><Link to="/detail/package-name">
                                <img src={require('../../assets/bestpackage1.jpg')} />
                            </Link></p>
                        </div>
                    </div>


                </div>


            </div>
            <footer>Footer ends here</footer>
        </div>)
    }
};

export default PackageLists;
