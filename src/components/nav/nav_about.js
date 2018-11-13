import React, { Component } from "react";
import AboutIcon from "../../images/svg/about_icon.svg";
import {NavLink} from "react-router-dom";


export default class nav_about extends Component {
  render() {
    return (
      <NavLink to="/about">
        <div className="nav-item">
          <img src={AboutIcon} className="nav-icon" alt="about-icon" />
        </div>
      </NavLink>
    );
  }
}
