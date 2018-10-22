import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/header/Header';


const packages = {
    meghalaya: [
        {
            url: '/detail/package-name',
            image: '../../assets/bestpackage1.jpg'
        },
        {
            url: '/detail/package-name',
            image: '../../assets/bestpackage1.jpg'
        }],
    arunachal: [
        {
            url: '/detail/package-name',
            image: '../../assets/bestpackage1.jpg'
        },
        {
            url: '/detail/package-name',
            image: '../../assets/bestpackage1.jpg'
        }],
};

class PackageLists extends React.Component {
    render() {
        const pakageCategory = this.props.match.params.group;
        return (<div className="banner bannerOther">
            <Header />
            <div className="mainContentPadding"></div>
            <div className="wrapper searchResults">
                <h2 className="center headTitle" >List Of packages</h2>
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
