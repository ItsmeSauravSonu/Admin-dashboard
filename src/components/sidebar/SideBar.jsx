import "./sidebar.css";
import React from "react";
import { LineStyle, Timeline, TrendingUp } from "@material-ui/icons";

export default function SideBar() {
  return (
    <div className="sidebar">
      <div className="sidebarwrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              Home
            </li>
            <li className="sidebarListItem"><Timeline className="sidebarIcon"/>Analytics</li>
            <li className="sidebarListItem"><TrendingUp className="sidebarIcon"/>Sales</li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">QuickMenu</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              Home
            </li>
            <li className="sidebarListItem"><Timeline className="sidebarIcon"/>Analytics</li>
            <li className="sidebarListItem"><TrendingUp className="sidebarIcon"/>Sales</li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              Home
            </li>
            <li className="sidebarListItem"><Timeline className="sidebarIcon"/>Analytics</li>
            <li className="sidebarListItem"><TrendingUp className="sidebarIcon"/>Sales</li>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Staff</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem active">
              <LineStyle className="sidebarIcon" />
              Home
            </li>
            <li className="sidebarListItem"><Timeline className="sidebarIcon"/>Analytics</li>
            <li className="sidebarListItem"><TrendingUp className="sidebarIcon"/>Sales</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
