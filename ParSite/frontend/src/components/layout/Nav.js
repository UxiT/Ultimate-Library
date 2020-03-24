import React, { Component } from "react";
import FrameContent from "./FrameContent";

export class Nav extends Component {
  render() {
    let classNext = "switch next";
    let classPrev = "switch prev";
    return (
      <div className="wrapper">
        <div className="Frame">
          <div className="frame">
            <FrameContent name="preview button" />
            <div className="TitleWrap">
              <span className="lg"> Buttons </span>
            </div>
          </div>
        </div>

        <div className="Frame">
          <div className="frame">
            <FrameContent />
            <div className="TitleWrap">
              <span className="lg"> Cards </span>
            </div>
          </div>
        </div>

        <div className="Frame">
          <div className="frame">
            <FrameContent />
            <div className="TitleWrap">
              <span className="lg"> Sldiers </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;
