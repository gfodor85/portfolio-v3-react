import React, { Component } from "react";
import WorkIcon from "../../images/svg/work_icon.svg";
import Slider from "react-animated-slider";

import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const PanelWork = () => {
  return (
    <div className="panel-container">
      <div className="panel-content">
        <div className="panel-icon">
          <img src={WorkIcon} className="panel-svg" alt="about-icon" />
        </div>
        <div className="work-wrap">
          <div
            className="nav"
            aria-label="Slider buttons"
            aria-controls="sequence"
          >
            <i
              className="fas fa-chevron-left fa-lg seq-prev"
              aria-label="Previous"
              aria-hidden="true"
            />
            <i className="fas fa-chevron-right fa-lg seq-next">
              <FontAwesomeIcon icon="chevron-right" color=""/>
            </i>

          </div>
          <div id="sequence" className="seq">
            <ul className="seq-canvas">
              <li className="slide">
                <img
                  className="desktop"
                  src="assets/img/azulite_desktop_mockup.png"
                />
                <img
                  className="mobile"
                  src="assets/img/azulite_mobile_mockup.png"
                />
                <p className="work-text-wrap">
                  <b>Azulite</b>
                  <br />A simple and minimal landing page template
                </p>
              </li>
              <li className="slide">
                <img
                  className="work-img desktop"
                  src="assets/img/barbero_desktop_mockup.png"
                />
                <img
                  className="work-img mobile"
                  src="assets/img/barbero_mobile_mockup.png"
                />
                <p className="work-text-wrap">
                  <b>Barbero</b>
                  <br />A simple and minimal landing page template
                </p>
              </li>
            </ul>
          </div>
        </div>
        <div className="title-container">
          <div className="title-text">Recent Works</div>
        </div>
      </div>
    </div>
  );
};

export default PanelWork;
