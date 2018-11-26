import React from 'react';
import Header from '../../components/header/Header';
import Enquire from '../../components/enquire/enquire';
import PackageCarousal from '../../components/packageCarousal';
import NextList from '../../components/nextList';



const pathToPachageImages = require.context('../../assets/', true);
const packages = {
  meghalayaweekenderspecial: {
    description: `The picturesque land of North East India has 
        amazing and limitless offerings for you. 
        Add to that the Happiest Music Festival, 
        you have an offer you can’t refuse! 
        We’ll amplify your experience of the Bacardi NH7 Weekender 
        by topping it up with our irresistible sightseeing  packages for Meghalaya. 
        Among many gems in the state are Shillong, Cherrapunji and  Jaintia Hills. 
        The bewildering richness of flora and fauna, amazing scenic beauty will leave you speechless.  `,
    places: 'Shillong,Jowai, NH7 Weekender, Dawki, Mawlyngnong, Bangladesh border, Living root bridge, Cherrapunji, Chand-Dubi Jungle Camp',
    gallery: [{
      type: 'video',
      video: 'https://www.youtube.com/embed/R-YuZ7uFgKE'
    },
    {
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
  meghalayaexploremeghalaya: {
    description: `From 'levitating' boats to 'living' bridges, Meghalaya is truly mystical. The balmy fresh
    air, the delicious cuisines and the affable people will leave you wanting for more.
    Whether you are a tourist and or a traveler, the Rock Capital of  Northeast India has
      something to offer for everyone.`,
    places: `Cherrapunjee, Dawki, Mawlyngnong, Shillong  `,
    gallery: [{
      type: 'video',
      video: 'https://www.youtube.com/embed/R-YuZ7uFgKE'
    },
    {
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
      '15,650/- per person (luxury Basic) (4 person group) (twin sharing)', '17,500/-  per person luxury(Premium) (4 person group) (twin sharing)',
    ]
  },
  meghalayanh7weekenderstudentpackage: {
    description: `The picturesque land of North East India has amazing and limitless offerings for you. 
        Add to  that the Happiest Music Festival, you have an offer you can’t refuse! 
        We’ll amplify your  experience of the Bacardi NH7 Weekender by topping it up with our irresistible trip to  Krangshuri Waterfall. 
        The bewildering richness of flora and fauna, amazing scenic beauty will  leave you speechless.`,
    places: `Jowai, NH7 Weekender, Khransuri waterfall`,
    gallery: [{
      type: 'video',
      video: 'https://www.youtube.com/embed/R-YuZ7uFgKE'
    },
    {
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
  assamroveradventurerpackage: {
    description: `What's life without a little adventure? Presenting to you a package which promises to
    awaken your inner adventurer and take you on an adrenaline filled tour. 
    From Safaris to River Rafting to Treks, the list goes on. Are you ready? Merry memories
    await you! `,
    places: `Nameri, Kaziranga, Shillong, Dawki, Mawlynnong, Cherapunji, Chand Dubi`,
    gallery: [{
      type: 'video',
      video: 'https://www.youtube.com/embed/Mx52iOmYbXs'
    },
    {
      type: 'image',
      image: './packages/large/Living-root-bridge.jpg',
    },
    {
      type: 'image',
      image: './packages/large/meg3.jpg',
    },
    {
      type: 'image',
      image: './packages/large/kaziranga-elephant-safari-3.jpg',
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
  assammanassafaripackage: {
    description: `"Wilderness without wildlife is just scenery". Endemic to endangered species of animals,
    witness a vast range of fauna while we accomodate you in cozy comfortable cottages.
    By the end of the tour you'll realize how truly awesome, Assam is!`,
    places: `Manas National Park`,
    gallery: [{
      type: 'video',
      video: 'https://www.youtube.com/embed/sc9HsSW31Zc'
    },
    {
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
  sikkimhoneymoonpackage: {
    description: `After fulfilling the nuptial responsibities, it's time to unwind. Go somewhere special with
    your loved one and make memories for a lifetime. Nature has been really kind to Sikkim
    making it a perfect place to take your perfect partner for life. Happiness Guaranteed!`,
    places: `Gangtok, Tsomgo Lake/Changu Lake`,
    gallery: [{
      type: 'video',
      video: 'https://www.youtube.com/embed/He30qWhDnig'
    },
    {
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
    }],
    activities: [
      {
        type: 'Signt Seeing',
        icon: './icons/SightSeeing.png'
      },
    ],
    costing: [
      '21,875/- per person (luxury standard) (2 person group) (twin sharing)', '16,250/-  per person (Economic) (2 person group) (twin sharing)',
    ]
  },
  arunachalpradeshexploretawang: {
    description: ` Some of the most beautiful sceneries you will ever witness in your lifetime! Frozen
    lakes, orchid gardens, ancient monasteries can just be a glimpse of your expectations
    of the tour. Arunachal Pradesh is in a league of its own, when it comes to natural
    landscapes. `,
    places: `Nameri, Bomdila, Tawang, Dirang`,
    gallery: [{
      type: 'video',
      video: 'https://www.youtube.com/embed/u5q6UDZ4_BM'
    },
    {
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
  nagalandtrekroutetovalleyofflower: {
    description: `"Don't just exist, live! "
    Tired of your routine life? Challenge yourself with one of the most famous and charming
    treks in the country. Home to the fabled Dzukou Lily, the enthralling trek will take you
    through an unforgettable experience! Perfect for breaking the monotony of life.`,
    places: `Kohima, Dzukou Valley`,
    gallery: [{
      type: 'video',
      video: 'https://www.youtube.com/embed/CTR3BTl_er4'
    },
    {
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
    const selectedPackageDetails = packages[`${group.toLowerCase().split(' ').join('') + pkgid.toLowerCase().split(' ').join('')}`];
    return (<div className="banner bannerOther">
      <Header />
      <div className="container wrapper mainContentPadding">
        <h2 className="center titleDetailsPage">{pkgid}</h2>
        <section className="packageDetails row">        
          <div id="packageOfferings">
            <div className="fecilitypics">
              <PackageCarousal timer="0" showArrows="true">
                {
                  selectedPackageDetails.gallery.map((slide, index) => {
                    return <p key={index}> {slide.type === 'image' && <img src={pathToPachageImages(slide.image, true)} alt={slide.image} />}
                      {slide.type === 'video' && <iframe width="400" height="350" src={slide.video} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen="allowfullscreen"></iframe>}</p>
                  })
                }
              </PackageCarousal>
            </div>
          </div>

          

          <div className="detailSectionTitle p-lr-2">Package Description</div>
          <div className="detailSectionDescription p-lr-2">
            {selectedPackageDetails.description}
          </div>
          <div className="fecilitydetails col-lg-12 col-md-12 col-sm-12 col-xs-12">
              <h2>Activities</h2>
              {
                selectedPackageDetails.activities.map((slide, index) => {
                  return <div key={index} title={slide.type}>
                    <img src={pathToPachageImages(slide.icon, true)} alt={slide.type} />
                  </div>
                })
              }
            </div>
          <div className="detailSectionTitle p-lr-2">Places To Explore</div>
          <div className="detailSectionDescription p-lr-2">
            {selectedPackageDetails.places}
          </div>
          <div className="detailSectionTitle p-lr-2">Package Costing</div>
          <div className="detailSectionDescription p-lr-2">
            <ul id="costing">
              {
                selectedPackageDetails.costing.map((slide, index) => {
                  return <li key={slide}>{slide}</li>
                })
              }
            </ul>
          </div>
         
            {/* <div className="col-lg-8 col-md-8 col-sm-8 col-xs-12">
              <NextList

                content=""
                max="7"
                defaultSelected="1" />
            </div> */}
          <div className="signiningForm center col-lg-12 col-md-12 col-xs-12 ">
            <Enquire group={group} pkgid={pkgid} />
          </div>

        </section>
        <footer>
          <div id="callMeBack"
            onClick={() => { window.scroll(0, window.document.body.offsetHeight) }}>
            Want us to call you
                    </div>
        </footer>
      </div>
    </div>)
  }
};

export default PackageDetails;
