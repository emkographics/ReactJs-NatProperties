import React from "react";
function TopBar() {
    return (
      <div id="top-bar" className="top-bar">
      <div className="container">
        <div className="row">
          <div className="col-xs-2 col-sm-2 col-md-2 pull-left hamburger">
            <button
              className="navbar-toggle collapsed glyphicon glyphicon-menu-hamburger hamburger-button"
              id="mobile-menu-button"
              type="button"
            >
              <span className="sr-only">Toggle navigation</span>
            </button>
          </div>
        </div>
      </div>
      </div>
    );
}

export default TopBar;
