import React from 'react'
import { NavLink } from "react-router-dom";
import MenuItems from './MenuItems'
export default function Sidebar() {
    return (
        <aside className="aside-sidebar hidden-xs hidden-sm col-md-3 col-lg-3">
            <SidebarMenu title="Menu" menu={MenuItems} />
        </aside >
    )
}

function SidebarMenu(props) {
    const menu = props.menu;
    const title = props.title;
    const listItems = menu.map((menu) =>
        <li key={menu.namebottom} className="page_item">
            <NavLink exact to={menu.href} activeClassName="activePage">
                <span className="highlight">{menu.namebottom}</span>
            </NavLink>
        </li>
    );
    return (
        <div className="sticky-wrapper affix-top">
            <div className="sidebar-title">{title}</div>
            <div className="sidebar-wrapper">
                <ul>{listItems}</ul>
            </div>
        </div>
    )
};