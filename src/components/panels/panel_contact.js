import React, { Component } from "react";
import ContactIcon from "../../images/svg/contact_icon.svg";

const PanelContact = () => {
  return (
    <div className="panel-container">
      <div className="panel-content">
        <div className="panel-icon">
          <img src={ContactIcon} className="panel-svg" alt="contact-icon" />
        </div>
        <p className="about-text">Here are my contact</p>
        <div className="title-container">
          <div className="title-text">Contact</div>
        </div>
      </div>
    </div>
  );
};

export default PanelContact;
