import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../../components/header/Header';

const pathToPachageImages = require.context('../../assets/', true);

const packages = {
    meghalaya: [
        {
            url: '../package/Meghalaya/WeekenderSpecial',
            image: './nag1.jpg',
            name: 'NH7 Weekender Student Package',
            location: 'Meghalaya'

        },
        {
            url: '../package/Meghalaya/ExploreMeghalaya',
            image: './nag1.jpg',
            name: 'Explore Meghalaya',
            location: 'Meghalaya'

        },
        {
            url: '../package/Meghalaya/NH7WeekenderStudentPackage',
            image: './nag1.jpg',
            name: 'NH7 Weekender Student Package',
            location: 'Meghalaya'
        }],
    assam: [
        {
            url: '../package/Assam/RoverAdventurerPackage',
            image: './nag1.jpg',
            name: 'My Package',
            location: 'Assam'

        },
        {
            url: '../package/Assam/ManasSafariPackage',
            image: './nag1.jpg',
            name: 'My Package',
            location: 'Assam'
        }],
    sikkim: [
        {
            url: '../package/Sikkim/HoneymoonPackage',
            image: './nag1.jpg',
            name: 'My Package',
            location: 'Assam'
        }],
    arunachalpradesh: [
        {
            url: '../package/ArunachalPradesh/ExploringTawang',
            image: './nag1.jpg',
            name: 'My Package',
            location: 'Assam'
        }],
    nagaland: [
        {
            url: '../package/Nagaland/TrekRouteToValleyOfFlower',
            image: './nag1.jpg',
            name: 'My Package',
            location: 'Assam'
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
                                    <div className="listedPackageDetails" title={unit.location+' ' +unit.name}>
                                        <p><Link to={unit.url}>
                                            <img src={pathToPachageImages(unit.image, true)} alt={unit.location+unit.name} />
                                        </Link></p>
                                        <p>{unit.name}</p>
                                    </div>
                                </div>
                            })}

                </div>


            </div>

        </div>)
    }
};

export default PackageLists;
