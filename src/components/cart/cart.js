import React from 'react';


class Cart extends React.Component {
    render() {
        return (<div className="banner bannerOther">
            <div className="wrapper mainContentPadding ">
                <section className="cartdetails">

                    <h2 className="center titleCartPage">Order Details</h2>
                    <div className="orders">
                        <div className="orderList">
                            <div className="cartOrderImage">
                                <img src={require('../../assets/bestpackage1.jpg')} />
                            </div>
                            <div className="cartOrderDetails">
                                <span>Package: Title</span>
                                <span>Duration: 2 Days and 3 nights</span>
                                <span>People: 3</span>
                                <span>Selected Dates: 2/3/2015 to 3/3/2045</span>
                            </div>
                            <div className="packageCost center">
                                Rs 20,000
                            </div>

                        </div>
                        <div id="totalCost">Total Cost Of the Trip: 2000</div>

                        <div id="userDetails">
                            <form name="signInAction">
                                <div className="Choice">
                                    <input type="button" value="Sign In" />
                                    <input type="button" value="Coninue As guest" />
                                </div>
                                
                                <div className="signDetails">
                                    <input type="email" name="contactEmail"/>
                                   <br/> <input type="email" name="contactNumber"/>
                                   <br/> <input type="submit" value="Send request" />
                                </div>

                            </form>


                        </div>
                    </div>

                </section>
                <footer>

                </footer>
            </div>
        </div>)
    }
};

export default Cart;
