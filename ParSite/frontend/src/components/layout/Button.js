import React, { Component } from "react";

export class Button extends Component {
  render() {
    let class_name = "preview button";
    return (
      <div className={class_name}>
        <span className="md">Preview</span>
      </div>
    );
  }
}

export default Button;
