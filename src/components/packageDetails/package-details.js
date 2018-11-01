import React from 'react';
import Header from '../../components/header/Header';
import PackageCarousal from '../../components/packageCarousal';
const pathToPachageImages = require.context('../../assets/', true);
const packages = {
  meghalayaweekenderspecial:{
    description: `The picturesque land of North East India has 
        amazing and limitless offerings for you. 
        Add to that the Happiest Music Festival, 
        you have an offer you can’t refuse! 
        We’ll amplify your experience of the Bacardi NH7 Weekender 
        by topping it up with our irresistible sightseeing  packages for Meghalaya. 
        Among many gems in the state are Shillong, Cherrapunji and  Jaintia Hills. 
        The bewildering richness of flora &amp; fauna, amazing scenic beauty will leave you speechless.  `,
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
        icon: './icons/Camping.png'
      },
      {
        type: 'Signt Seeing',
        icon: './icons/SightSeeing.png'
      },
      {
        type: 'Boating',
        icon: './icons/Boating.png'
      },
      {
        type: 'Trekking',
        icon: './icons/Trekking.png'
      }
    ],
    costing: [
      'Point1','Point2',
    ]
  },
  meghalayaexploremeghalaya:{
    description: `The picturesque land of North East India has amazing and limitless offerings for you. You  simply can’t arrive and claim, “That’s it, I’ve seen it all”. 
        A few steps away, an unseen  beautiful waterfall might be waiting for you. Among many gems some most popular are  Shillong, Cherrapunji and Dawki. 
        The bewildering richness of flora &amp; fauna, amazing scenic  beauty will leave you speechless.`,
    places: `Cherrapunjee, Dawki, Mawlyngnong, Shillong  `,
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
        icon: './icons/SightSeeing.png'
      },
      {
        type: 'Boating',
        icon: './icons/Boating.png'
      },
      {
        type: 'Trekking',
        icon: './icons/Trekking.png'
      },
    ],
    costing: [
      'Point1','Point2',
    ]
  },
  meghalayanh7weekenderstudentpackage:{
    description: `The picturesque land of North East India has amazing and limitless offerings for you. 
        Add to  that the Happiest Music Festival, you have an offer you can’t refuse! 
        We’ll amplify your  experience of the Bacardi NH7 Weekender by topping it up with our irresistible trip to  Krangshuri Waterfall. 
        The bewildering richness of flora &amp; fauna, amazing scenic beauty will  leave you speechless.`,
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
        icon: './icons/Camping.png'
      },
      {
        type: 'Signt Seeing',
        icon: './icons/SightSeeing.png'
      },
    ],
    costing: [
      'Point1','Point2',
    ]
  },
  assamroveradventurerpackage:{
    description: `The picturesque land of North East India has amazing and limitless offerings for you. 
    You  simply can’t arrive and claim, “That’s it, I’ve seen it all”. 
    A few steps away, an unseen  beautiful waterfall might be waiting for you. 
    Among many gems some most popular are  Kaziranga and Nameri National Parks, Shillong, and Cherrapunji. 
    The bewildering richness  of flora &amp; fauna, amazing scenic beauty will leave you speechless.`,
    places:`Nameri, Kaziranga, shillong, dawki, Double-decker Root Bridge, Mawlynnong, Living Root Bridge, Cherrapunji, Chand Dubi`,
    gallery: [{
      type: 'image',
      image: './nag1.jpg',
    },
      {
        type: 'image',
        image: './nag1.jpg',
      },
      {
        type: 'image',
        image: './nag1.jpg',
      },
      {
        type: 'video',
        video: 'https://www.youtube.com/embed/zZIMK04bvnU'
      }],
    activities: [
      {
        type: 'Signt Seeing',
        icon: './icons/SightSeeing.png'
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
        icon: './icons/Boating.png'
      },
      {
        type: 'Campfire',
        icon: './icons/CampFire.png'
      },
    ],
    costing: [
      'Point1','Point2',
    ]

    
  },
  assammanassafaripackage:{
    description: `The enchanting Manas National Park is waiting to blow your mind with its bewildering 
    beauty  and its diversity of flora and fauna. Experience it at its best with us with our stays in 
    cottage  tents and outdoor tents and our elephant safari and Jeep safari!  `,
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
        icon: './icons/Trekking.png'
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
    ],
    costing: [
      'Point1','Point2',
    ]
  },
  sikkimhoneymoonpackage:{
    description: `The picturesque land of North East India has amazing and limitless offerings for you. 
        Add to  that the Happiest Music Festival, you have an offer you can’t refuse! 
        We’ll amplify your  experience of the Bacardi NH7 Weekender by topping it up with our irresistible trip to  Krangshuri Waterfall. 
        The bewildering richness of flora &amp; fauna, amazing scenic beauty will  leave you speechless.`,
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
        icon: './icons/SightSeeing.png'
      },
    ],
    costing: [
      'Point1','Point2',
    ]
  },
  arunachalpradeshexploringtawang:{
    description: `The picturesque land of North East India has amazing and limitless offerings for you. 
        Add to  that the Happiest Music Festival, you have an offer you can’t refuse! 
        We’ll amplify your  experience of the Bacardi NH7 Weekender by topping it up with our irresistible trip to  Krangshuri Waterfall. 
        The bewildering richness of flora &amp; fauna, amazing scenic beauty will  leave you speechless.`,
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
        icon: './icons/SightSeeing.png'
      },
      {
        type: 'Road Trip',
        icon: './icons/cycling.png'
      },
    ],
    costing: [
      'Point1','Point2',
    ]
  },
  nagalandtrekroutetovalleyofflower:{
    description: `The picturesque land of North East India has amazing and limitless offerings for you. 
        Add to  that the Happiest Music Festival, you have an offer you can’t refuse! 
        We’ll amplify your  experience of the Bacardi NH7 Weekender by topping it up with our irresistible trip to  Krangshuri Waterfall. 
        The bewildering richness of flora &amp; fauna, amazing scenic beauty will  leave you speechless.`,
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
        icon: './icons/Camping.png'
      },
      {
        type: 'Adventure',
        icon: './icons/cycling.png'
      },
      {
        type: 'Trekking',
        icon: './icons/Trekking.png'
      },
    ],
    costing: [
      'Point1','Point2',
    ]
  },


};

