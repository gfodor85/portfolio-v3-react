import React, { Component } from "react";
import WorkIcon from "../../images/svg/work_icon.svg";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "react-animated-slider/build/horizontal.css";

import Slider from "react-animated-slider";
import WorkContent from "./works_data"

library.add(faAngleLeft, faAngleRight);

class PanelWork extends Component {

  constructor(props){
    super(props);
    this.state = {
      works: WorkContent.works,
      work: WorkContent.works[0]
    }
  }

  nextWork = () => {
    const newIndex = this.state.work.index+1;
    this.setState({
      work: WorkContent.works[newIndex]
    })
  }

  prevWork = () => {
    const newIndex = this.state.work.index-1;
    this.setState({
      work: WorkContent.works[newIndex]
    })
  }

  render() {
    const {work} = this.state;

    return (
      <div className="panel-container">
        <div className="panel-content">
          <div className="panel-icon">
            <img src={WorkIcon} className="panel-svg" alt="about-icon" />
          </div>
          <div className="work-wrap">

            <div className="work-nav-wrap">
              <a 
                onClick={() => this.nextWork()} 
                disabled={work.index === WorkContent.works.length-1}>
                <FontAwesomeIcon
                  className="work-nav-button"
                  icon="angle-left"
                  size="2x"
                />
              </a>

              <a 
                onClick={() => this.prevWork()} 
                disabled={work.index === 0}>
                <FontAwesomeIcon
                  className="work-nav-button"
                  icon="angle-right"
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
