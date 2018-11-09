import React, { Component } from 'react';
import Nav from './components/nav/nav';
import Panels from './components/panels/panels';
import PanelEffect from './components/panel-effect';
import './App.sass';

// import bg from './images/background.jpg'
// import// import {CSSTransition} from "react-transition-group";


class App extends Component {
  render() {
    var 
      bg = require('./images/background.jpg'),
      appStyle = {
        backgroundImage: "url("+ bg +")",
        height: '100vh'
      };
    
    return (
      <div className="app" style ={appStyle}>
        <Nav/>
        <Panels/>
      </div>
    );
  }
}

export default App;
