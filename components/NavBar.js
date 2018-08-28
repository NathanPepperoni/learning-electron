import React, { Component } from "react";
import ReactDOM from "react-dom";
import AppBar from 'react-toolbox/lib/app_bar';

class NavBar extends React.Component{
    constructor() {
        super();
        this.state = {
            title: ""
        };   
    }

    render() {
        return (
            <div id="test"><AppBar /></div>
        );
    }

}
export default NavBar;

const wrapper = document.getElementById("navbar");
wrapper ? ReactDOM.render(<NavBar />, wrapper) : false;