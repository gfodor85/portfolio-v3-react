import React, { Component } from "react";
import Work_icon from "../../images/svg/work_icon.svg";
import { NavLink } from "react-router-dom";

export default class Nav_work extends Component {
  render() {
    return (
      <NavLink to="/work">
        <div className="nav-item">
          <img src={Work_icon} className="nav-icon" alt="work-icon" />
        </div>
      </NavLink>
    );
  }
}
