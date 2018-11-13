import React, { Component } from "react";
import NavAbout from "./nav_about";
import NavWork from "./nav_work";
import NavSkills from "./nav_skills";
import NavContact from "./nav_contact";

const Nav = () => {

    return (
      <div className="nav-panel">
        <div className="nav-item-container">
          <NavAbout />
          <NavWork />
          <NavSkills />
          <NavContact />
        </div>
      </div>
    );
}

export default Nav;
