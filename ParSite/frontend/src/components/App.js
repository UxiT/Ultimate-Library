import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom";

import SideNav from "./layout/Main page/SideNav";
import Header from "./layout/Main page/Header";
import ContentFrame from "./layout/Main page/ContentFrame";

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="wrapper">
          <SideNav />
          <ContentFrame />
        </div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById("app"));
