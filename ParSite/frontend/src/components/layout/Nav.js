import React, { Component } from "react";
import FrameContent from "./FrameContent";
import Button from "./Button";
import Cards from "./Cards";
import Dropdown from "./Dropdown";

export class Nav extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="Frame">
          <div className="frame">
            <div className="frame-inner">
              <Button />
              <FrameContent name="preview button" triangle="no-triangle" />
            </div>
            <div className="TitleWrap">
              <span className="lg"> Buttons </span>
            </div>
          </div>
        </div>

        <div className="Frame">
          <div className="frame">
            <div className="frame-inner">
              <Cards />
              <FrameContent name="preview button" triangle="no-triangle" />
            </div>
            <div className="TitleWrap">
              <span className="lg"> Cards </span>
            </div>
          </div>
        </div>

        <div className="Frame">
          <div className="frame">
            <div className="frame-inner">
              <Dropdown />
              <FrameContent name="preview button" triangle="no-triangle" />
            </div>
            <div className="TitleWrap">
              <span className="lg"> Dropdown </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;
