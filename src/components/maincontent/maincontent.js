import React from 'react';  
class MainContent extends React.Component {
    render() {
        return (<div className="banner">
           <div className="wrapper packageIntro">
               Packag Intro
            </div>
            <div>
                <form className="wrapper searchBarContainer" method="post">
                    <div>
                        <label>Start Date</label>
                        <input type="date" name="startDate"></input>
                    </div>
                    <div>
                        <label>Finish Date</label>
                        <input type="date" name="startDate" ></input>
                    </div>
                    <div>
                        <label>Place to Explore</label>
                        <input type="datetime" name="placetoexplore" placeholder="North East"></input>
                    </div>
                    <div>
                        <label>Type to Explore</label>
                        <input type="datetime" name="actiontoexplore" placeholder="Hiking" ></input>
                    </div>
                    <div>
                        <label>No of people</label>
                        <input type="number" name="noofpeople" placeholder="1"></input>
                    </div>
                    <div className="searchButton">
                        <input type="submit" name="search" ></input>
                    </div>
                </form>
            </div>
        </div>)
    }
};

export default MainContent;