class PackageDetails extends React.Component {
    constructor() {
        super();
    }

    render() {
        const { group, pkgid } = this.props.match.params;
        const selectedPackageDetails = packages[`${group.toLowerCase() + pkgid.toLowerCase()}`];
        return (<div className="banner bannerOther">
            <Header />
            <div className="wrapper mainContentPadding">
                <section className="packageDetails">
                    <h2 className="center titleDetailsPage">{pkgid}</h2>

                    <div className="detailSectionTitle">Package Description</div>
                    <div className="detailSectionDescription">
                        {selectedPackageDetails.description}
                    </div>
                    <div className="detailSectionTitle">Explored places</div>
                    <div className="detailSectionDescription">
                        {selectedPackageDetails.places}
                    </div>
                  <div className="detailSectionTitle">Package Costing</div>
                  <div className="detailSectionDescription">
                    <ul id="costing">
                      {
                        selectedPackageDetails.costing.map((slide, index) => {
                          return <li key={slide}>{slide}</li>
                        })
                      }
                    </ul>
                  </div>
                    <div id="packageOfferings">
                        <div className="fecilitypics">
                            <PackageCarousal timer="0" showArrows="true">
                                {
                                    selectedPackageDetails.gallery.map((slide, index) => {
                                        return <p key={index}> {slide.type === 'image' && <img src={pathToPachageImages(slide.image, true)} alt={slide.image} />}
                                            {slide.type === 'video' && <iframe width="400" height="350" src="https://www.youtube.com/embed/zZIMK04bvnU" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="allowfullscreen"></iframe>}</p>
                                    })
                                }

                            </PackageCarousal>


                            
                        </div>
                        <div className="fecilitydetails">
                            <h2>Activities</h2>
                            
                                {
                                    selectedPackageDetails.activities.map((slide, index) => {
                                      return <div key={index}>
                                              <img src={pathToPachageImages(slide.icon, true)} alt={slide.type} title={slide.type} />
                                            </div>
                                      })
                                }
                            
                        </div>


                    </div>
                    <div className="signiningForm center">
                        <form action="">
                            <table>
                                <tbody>
                                <tr>
                                    <td><input type="text"  placeholder="Name"/></td>
                                    <td><input type="Email" placeholder="Email"/></td>
                                    <td><input type="text" placeholder="Contact"/></td>
                                    <td><input type="Submit" value="Enquire" /></td>
                                </tr>
                                </tbody>
                            </table>
                        </form>
                    </div>

                </section>
                <footer>
                    <div id="callMeBack" onClick={()=>{window.scroll(0, window.document.body.offsetHeight)}}>
                           Want us to call you
                    </div>
                </footer>
            </div>
        </div>)
    }
};

export default PackageDetails;
