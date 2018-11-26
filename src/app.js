import React from "react";
import MainContent from './components/maincontent/maincontent';
import PackageLists from './components/packageLists/';
import PackageDetails from './components/packageDetails/package-details';
import 'bootstrap/dist/css/bootstrap.css';
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
                    <Route exact path='/packages'  component={PackageLists} />
                    <Route exact path='/package/:group' component={PackageLists} />
                    <Route exact path='/package/:group/:pkgid' component={PackageDetails} />
                </Switch>
            </div>);
    }
};

export default App;
