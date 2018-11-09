import React, { Component } from 'react'
import About_icon from '../../images/svg/about_icon.svg';


export default class nav_about extends Component {
    render() {
        return (
            <div className="nav-item">
                <img src={About_icon} className="nav-icon" alt="about-icon" />
            </div>
        )
    }
}

