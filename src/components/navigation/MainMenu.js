import React from "react";
import { NavLink } from "react-router-dom";

export default function MainMenu(props) {
    let sec = 0;
    let menu = props.menu;
    let styler = (lag) => {return {animationDelay: (sec += lag) + 's' }}

    const listItems = menu.map((menu) =>
        <li key={menu.namebottom} style={styler(0.05)} className='menu-item animated bounceInDown'>
            <NavLink exact to={menu.href} activeClassName="activePage">
                {menu.nametop}
                <span className="highlight">{menu.namebottom}</span>
            </NavLink>
        </li>
    );
    return (
        <div className="pull-right" id="main-navigation">
            <ul className="nav navbar-nav" id="menu-main-navigation">
                {listItems}
            </ul>
        </div>
    )
};