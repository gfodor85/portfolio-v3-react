import React, { Component } from "react";
import WorkIcon from "../../images/svg/work_icon.svg";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "react-animated-slider/build/horizontal.css";

import WorkSlider from "./work_slider";
import WorksData from "./works_data";

library.add(faAngleLeft, faAngleRight);

// const worksdata = [
//       {
//           index: "0",
//           title: "Azulite",
//           description: "A simple and minimal landing page template 1",
//           imageDesktop: require("../../images/azulite_desktop_mockup.png"),
//           imageMobile: "../../images/azulite_mobile_mockup.png"
//         },
//         {
//           index: "1",
//           title: "Barbero",
//           description: "A simple and minimal landing page template 2",
//           imageDesktop: "../../images/barbero_desktop_mockup.png",
//           imagePhone: "../../images/barbero_mobile_mockup.png"
//         }
//   ];


class PanelWork extends Component {

  constructor(props){
    super(props);
    this.state = {
      index: 0
    };
  }

  nextWork = () => {
    this.setState({ index: ( this.state.index + 1) % WorksData.length });
  };

  prevWork = () => {
    this.setState({ index: ( this.state.index === 0) % WorksData.length });
  };

  render() {
    const item = WorksData[this.state.index];

    return (
      <div className="panel-container">
        <div className="panel-content">
          <div className="panel-icon">
            <img src={WorkIcon} className="panel-svg" alt="about-icon" />
          </div>
          <div className="work-wrap">

            <h2>{item.description}</h2>

            <div className="work-nav-wrap">
              <a 
                onClick={() => this.nextWork()}>
                <FontAwesomeIcon
                  className="work-nav-button"
                  icon="angle-right"
                  size="2x"
                />
              </a>

              <a 
                onClick={() => this.prevWork()}>
                <FontAwesomeIcon
                  className="work-nav-button"
                  icon="angle-left"
                  size="2x"
                />
              </a>
            </div>

          </div>
          <div className="title-container">
            <div className="title-text">Recent Works</div>
          </div>
        </div>
      </div>
    );
  }
}


export default PanelWork;
