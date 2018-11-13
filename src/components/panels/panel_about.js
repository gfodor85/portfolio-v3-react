import React, { Component } from "react";
import AboutIcon from "../../images/svg/about_icon.svg";


const PanelAbout = () => {

  return (
      <div className="panel-container">
        <div className="panel-content">
          <div className="panel-icon">
            <img src={AboutIcon} className="panel-svg" alt="about-icon" />
          </div>
          <p className="about-text">
            Hello,
            <br />
            I’m an enthusiastic front-end developer and designer with many years
            of experience in building and designing clean and fast websites. I
            am always opened to new ideas and new ways which help me to develop
            my skills and try to become better and better. In my adventure of
            development I always learn new methods and technologies which result
            in cool websites. I have experience in creating a wide range of web
            projects such as landing pages, eCommerce or WordPress sites that
            will work and look great across all devices.
          </p>
          <div className="title-container">
            <div className="title-text">About Me</div>
          </div>
        </div>
      </div>
    );
  }

export default PanelAbout;