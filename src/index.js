import React from "react";
import ReactDOM from "react-dom";
import App from './app';
import './components/header/header.css';
import { HashRouter } from 'react-router-dom'

class Index extends React.Component {
  render() {
      return (
      <HashRouter hashType="noslash">
        <App />
      </HashRouter>);
  }
};

ReactDOM.render(<Index />, document.getElementById("index"));