import React from "react";
import ReactDOM from "react-dom";
import Header from './components/header/Header';
import './components/header/header.css';
const Index = () => {
  return (<div>
    <Header/>
    <MainContent/>
  </div>);
};

ReactDOM.render(<Index />, document.getElementById("index"));