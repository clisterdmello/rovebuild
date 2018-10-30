import React from 'react';
import Header from '../../components/header/Header';
import PackageCarousal from '../../components/packageCarousal';
const pathToPachageImages = require.context('../../assets/', true);
const packages = {
    MeghalayaWeekenderSpecial:{
        description: `The picturesque land of North East India has 
        amazing and limitless offerings for you. 
        Add to that the Happiest Music Festival, 
        you have an offer you can’t refuse! 
        We’ll amplify your experience of the Bacardi NH7 Weekender 
        by topping it up with our irresistible sightseeing packages for Meghalaya. 
        Among many gems in the state are Shillong, Cherrapunji and Jaintia Hills. 
        The bewildering richness of flora &amp; fauna, amazing scenic beauty will leave you speechless. `,
        places: 'Shillong,Jowai, NH7 Weekender, Dawki, Mawlyngnong, Bangladesh border, Living root bridge, Cherrapunji, Chand-Dubi Jungle Camp',
        gallery: [{
            type: 'image',
            image: './NH7_weekender.jpg'
        },
          {
            type: 'image',
            image: './Rover_sDen1.jpg'
          },
          {
            type: 'image',
            image: './Rover_sDen2.jpg'
          },
          {
            type: 'image',
            image: './Rover_sDen3.jpg'
          },
          {
            type: 'video',
            video: 'https://www.youtube.com/embed/zZIMK04bvnU'
          }],
        activities: [
            {
                type: 'Camping',
                icon: './icons/cycling.png'
            },
            {
                type: 'Signt Seeing',
                icon: './icons/cycling.png'
            },
            {
                type: 'Boating',
                icon: './icons/cycling.png'
            },
            {
                type: 'Trekking',
                icon: './icons/cycling.png'
            }
        ]
    },
    MeghalayaExploreMeghalaya:{
        description: `The picturesque land of North East India has amazing and limitless offerings for you. 
        You simply can’t arrive and claim, “That’s it, I’ve seen it all”. 
        A few steps away, an unseen beautiful waterfall might be waiting for you. 
        Among many gems some most popular are Shillong, Cherrapunji and Dawki. 
        The bewildering richness of flora &amp; fauna, amazing scenic beauty will leave you speechless.`,
        places: `Cherrapunjee, Dawki, Mawlyngnong, Shillong `,
        gallery: [{
            type: 'image',
            image: './Cherrapunji.jpg'
        },
          {
            type: 'image',
            image: './Dawki 2.jpg'
          },
          {
            type: 'image',
            image: './Mawlyngnong.jpg'
          },
          {
            type: 'image',
            image: './Polo Orchid Cherrapunjee2.jpg'
          },
        {
            type: 'video',
            video: 'https://www.youtube.com/embed/zZIMK04bvnU'
        }],
        activities: [
            {
                type: 'Signt Seeing',
                icon: './icons/cycling.png'
            },
            {
                type: 'Boating',
                icon: './icons/cycling.png'
            },
            {
                type: 'Trekking',
                icon: './icons/cycling.png'
            },
        ]
    },
    MeghalayaNH7WeekenderStudentPackage:{
      description: `The picturesque land of North East India has amazing and limitless offerings for you. 
        Add to that the Happiest Music Festival, you have an offer you can’t refuse! 
        We’ll amplify your experience of the Bacardi NH7 Weekender by topping it up with our irresistible trip to Krangshuri Waterfall. 
        The bewildering richness of flora &amp; fauna, amazing scenic beauty will leave you speechless.`,
      places: `Jowai, NH7 Weekender, Khransuri waterfall`,
      gallery: [{
        type: 'image',
        image: './NH7_weekender.jpg'
      },
        {
          type: 'image',
          image: './Krangshuri Waterfall.jpg'
        },
        {
          type: 'image',
          image: './Rover_sDen1.jpg'
        },
          {
            type: 'video',
            video: 'https://www.youtube.com/embed/zZIMK04bvnU'
          }],
      activities: [
          {
            type: 'Camping',
            icon: './icons/cycling.png'
          },
          {
            type: 'Signt Seeing',
            icon: './icons/cycling.png'
          },
          ]
    },
  MeghalayaNH7WeekenderStudentPackage:{
    description: `The picturesque land of North East India has amazing and limitless offerings for you. 
        Add to that the Happiest Music Festival, you have an offer you can’t refuse! 
        We’ll amplify your experience of the Bacardi NH7 Weekender by topping it up with our irresistible trip to Krangshuri Waterfall. 
        The bewildering richness of flora &amp; fauna, amazing scenic beauty will leave you speechless.`,
    places: `Jowai, NH7 Weekender, Khransuri waterfall`,
    gallery: [{
      type: 'image',
      image: './NH7_weekender.jpg'
    },
      {
        type: 'image',
        image: './Krangshuri Waterfall.jpg'
      },
      {
        type: 'image',
        image: './Rover_sDen1.jpg'
      },
      {
        type: 'video',
        video: 'https://www.youtube.com/embed/zZIMK04bvnU'
      }],
    activities: [
      {
        type: 'Camping',
        icon: './icons/cycling.png'
      },
      {
        type: 'Signt Seeing',
        icon: './icons/cycling.png'
      },
    ]
  },
  AssamRoverAdventurerPackage:{
    description: `The picturesque land of North East India has amazing and limitless offerings for you. 
    You simply can’t arrive and claim, “That’s it, I’ve seen it all”. 
    A few steps away, an unseen beautiful waterfall might be waiting for you. 
    Among many gems some most popular are Kaziranga and Nameri National Parks, Shillong, and Cherrapunji. 
    The bewildering richness of flora &amp; fauna, amazing scenic beauty will leave you speechless.`,
    places:`Nameri, Kaziranga, shillong, dawki, Double-decker Root Bridge, Mawlynnong, Living Root Bridge, Cherrapunji, Chand Dubi`,
    gallery: [{
      type: 'image',
      image: './Living root bridge.jpg'
    },
      {
        type: 'image',
        image: './Nameri-Rafting-by-Sachin-Rai.jpg'
      },
      {
        type: 'image',
        image: './kaziranga-elephant-safari-3.jpg'
      },
      {
        type: 'video',
        video: 'https://www.youtube.com/embed/zZIMK04bvnU'
      }],
    activities: [
      {
        type: 'Signt Seeing',
        icon: './icons/cycling.png'
      },
      {
        type: 'Elephant Safari',
        icon: './icons/cycling.png'
      },
      {
        type: 'Jeep Safari',
        icon: './icons/cycling.png'
      },
      {
        type: 'River Rafting',
        icon: './icons/cycling.png'
      },
      {
        type: 'Boating',
        icon: './icons/cycling.png'
      },
      {
        type: 'Campfire',
        icon: './icons/cycling.png'
      },
    ]
  },
  AssamManasSafariPackage:{
    description: `The enchanting Manas National Park is waiting to blow your mind with its bewildering 
    beauty and its diversity of flora and fauna. Experience it at its best with us with our stays in 
    cottage tents and outdoor tents and our elephant safari and Jeep safari! `,
    places:`Nameri, Kaziranga, shillong, dawki, Double-decker Root Bridge, Mawlynnong, Living Root Bridge, Cherrapunji, Chand Dubi`,
    gallery: [{
      type: 'image',
      image: './Manas national park.jpg'
    },
      {
        type: 'image',
        image: './smiling tusker elephant camp.jpg'
      },
      {
        type: 'image',
        image: './smiling tusker elephant camp 2.jpg'
      },
      {
        type: 'video',
        video: 'https://www.youtube.com/embed/zZIMK04bvnU'
      }],
    activities: [
      {
        type: 'Jungle Trekking',
        icon: './icons/cycling.png'
      },
      {
        type: 'Camping',
        icon: './icons/cycling.png'
      },
      {
        type: 'Elephant Safari',
        icon: './icons/cycling.png'
      },
      {
        type: 'River Rafting',
        icon: './icons/cycling.png'
      },
    ]
  },
  SikkimHoneymoonPackage:{
    description: `The picturesque land of North East India has amazing and limitless offerings for you. 
        Add to that the Happiest Music Festival, you have an offer you can’t refuse! 
        We’ll amplify your experience of the Bacardi NH7 Weekender by topping it up with our irresistible trip to Krangshuri Waterfall. 
        The bewildering richness of flora &amp; fauna, amazing scenic beauty will leave you speechless.`,
    places: `Gangtok, Tsomgo Lake/Changu Lake`,
    gallery: [{
      type: 'image',
      image: './sik1.jpg'
    },
      {
        type: 'image',
        image: './sik1.jpg'
      },
      {
        type: 'image',
        image: './sik1.jpg'
      },
      {
        type: 'video',
        video: 'https://www.youtube.com/embed/zZIMK04bvnU'
      }],
    activities: [
      {
        type: 'Signt Seeing',
        icon: './icons/cycling.png'
      },
    ]
  },
  ArunachalPradeshExploringTawang:{
    description: `The picturesque land of North East India has amazing and limitless offerings for you. 
        Add to that the Happiest Music Festival, you have an offer you can’t refuse! 
        We’ll amplify your experience of the Bacardi NH7 Weekender by topping it up with our irresistible trip to Krangshuri Waterfall. 
        The bewildering richness of flora &amp; fauna, amazing scenic beauty will leave you speechless.`,
    places: `Guwahati, Tezpur, Dirang, Tawang, bomdila`,
    gallery: [{
      type: 'image',
      image: './ap1.jpg'
    },
      {
        type: 'image',
        image: './ap1.jpg'
      },
      {
        type: 'image',
        image: './ap1.jpg'
      },
      {
        type: 'video',
        video: 'https://www.youtube.com/embed/zZIMK04bvnU'
      }],
    activities: [
      {
        type: 'Adventure',
        icon: './icons/cycling.png'
      },
      {
        type: 'Signt Seeing',
        icon: './icons/cycling.png'
      },
      {
        type: 'Road Trip',
        icon: './icons/cycling.png'
      },
    ]
  },
  NagalandTrekRouteToValleyOfFlower:{
    description: `The picturesque land of North East India has amazing and limitless offerings for you. 
        Add to that the Happiest Music Festival, you have an offer you can’t refuse! 
        We’ll amplify your experience of the Bacardi NH7 Weekender by topping it up with our irresistible trip to Krangshuri Waterfall. 
        The bewildering richness of flora &amp; fauna, amazing scenic beauty will leave you speechless.`,
    places: `Kohima, Dzukou Valley`,
    gallery: [{
      type: 'image',
      image: './nag1.jpg'
    },
      {
        type: 'image',
        image: './na2.jpg'
      },
      {
        type: 'image',
        image: './nag2.jpg'
      },
      {
        type: 'video',
        video: 'https://www.youtube.com/embed/zZIMK04bvnU'
      }],
    activities: [
      {
        type: 'Camping',
        icon: './icons/cycling.png'
      },
      {
        type: 'Adventure',
        icon: './icons/cycling.png'
      },
      {
        type: 'Trekking',
        icon: './icons/cycling.png'
      },
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
                                            <td><img src={pathToPachageImages(slide.icon, true)} alt={slide.type} title={slide.type} /></td>
                                        </tr>
                                    })
                                }
                            </tbody>
                            </table>
                        </div>


                    </div>
                    <div className="signiningForm center">
                        <form action="">
                            <table>
                                <tbody>
                                <tr>
                                    <td><label>Name</label> <input type="text" /></td>
                                    <td> <label>Email</label>  <input type="Email" /></td>
                                    <td><label>Contact</label> <input type="Email" /></td>
                                    <td><input type="Submit" value="Enquire" /></td>
                                </tr>
                                </tbody>
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
