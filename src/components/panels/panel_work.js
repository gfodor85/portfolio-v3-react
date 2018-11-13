import React, { Component } from "react";
import WorkIcon from "../../images/svg/work_icon.svg";

const PanelWork = () => {
  return (
    <div className="panel-container">
      <div className="panel-content">
        <div className="panel-icon">
          <img src={WorkIcon} className="panel-svg" alt="about-icon" />
        </div>
        <p className="about-text">Here are my works</p>
        <div className="title-container">
          <div className="title-text">Recent Works</div>
        </div>
      </div>
    </div>
  );
};

export default PanelWork;
