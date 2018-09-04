import React from "react";
import TopBar from "./TopHeader"
import InnerHeader from "./InnerHeader";
function Header() {
    return (
      <header id="nav-header" className="header" role="banner">
        <TopBar />
        <InnerHeader />
      </header>
    );
}

export default Header;
