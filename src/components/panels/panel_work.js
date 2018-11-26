import React, { Component } from "react";
import WorkIcon from "../../images/svg/work_icon.svg";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "react-animated-slider/build/horizontal.css";

import Slider from "react-animated-slider";
import WorkContent from "./works_data"

library.add(faAngleLeft, faAngleRight);

const PanelWork = () => {

  return (
    <div className="panel-container">
      <div className="panel-content">
        <div className="panel-icon">
          <img src={WorkIcon} className="panel-svg" alt="about-icon" />
        </div>
        <div className="work-wrap">

          

          <Slider 
            className="slider-wrapper"
          >
            {WorkContent.map((item, index) => (
              <div
                key={index}
                className="slider-content"
                style={{
                  background: `url('${item.image}') no-repeat center center`
                }}
              >
                <div className="inner">
                  <h1>{item.title}</h1>
                  <p>{item.description}</p>
                  <button>{item.button}</button>
                </div>
                <section>
                  <img src={item.userProfile} alt={item.user} />
                  <span>
                    Posted by <strong>{item.user}</strong>
                  </span>
                </section>
              </div>
            ))}
          </Slider>
          <div className="work-nav-wrap">
            <a className="previousButton">
              <FontAwesomeIcon
                className="work-nav-button nextButton"
                icon="angle-left"
                size="2x"
              />
            </a>
            <FontAwesomeIcon
              className="work-nav-button"
              icon="angle-right"
              size="2x"
            />
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
