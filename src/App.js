import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import { AnimatedSwitch } from 'react-router-transition';
import { CSSTransition, TransitionGroup } from "react-transition-group";

import Nav from "./components/nav/nav";
import PanelAbout from "./components/panels/panel_about";
import PanelWork from "./components/panels/panel_work";
import PanelSkills from "./components/panels/panel_skills";
import PanelContact from "./components/panels/panel_contact";

import "./App.sass";
// import Transition from 'react-transition-group/Transition';

class App extends Component {
  render() {
    var bg = require("./images/background.jpg"),
      appStyle = {
        backgroundImage: "url(" + bg + ")",
        height: "100vh"
      };

    return (
      <div className="app" style={appStyle}>
        <Nav />
          <AnimatedSwitch
          atEnter={{ opacity: 0 }}
          atLeave={{ opacity: 0 }}
          atActive={{ opacity: 1 }}
          className="switch-wrapper">

            <Route exact path="/" component={PanelAbout} />
            <Route path="/work" component={PanelWork} />
            <Route path="/skills" component={PanelSkills} />
            <Route path="/contact" component={PanelContact} />
          </AnimatedSwitch>
      </div>
    );
  }
}

export default App;
