import React, { Component } from "react";
import SkillsIcon from "../../images/svg/skills_icon.svg";

const PanelSkills = () => {
  return (
    <div className="panel-container">
      <div className="panel-content">
        <div className="panel-icon">
          <img src={SkillsIcon} className="panel-svg" alt="skills-icon" />
        </div>
        <p className="about-text">Here are my skills</p>
        <div className="title-container">
          <div className="title-text">My Skills</div>
        </div>
      </div>
    </div>
  );
};

export default PanelSkills;
