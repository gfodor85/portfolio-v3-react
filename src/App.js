import React, { Component } from 'react';
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
