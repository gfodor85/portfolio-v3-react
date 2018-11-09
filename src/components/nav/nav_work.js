import React, { Component } from 'react'
import Work_icon from '../../images/svg/work_icon.svg';


export default class Nav_work extends Component {
    render() {
        return (
            <div className="nav-item">
                <img src={Work_icon} className="nav-icon" alt="work-icon" />
            </div>
        )
    }
}

