import React, { Component } from 'react';
import about_icon from './images/svg/about_icon.svg';
import work_icon from './images/svg/work_icon.svg';
import skills_icon from './images/svg/skills_icon.svg';
import contact_icon from './images/svg/contact_icon.svg';
import Nav from './components/nav';
import './index.sass';
// import {CSSTransition} from "react-transition-group";


class App extends Component {
  render() {
    return (
      <div className="app">
        <Nav/> 
      </div>
    );
  }
}

export default App;
