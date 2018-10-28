import React from 'react';
import Header from '../../components/header/Header';
import PackageCarousal from '../../components/packageCarousal';
const pathToPachageImages = require.context('../../assets/', true);
const packages = {
    meghalayawildcard:
    {
        description: `The picturesque land of North East India has amazing
and limitless offerings for you. Add to
that the Happiest Music Festival, you have an offer
you can’t refuse! We’ll amplify your
experience of the Bacardi NH7 Weekender by topping
it up with our irresistible sightseeing
packages for Meghalaya. Among many gems in the
state are Shillong, Cherrapunji and
Jaintia Hills. The bewildering richness of flora &amp;
fauna, amazing scenic beauty will leave you
speechless.`,
        gallery: [{
            type: 'image',
            image: './bestpackage1.jpg'
        },
        {
            type: 'video',
            video: 'https://www.youtube.com/embed/zZIMK04bvnU'
        }],
        activities: [
            {
                type: 'Signt Seeing',
                icon: './icons/cycling.png'
            }
        ]
    }
};

class PackageDetails extends React.Component {
    constructor() {
        super();
    }

    render() {
        const { group, pkgid } = this.props.match.params;
        const packagesDetails = packages[`${group + pkgid}`];
        return (<div className="banner bannerOther">
            <Header />
            <div className="wrapper mainContentPadding">
                <section className="packageDetails">
                    <h2 className="center titleDetailsPage">{pkgid}</h2>

                    <div className="detailSectionTitle">Package Description</div>
                    <div className="detailSectionDescription">
                        {packagesDetails.description}
                    </div>
                    <div id="packageOfferings">
                        <div className="fecilitypics">
                            <PackageCarousal timer="0" showArrows="true">
                                {
                                    packagesDetails.gallery.map((slide, index) => {
                                        return <p key={index}> {slide.type === 'image' && <img src={pathToPachageImages(slide.image, true)} alt={slide.image} />}
                                            {slide.type === 'video' && <iframe width="400" height="400" src="https://www.youtube.com/embed/zZIMK04bvnU" ></iframe>}</p>
                                    })
                                }

                            </PackageCarousal>
                        </div>
                        <div className="fecilitydetails">
                            <h2>Activities</h2>
                            <table><tbody>
                                {
                                    packagesDetails.activities.map((slide, index) => {
                                        return <tr key={index}>
                                            <td>{slide.type}</td>
                                            <td><img src={pathToPachageImages(slide.icon, true)} alt={slide.type} /></td>
                                        </tr>
                                    })
                                }
                            </tbody>
                            </table>
                        </div>


                    </div>
                    <div className="signiningForm center">
                        <form action="">
                            <table><tbody>
                                <tr>
                                    <td><label>Name</label> <input type="text" /></td>
                                    <td> <label>Email</label>  <input type="Email" /></td>
                                    <td><label>Contact</label> <input type="Email" /></td>
                                </tr>
                                <tr >
                                    <td colSpan="3" className="center"><input type="Submit" value="Enquire" /></td>

                                </tr></tbody>
                            </table>
                        </form>
                    </div>

                </section>
                <footer>


                </footer>
            </div>
        </div>)
    }
};

export default PackageDetails;
