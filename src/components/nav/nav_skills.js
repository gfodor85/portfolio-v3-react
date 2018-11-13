import React, { Component } from "react";
import Skills_icon from "../../images/svg/skills_icon.svg";
import {NavLink} from "react-router-dom";


export default class Nav_skills extends Component {
  render() {
    return (
      <NavLink to="/skills">
        <div className="nav-item">
          <img src={Skills_icon} className="nav-icon" alt="skills-icon" />
        </div>
      </NavLink>
    );
  }
}
