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
        console.log("did it?");
        return (
            <div>test</div>
        );
    }
}

export default App;

const wrapper = document.getElementById("content");
wrapper ? ReactDOM.render(<App />, wrapper) : false;