import React, { Component } from "react";
import WorkIcon from "../../images/svg/work_icon.svg";
import { library } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope, faKey } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


// import Slider from "react-animated-slider";

library.add(faEnvelope, faKey);


const PanelWork = () => {
  return (
    <div className="panel-container">
      <div className="panel-content">
        <div className="panel-icon">
          <img src={WorkIcon} className="panel-svg" alt="about-icon" />
        </div>
        <div className="work-wrap">
          <div class="nav" aria-label="Slider buttons" aria-controls="sequence">
          
              <i class="fas fa-chevron-left fa-lg seq-prev" aria-label="Previous" aria-hidden="true"></i>
              <i class="fas fa-chevron-right fa-lg seq-next" aria-label="Next" aria-hidden="true"></i>
          </div>
          <FontAwesomeIcon icon="envelope" />
        <div className="title-container">
          <div className="title-text">Recent Works</div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default PanelWork;
