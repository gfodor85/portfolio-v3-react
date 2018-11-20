import React from "react";
import { Route, Switch } from "react-router-dom";
import { CSSTransition, TransitionGroup } from "react-transition-group";
import { AnimatedRoute } from 'react-router-transition';


import Background from "./images/background.jpg";

import Nav from "./components/nav/nav";
import PanelAbout from "./components/panels/panel_about";
import PanelWork from "./components/panels/panel_work";
import PanelSkills from "./components/panels/panel_skills";
import PanelContact from "./components/panels/panel_contact";

import "./App.sass";

const styles = {
  appbg: {
    backgroundImage: "url(" + Background + ")",
    height: "100vh",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    margin: "0px",
    padding: "0px"
  }
};

const App = () => {
  return (
    <div className="app" style={styles.appbg}>
      
      <Nav />
        
      <Switch>
        <Route exact path="/" component={PanelAbout} />
        <Route path="/work" component={PanelWork} />
        <Route path="/skills" component={PanelSkills} />
        <Route path="/contact" component={PanelContact} />
      </Switch>
    </div>
  );
};

export default App;
