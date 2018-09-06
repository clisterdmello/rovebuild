import React from "react";
import Header from './components/header/Header';
import MainContent from './components/maincontent/maincontent';
import SearchResults from './components/searchResults/search-results';
import PackageDetails from './components/packageDetails/package-details';
import Cart from './components/cart/cart';
import './components/header/header.css';
import { Route } from 'react-router-dom'

class App extends React.Component {
    render() {
        return (
            <div>
                <Header />
                <Route exact path='/' component={MainContent} />
                <Route path='/results' component={SearchResults} />
                <Route path='/detail' component={PackageDetails} />
                <Route path='/cart' component={Cart} />
            </div>);
    }
};

export default App;
