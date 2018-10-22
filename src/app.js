import React from "react";
import MainContent from './components/maincontent/maincontent';
import PackageLists from './components/packageLists/';
import PackageDetails from './components/packageDetails/package-details';
import './components/header/header.css';
import { Route, Switch } from 'react-router-dom'

class App extends React.Component {
    render() {
        return (
            <div>
                <Switch>
                    <Route exact path='/' component={MainContent} />
                    <Route exact path='/help' component={MainContent} />
                    <Route exact path='/callus' component={MainContent} />
                    <Route path='/packages' exact component={PackageLists} />
                    <Route path='/package/:group' component={PackageLists} />
                    <Route path='/package/:group/:pkgid' component={PackageDetails} />
                </Switch>
            </div>);
    }
};

export default App;
