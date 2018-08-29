import React, { Component } from "react";
import ReactDOM from "react-dom";
import { TitleBar } from 'react-desktop/windows';

const remote = require('electron').remote;
let window = remote.getCurrentWindow();

const addon = require('../build/Release/addon.node');

class NavBar extends React.Component {
    static defaultProps = {
        color: '#1D2731',
        theme: 'dark'
    };

    constructor(props) {
        super(props);
        this.state = { isMaximized: false };
    }

    close = () => window.close();

    minimize = () => window.minimize();

    toggleMaximize = () => {
        this.state.isMaximized ? window.unmaximize() : window.maximize();
        this.setState({ isMaximized: !this.state.isMaximized })
    };

    render() {
        let titleText = addon.hello();
        return (
            <TitleBar
                title={titleText}
                controls
                isMaximized={this.state.isMaximized}
                theme={this.props.theme}
                background={this.props.color}
                onCloseClick={this.close}
                onMinimizeClick={this.minimize}
                onMaximizeClick={this.toggleMaximize}
                onRestoreDownClick={this.toggleMaximize}
            />
        );
    }
}

export default NavBar;

const wrapper = document.getElementById("navbar");
wrapper? ReactDOM.render(<NavBar />, wrapper) : false;