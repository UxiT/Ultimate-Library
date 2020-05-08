import React, { Component } from "react";
import FrameContent from "./FrameContent";
import Button from "./Button";
import Cards from "./Cards";
import Dropdown from "./Dropdown";
import Letters from "./letters";

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
              <span className="lg">
                <a href="/buttons">Buttons </a>
              </span>
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
              <span className="lg">
                <a href="/cards">Cards </a>
              </span>
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

        <div className="Frame">
          <div className="frame">
            <div className="frame-inner">
              <Letters />
              <FrameContent name="preview button" triangle="no-triangle" />
            </div>
            <div className="TitleWrap">
              <span className="lg"> Text </span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;
