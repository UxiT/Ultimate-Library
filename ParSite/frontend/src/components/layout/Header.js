import React, { Component } from "react";

import Switch from "./Main page/Switch";

export class Header extends Component {
  render() {
    return (
      <header>
        <div className="header-wrap">
          <Switch />
          <div className="auth">
            <ul className="auth-wrap">
              <li>
                <span>
                  <a href="login">Sign in</a>
                </span>
              </li>
              <li>
                <span>
                  <a href="register"> Sign up</a>
                </span>
              </li>
            </ul>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
