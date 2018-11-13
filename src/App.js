import React, { Component } from 'react';
import Nav from './components/nav/nav';
import { BrowserRouter, Route } from 'react-router-dom';

import PanelAbout from './components/panels/panel_about';
import PanelWork from './components/panels/panel_work';
import PanelSkills from './components/panels/panel_skills';
import PanelContact from './components/panels/panel_contact';

import './App.sass';
// import Transition from 'react-transition-group/Transition';



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
            <Route path="/skills" component={PanelSkills} />
            <Route path="/contact" component={PanelContact} />
          </switch>
          
        </BrowserRouter>

        {/* <Nav/>
        <PanelAbout/> */}
      </div>
    );
  }
}

export default App;
