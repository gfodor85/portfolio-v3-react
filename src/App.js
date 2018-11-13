import React, { Component } from 'react';
import Nav from './components/nav/nav';
import PanelAbout from './components/panels/panel_about';
import PanelWork from './components/panels/panel_work';
import './App.sass';
// import Transition from 'react-transition-group/Transition';
import { BrowserRouter, Route } from 'react-router-dom';


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
        <BrowserRouter>
          <switch>
            <Route path="/" component={Nav} />
            <Route path="/about" component={PanelAbout} />
            <Route path="/work" component={PanelWork} />
          </switch>
          
        </BrowserRouter>

        {/* <Nav/>
        <PanelAbout/> */}
      </div>
    );
  }
}

export default App;
