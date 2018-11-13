import React, { Component } from "react";
import Contact_icon from "../../images/svg/contact_icon.svg";
import {NavLink} from "react-router-dom";

export default class Nav_contact extends Component {
  render() {
    return (
      <NavLink to="/contact">
        <div className="nav-item">
          <img src={Contact_icon} className="nav-icon" alt="contact-icon" />
        </div>
      </NavLink>
    );
  }
}
