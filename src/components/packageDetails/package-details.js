import React from 'react';


class PackageDetails extends React.Component {
    constructor(){
        super();
    }
    
    render() {
       const data = this.props.match.params.userId;
        return (<div className="banner bannerOther">
            <div className="wrapper mainContentPadding ">
                <section className="packageDetails">
                    <h2 className="center titleDetailsPage">package details {data}</h2>
                    <div className="detailSectionTitle">Package Ttitle</div>
                    <div className="detailSectionDescription">Bla Bla Package</div>

                    <div className="detailSectionTitle">Package Description</div>
                    <div className="detailSectionDescription">
                            Simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's 
                            standard dummy text ever since the 1500s, when an unknown printer took a 
                            galley of type and scrambled it to make a type specimen book. 
                            It has survived not only five centuries, but also the leap into 
                            electronic typesetting, remaining essentially unchanged. 
                            It was popularised in the 1960s with the release of Letraset 
                            sheets  simply dummy text of the printing and typesetting industry.

                            Lorem Ipsum has been the industry's standard dummy 
                            text ever since the 1500s,
                            when an unknown printer took a 
                            galley of type and scrambled it 
                            to make a type specimen book. 
                            It has survived not only five centuries, 
                            but also the leap into electronic typesetting, 
                            remaining essentially unchanged. 
                            It was popularised in the 1960s with the release of Letraset 
                            sheets  simply dummy text of the printing and typesetting industry. 
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
                            when an unknown printer took a galley of type and 
                            scrambled it to make a type specimen book.
                        </div>
                    <div className="detailSectionTitle">Package Gallery</div>

                    <div className="detailSectionDescription" id="descriptionGallery">
                        <img src={require('../../assets/bestpackage1.jpg')} />
                        <img src={require('../../assets/bestpackage1.jpg')} />
                        <img src={require('../../assets/bestpackage1.jpg')} />
                        <img src={require('../../assets/bestpackage1.jpg')} />
                        <img src={require('../../assets/bestpackage1.jpg')} />
                        <img src={require('../../assets/bestpackage1.jpg')} />
                    </div>

                    <div className="enquireForm">
                        <form action="">
                        <label>Name</label>
                        <input type="text"/>

                        <label>Email</label>
                        <input type="Email"/>

                        <label>Contact</label>
                        <input type="Email"/>
                        
                        <input type="Submit" value="Enquire"/>                       
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
