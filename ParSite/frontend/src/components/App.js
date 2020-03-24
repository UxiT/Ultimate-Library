import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";

import Nav from "./layout/Nav";

class App extends Component {
  render() {
    return <Nav />;
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
