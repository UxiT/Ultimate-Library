import React, { Component } from "react";

export class Button extends Component {
  render() {
    let class_name = "preview button";
    return (
      <button className={class_name}>
        <span className="md">Preview</span>
      </button>
    );
  }
}

export default Button;
