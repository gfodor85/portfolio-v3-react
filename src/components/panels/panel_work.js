import React, { Component } from "react";
import WorkIcon from "../../images/svg/work_icon.svg";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import WorksData from "./works_data";

library.add(faAngleLeft, faAngleRight);


class PanelWork extends Component {

  constructor(props){
    super(props);

    this.state = {
      currentIndex: 0
    };

    this.nextSlide = this.nextSlide.bind(this);
		this.previousSlide = this.previousSlide.bind(this);

  }

  previousSlide () {
		const lastIndex = WorksData.length - 1;
		const { currentIndex } = this.state;
		const shouldResetIndex = currentIndex === 0;
		const index =  shouldResetIndex ? lastIndex : currentIndex - 1;
		
		this.setState({
			currentIndex: index
		});
	}
	
	nextSlide () {
		const lastIndex = WorksData.length - 1;
		const { currentIndex } = this.state;
		const shouldResetIndex = currentIndex === lastIndex;
		const index =  shouldResetIndex ? 0 : currentIndex + 1;

		this.setState({
			currentIndex: index
		});
	}
  
  

  render() {
    const item = WorksData[this.state.currentIndex];
    
    return (
      <div className="panel-container">
        <div className="panel-content">
          <div className="panel-icon">
            <img src={WorkIcon} className="panel-svg" alt="about-icon" />
          </div>
          
          <div className="work-wrap">
            <TransitionGroup  className="slide-wrap">
            
              <CSSTransition
                transitionAppear={true}
                timeout={500}
                // classNames="workFade"
                classNames={{
                  appear: 'workFade-appear',
                  appearActive: 'workFade-appear-active',
                  enter: 'workFade-enter',
                  enterActive: 'workFade-enter-active',
                  exit: 'workFade-exit',
                  exitActive: 'workFade-exit-active',
                  enterDone: 'workFade-exit-done'}}
                >
                <p className="work-text-wrap"><b>{item.title}</b><br/>{item.description}</p>
              </CSSTransition>

              <CSSTransition timeout={500} classNames="work-fade" >
                <img className="work-img desktop" src={item.imageDesktop} alt="desktop" />
              </CSSTransition>

              <CSSTransition timeout={500} classNames="work-fade" in={true} >
                <img className="work-img mobile" src={item.imageMobile} alt="mobile"/>
              </CSSTransition>

                
            </TransitionGroup >     
            
            <div className="work-nav-wrap">
              <button 
                onClick={this.nextSlide}
                disabled={WorksData.index === 0}  
              >
                <FontAwesomeIcon
                  className="work-nav-button"
                  icon="angle-right"
                  size="2x"
                />
              </button>

              <button 
                onClick={this.previousSlide}>
                <FontAwesomeIcon
                  className="work-nav-button"
                  icon="angle-left"
                  size="2x"
                />
              </button>
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
