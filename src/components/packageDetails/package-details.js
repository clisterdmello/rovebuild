import React from 'react';
import Header from '../../components/header/Header';
import Enquire from '../../components/enquire/enquire';
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
      image: './packages/large/NH7_weekender.jpg'
    },
      {
        type: 'image',
        image: './packages/large/Rover_sDen1.jpg'
      },
      {
        type: 'image',
        image: './packages/large/Rover_sDen2.jpg'
      },
      {
        type: 'image',
        image: './packages/large/Rover_sDen3.jpg'
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
      '17500/- per person (6 person group)',
    ]
  },
  meghalayaexploremeghalaya:{
    description: `The picturesque land of North East India has amazing and limitless offerings for you. You  simply can’t arrive and claim, “That’s it, I’ve seen it all”. 
        A few steps away, an unseen  beautiful waterfall might be waiting for you. Among many gems some most popular are  Shillong, Cherrapunji and Dawki. 
        The bewildering richness of flora &amp; fauna, amazing scenic  beauty will leave you speechless.`,
    places: `Cherrapunjee, Dawki, Mawlyngnong, Shillong  `,
    gallery: [{
      type: 'image',
      image: './packages/large/Cherrapunji.jpg'
    },
      {
        type: 'image',
        image: './packages/large/Dawki-2.jpg'
      },
      {
        type: 'image',
        image: './packages/large/Mawlyngnong.jpg'
      },
      {
        type: 'image',
        image: './packages/large/Polo-Orchid-Cherrapunjee2.jpg'
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
      '15,650/- per person (luxury Basic) (4 person group) (twin sharing)','17,500/-  per person luxury(Premium) (4 person group) (twin sharing)',
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
      image: './packages/large/NH7_weekender.jpg'
    },
      {
        type: 'image',
        image: './packages/large/Krangshuri-Waterfall.jpg'
      },
      {
        type: 'image',
        image: './packages/large/Rover_sDen1.jpg'
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
      '5,500/- per person (11 person group)',
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
      image: './packages/large/Living-root-mabridge.jpg',
    },
      {
        type: 'image',
        image: './packages/large/meg3.jpg',
      },
      {
        type: 'image',
        image: './packages/large/kaziranga-elephant-safari-3.jpg',
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
        icon: './icons/elephant.png'
      },
      {
        type: 'Jeep Safari',
        icon: './icons/safari-jeep.png'
      },
      {
        type: 'River Rafting',
        icon: './icons/river-rafting.png'
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
      '23,500/- per person (4 person group) (twin sharing)',
    ]
  },
  assammanassafaripackage:{
    description: `The enchanting Manas National Park is waiting to blow your mind with its bewildering 
    beauty  and its diversity of flora and fauna. Experience it at its best with us with our stays in 
    cottage  tents and outdoor tents and our elephant safari and Jeep safari!  `,
    places:`Nameri, Kaziranga, shillong, dawki, Double-decker Root Bridge, Mawlynnong, Living Root Bridge, Cherrapunji, Chand Dubi`,
    gallery: [{
      type: 'image',
      image: './packages/large/Manas-national-park.jpg'
    },
      {
        type: 'image',
        image: './packages/large/smiling-tusker-elephant-camp.jpg'
      },
      {
        type: 'image',
        image: './packages/large/smiling-tusker-elephant-camp-2.jpg'
      },
      {
        type: 'video',
        video: 'https://youtu.be/Mx52iOmYbXs'
      }],
    activities: [
      {
        type: 'Jungle Trekking',
        icon: './icons/Trekking.png'
      },
      {
        type: 'Camping',
        icon: './icons/Camping.png'
      },
      {
        type: 'Elephant Safari',
        icon: './icons/elephant.png'
      },
      {
        type: 'River Rafting',
        icon: './icons/river-rafting.png'
      },
    ],
    costing: [
      '8500/- per person (4 person group) (twin sharing)',
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
      image: './packages/large/sikkim-honeymoon-1.jpg'
    },
      {
        type: 'image',
        image: './packages/large/sikkim-honeymoon-2.jpg'
      },
      {
        type: 'image',
        image: './packages/large/sik3.jpg'
      },
      {
        type: 'video',
        video: 'https://youtu.be/He30qWhDnig'
      }],
    activities: [
      {
        type: 'Signt Seeing',
        icon: './icons/SightSeeing.png'
      },
    ],
    costing: [
      '21,875/- per person (luxury standard) (2 person group) (twin sharing)','16,250/-  per person (Economic) (2 person group) (twin sharing)',
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
      image: './packages/large/ap1.jpg'
    },
      {
        type: 'image',
        image: './packages/large/tawang2.jpg'
      },
      {
        type: 'image',
        image: './packages/large/tawang3.jpg'
      },
      {
        type: 'video',
        video: 'https://www.youtube.com/embed/zZIMK04bvnU'
      }],
    activities: [
      {
        type: 'Adventure',
        icon: './icons/wingsuit.png'
      },
      {
        type: 'Signt Seeing',
        icon: './icons/SightSeeing.png'
      },
      {
        type: 'Road Trip',
        icon: './icons/camper-van.png'
      },
    ],
    costing: [
      '14,999/- per person (6 person group) (twin sharing)',
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
      image: './packages/large/nag1.jpg'
    },
      {
        type: 'image',
        image: './packages/large/na2.jpg'
      },
      {
        type: 'image',
        image: './packages/large/nag2.jpg'
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
        icon: './icons/wingsuit.png'
      },
      {
        type: 'Trekking',
        icon: './icons/Trekking.png'
      },
    ],
    costing: [
      '9,999/- per person (11 person group) (twin sharing)',
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
                                      return <div key={index} title={slide.type}>
                                              <img src={pathToPachageImages(slide.icon, true)} alt={slide.type}  />
                                            </div>
                                      })
                                }
                            
                        </div>


                    </div>
                    <div className="signiningForm center">
                        <Enquire/>
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
