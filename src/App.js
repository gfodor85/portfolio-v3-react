import React, { Component } from 'react';
import Nav from './components/nav';
import About from './components/about';
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
        <About/>
      </div>
    );
  }
}

export default App;
