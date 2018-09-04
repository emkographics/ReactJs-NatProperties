import React from "react";
import MainMenu from "./MainMenu";
import MenuItems from "./MenuItems"
function Navigation() {
  return (
    <div className="col-xs-12 col-sm-9 col-md-9 col-lg-9 menu-wrapper">
      <div className="col-xs-12 hidden-sm hidden-md hidden-lg mobile-header-wrapper">
        <div className="col-xs-10 hidden-sm hidden-md hidden-lg pull-left mobile-natproperties-logo">
          <img
            alt="natproperties Realty"
            src="assets/logo_v1.png"
          />
        </div>
        <div
          className="col-xs-2 hidden-sm hidden-md hidden-lg mobile-exit-icon"
          id="mobile-menu-exit"
        >
          <div
            aria-hidden="true"
            className="glyphicon glyphicon-remove pull-right"
          />
        </div>
      </div>
      <nav className="navbar navbar-default">

        <MainMenu menu={MenuItems} />

      </nav>
    </div>
  );
}

export default Navigation;
