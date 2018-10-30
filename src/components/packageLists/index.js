import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/header/Header';

const pathToPachageImages = require.context('../../assets/', true);

const packages = {
    meghalaya: [
        {
            url: '../package/Meghalaya/WeekenderSpecial',
            image: './bestpackage1.jpg'
        },
        {
            url: '../package/Meghalaya/ExploreMeghalaya',
            image: './bestpackage1.jpg'
        },
        {
            url: '../package/Meghalaya/NH7WeekenderStudentPackage',
            image: './bestpackage1.jpg'
        }],
    assam: [
        {
          url: '../package/Assam/RoverAdventurerPackage',
          image: './bestpackage1.jpg'
        },
        {
          url: '../package/Assam/ManasSafariPackage',
          image: './bestpackage1.jpg'
        }],
    sikkim: [
        {
            url: '../package/Sikkim/HoneymoonPackage',
            image: './bestpackage1.jpg'
        }],
    arunachalpradesh: [
        {
            url: '../package/ArunachalPradesh/ExploringTawang',
            image: './bestpackage1.jpg'
        }],
    nagaland: [
        {
            url: '../package/Nagaland/TrekRouteToValleyOfFlower',
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
            
        </div>)
    }
};

export default PackageLists;
