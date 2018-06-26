import React from "react";
import ReactDOM from "react-dom";
import Header from './components/Header';
const Index = () => {
  return (<div>
    <Header/>
    <div>Main Content</div>
  </div>);
};

ReactDOM.render(<Index />, document.getElementById("index"));