import React, { Component } from "react";
import SkillsIcon from "../../images/svg/skills_icon.svg";

class PanelSkills extends Component {
  render() {
    return (
      <div className="panel-container">
        <div className="panel-content">
          <div className="panel-icon">
            <img src={SkillsIcon} className="panel-svg" alt="skills-icon" />
          </div>
          <p className="about-text">These are my skills</p>
          <div className="title-container">
            <div className="title-text">My Skills</div>
          </div>
        </div>
      </div>
    );
  }
}
  


export default PanelSkills;
