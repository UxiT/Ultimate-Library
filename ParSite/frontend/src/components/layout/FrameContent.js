import React, { Component } from "react";

export class FrameContent extends Component {
  render() {
    let classNext = "switch next";
    let classPrev = "switch prev";
    return (
      <div className="frame-inner">
        <div className={this.props.name}>
          <span className="md">Preview</span>
        </div>
        <div className={classPrev}>
          <svg
            width="12"
            height="22"
            viewBox="0 0 12 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M10.4 0L12 1.62963L2.8 11L12 20.3704L10.4 22L0 11L10.4 0Z"
              fill="#334433"
            />
            <path
              d="M11.8248 1.62963L10.4017 0.180151L0.172023 11L10.4017 21.8198L11.8248 20.3704L2.7108 11.0876L2.62482 11L2.7108 10.9124L11.8248 1.62963Z"
              stroke="white"
              strokeOpacity="0.6"
              strokeWidth="0.25"
            />
          </svg>
        </div>
        <div className={classNext}>
          <svg
            width="12"
            height="22"
            viewBox="0 0 12 22"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M1.6 0L0 1.62963L9.2 11L0 20.3704L1.6 22L12 11L1.6 0Z"
              fill="#334433"
            />
            <path
              d="M0.175177 1.62963L1.5983 0.180151L11.828 11L1.5983 21.8198L0.175177 20.3704L9.2892 11.0876L9.37518 11L9.2892 10.9124L0.175177 1.62963Z"
              stroke="white"
              strokeOpacity="0.6"
              strokeWidth="0.25"
            />
          </svg>
        </div>
      </div>
    );
  }
}

export default FrameContent;
