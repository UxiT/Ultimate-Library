import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";

import Nav from "./layout/Nav";
import Switch from "./layout/Switch";

class Sheet extends Component {
  render() {
    return(
      <div className = 'void'>
        <Switch />     
        <Nav />
       </div>
    )
  }
}

ReactDOM.render(<Sheet />, document.getElementById("sheet"));
