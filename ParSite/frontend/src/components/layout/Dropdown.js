import React, { Component } from "react";

export class Dropdown extends Component {
  render() {
    return (
      <div className={"preview" + " dropdown"}>
        <div className="preview-wrapper">
          <span className="md"> Preview </span>
          <div className="triangle">
            <i className={"fas" + " fa-caret-down"}></i>
          </div>
        </div>
        <div id="has-drop">
          <div className="top"></div>
          <div className="right"></div>
          <div className="left"></div>
          <div className="bottom"></div>
          <ul>
            <li>Lorem</li>
            <li>Ipsum</li>
            <li>Dolor</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Dropdown;
