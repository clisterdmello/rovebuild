import React from 'react';
import Header from '../../components/header/Header';
import PackageCarousal from '../../components/packageCarousal';
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
            url: './bestpackage1.jpg'
        },
        {
            type: 'video',
            url: 'https://www.youtube.com/watch?v=zZIMK04bvnU&feature=youtu.be'
        }],
        gallery: [
            {
                title: 'Adventure',
                icon: './adventure.png'
            }
        ]
    },
    arunachalwildcard:
    {
        description: `Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's
                standard dummy text ever since the 1500s, when an unknown printer took a
                galley of type and scrambled it to make a type specimen book.
                It has survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially.`,
        gallery: [{
            type: 'image',
            url: './bestpackage1.jpg'
        },
        {
            type: 'video',
            url: 'https://www.youtube.com/watch?v=zZIMK04bvnU&feature=youtu.be'
        }],
        gallery: [
            {
                title: 'Adventure',
                icon: './adventure.png'
            }
        ]
    },
};

class PackageDetails extends React.Component {
    constructor() {
        super();
    }

    render() {
        const { group, pkgid } = this.props.match.params;
        const packagesDetails = packages[`${group + pkgid}`];
        console.log(packagesDetails);
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
                                <p ><img src={require('../../assets/packages/himalaya/1.jpg')} />

                                </p>
                                <p ><img src={require('../../assets/packages/himalaya/2.jpg')} />

                                </p>
                                <p><iframe width="400"
                                    height="400"
                                    src="https://www.youtube.com/embed/zZIMK04bvnU" ></iframe></p>
                            </PackageCarousal>
                        </div>
                        <div className="fecilitydetails">
                            <h2>What to look for</h2>
                            <table><tbody>

                                <tr>
                                    <td><img src={require('../../assets/icons/adventure.png')} /> </td>
                                    <td>Adventure</td>
                                    <td>Cycling</td>
                                    <td><img src={require('../../assets/icons/cycling.png')} /> </td>
                                </tr>
                                <tr>
                                    <td><img src={require('../../assets/icons/adventure.png')} /> </td>
                                    <td>Adventure</td>
                                    <td>Cycling</td>
                                    <td><img src={require('../../assets/icons/cycling.png')} /> </td>
                                </tr>
                                <tr>
                                    <td><img src={require('../../assets/icons/adventure.png')} /> </td>
                                    <td>Adventure</td>
                                    <td>Cycling</td>
                                    <td><img src={require('../../assets/icons/cycling.png')} /> </td>
                                </tr>
                                <tr>
                                    <td><img src={require('../../assets/icons/adventure.png')} /> </td>
                                    <td>Adventure</td>
                                    <td>Cycling</td>
                                    <td><img src={require('../../assets/icons/cycling.png')} /> </td>
                                </tr>
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
                                    <td colspan="3" className="center"><input type="Submit" value="Enquire" /></td>

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
