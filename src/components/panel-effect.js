import React, { Component } from 'react'
import NavAbout from './nav/nav';
import PanelAbout from './panels/panel_about'


export default class PanelEffect extends Component {
    state = {
        on: false,
    }

    toggle = () => {
        this.setState({
            on: !this.state.on
        });
    };

    render() {
        return (
            {this.state.on && <PanelAbout />}
            <NavAbout onClick={this.toggle}>
        );
    }
}
