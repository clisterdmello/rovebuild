import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/header/Header';

const pathToPachageImages = require.context('../../assets/', true);

const packages = {
    meghalaya: [
        {
            url: '../package/meghalaya/wildcard',
            image: './bestpackage1.jpg'
        },
        {
            url: '../package/meghalaya/trunpcad',
            image: './bestpackage1.jpg'
        },
        {
            url: '../package/meghalaya/trunpcad',
            image: './bestpackage1.jpg'
        }],
    arunachal: [
        {
            url: '../package/meghalaya/wildcard',
            image: './bestpackage1.jpg'
        },
        {
            url: '../package/meghalaya/trunpcad',
            image: './bestpackage1.jpg'
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
                                    <img src={pathToPachageImages(unit.image, true)} alt={unit.url} />
                                    </Link></p>
                                </div>
                            </div>}

                        )}

                </div>


            </div>
            <footer>Footer ends here</footer>
        </div>)
    }
};

export default PackageLists;
