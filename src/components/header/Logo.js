import React from 'react';
import { NavLink } from "react-router-dom";
function Logo(props) {
    const image = props.imagepath;
    return (
        <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3 logo-wrapper">
            <div id="logo" className="animated flipInX">
                <NavLink to="/" >
                    <img alt="nat-logo" src={image} title="nat-logo" />
                </NavLink>
            </div>
        </div>
    )
}

export default Logo;