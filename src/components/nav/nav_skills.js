import React, { Component } from 'react'
import Skills_icon from '../../images/svg/skills_icon.svg';


export default class Nav_skills extends Component {
    render() {
        return (
            <div className="nav-item">
                <img src={Skills_icon} className="nav-icon" alt="skills-icon" />
            </div>
        )
    }
}

