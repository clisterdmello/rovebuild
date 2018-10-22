import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/header/Header';

const packages = {
    meghalaya: [
        {
            url: '../package/meghalaya/wildcard',
            image: 'likes.png'
        },
        {
            url: '../package/meghalaya/trunpcad',
            image: 'bestpackage1-52eabecb.jpg'
        },
        {
            url: '../package/meghalaya/trunpcad',
            image: 'bestpackage1-52eabecb.jpg'
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
    computeFinalPackages(indivisualPackage) {
        let finalPackages = [];
        if (indivisualPackage) {
            finalPackages = packages[indivisualPackage];
        }

        if (finalPackages.length === 0) {
            for (let indivisualPackage in packages) {
                finalPackages.push(...packages[indivisualPackage])
            }
        }
        debugger;
        return finalPackages;
    }
    render() {
        const pakageCategory = this.props.match.params.group || null;
        return (<div className="banner bannerOther">
            <Header />
            <div className="mainContentPadding"></div>
            <div className="wrapper searchResults">
                <h2 className="center headTitle" >List Of packages</h2>
                <div className="searchResultListing">
                    {
                        this.computeFinalPackages(pakageCategory).map((unit, index) => {
                            return <div key={index} className="searchListElement">
                                <div className="listedPackageDetails">
                                    <p><Link to={unit.url}>
                                    <img src={require('../../assets/bestpackage1.jpg')} />
                                    </Link></p>
                                </div>
                            </div>
                        }

                        )}

                </div>


            </div>
            <footer>Footer ends here</footer>
        </div>)
    }
};

export default PackageLists;
