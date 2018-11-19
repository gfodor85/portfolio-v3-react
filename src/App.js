import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
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
        <Switch>
          <Route exact path="/" component={PanelAbout} />
          <Route path="/work" component={PanelWork} />
          <Route path="/skills" component={PanelSkills} />
          <Route path="/contact" component={PanelContact} />
        </Switch>
      </div>
    );
  }
}

export default App;
