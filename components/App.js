import React, { Component } from "react";
import ReactDOM from "react-dom";

class App extends React.Component {
    constructor() {
        super();
        this.state = {
          title: ""
        };
    } 

    render() {
        return (
            <div></div>
        );
    }
}

export default App;

const wrapper = document.getElementById("content");
wrapper ? ReactDOM.render(<App />, wrapper) : false;