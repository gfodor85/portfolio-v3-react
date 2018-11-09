import React, { Component } from 'react'
import Contact_icon from '../../images/svg/contact_icon.svg';


export default class Nav_contact extends Component {
    render() {
        return (
            <div className="nav-item">
                <img src={Contact_icon} className="nav-icon" alt="contact-icon" />
            </div>
        )
    }
}

