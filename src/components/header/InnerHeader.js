import React, { Component } from "react";
import Navigation from "../navigation/Navigation";
import Logo from "./Logo";

class InnerHeader extends Component {
  render() {
    return (
      <div className="row">
        <Logo imagepath="assets/logo_small.png"/>
        <Navigation />
      </div>
    );
  }
}

export default InnerHeader;
