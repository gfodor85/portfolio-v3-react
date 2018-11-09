import React, { Component } from 'react';
import Nav_about from './nav_about';
import Nav_work from './nav_work';
import Nav_skills from './nav_skills';
import Nav_contact from './nav_contact';
import work_icon from '../../images/svg/work_icon.svg';
import skills_icon from '../../images/svg/skills_icon.svg';
import contact_icon from '../../images/svg/contact_icon.svg';

class Nav extends Component {
    render () {
      return (
        <div className="nav-panel">
          <div className="nav-item-container">
            <Nav_about/>
            <Nav_work/>
            <Nav_skills/>
            <Nav_contact/>
          </div>
        </div>
      );
    }
  }

  export default Nav;