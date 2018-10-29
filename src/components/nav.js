import React, { Component } from 'react';
import about_icon from '../images/svg/about_icon.svg';
import work_icon from '../images/svg/work_icon.svg';
import skills_icon from '../images/svg/skills_icon.svg';
import contact_icon from '../images/svg/contact_icon.svg';

class Nav extends Component {
    render () {
      return (
        <div className="nav-panel">
          <div className="nav-item-container">
            <div className="nav-item">
              <img src={about_icon} className="nav-icon" alt="about-icon" />
            </div>
            <div className="nav-item">
              <img src={work_icon} className="nav-icon" alt="work-icon" />
            </div>
            <div className="nav-item">
              <img src={skills_icon} className="nav-icon" alt="skills-icon" />
            </div>
            <div className="nav-item">
              <img src={contact_icon} className="nav-icon" alt="contact-icon" />
            </div>
          </div>
        </div>
      );
    }
  }

  export default Nav;