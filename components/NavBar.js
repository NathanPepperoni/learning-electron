import React, { Component } from "react";
import ReactDOM from "react-dom";
import {MDCTopAppBarFoundation} from '@material/top-app-bar';
import {MDCTopAppBarAdapter} from '@material/top-app-bar';

let tapAppBarAdapter
let topAppBar

class NavBar extends React.Component{
    constructor() {
        super();
        this.state = {
            title: ""
        };
        tapAppBarAdapter = new MDCTopAppBarAdapter;
        topAppBar = new MDCTopAppBarFoundation(tapAppBarAdapter);        
    }

    componentDidMount() {
        topAppBar.init();
    }

    componentWillUnmount() {
        topAppBar.destroy();
    }

    render() {
        console.log("it did the thing");
        return (<div>hallo?</div>);
    }

}
export default NavBar;

const wrapper = document.getElementById("navbar");
wrapper ? ReactDOM.render(<NavBar />, wrapper) : false;