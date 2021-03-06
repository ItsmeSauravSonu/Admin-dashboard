import React from "react";
import "./topbar.css";
import { NotificationsNone, Language, Settings } from "@material-ui/icons";
export default function Topbar() {
  return (
    <div className="topbar">
      <div className="topbarWrapper">
        <div className="topLeft">
          <span className="logo">Saurav Sonu</span>
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <NotificationsNone />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Language />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <Settings />
          </div>
          <img
            className="topAvatar"
            src="https://images.pexels.com/photos/1619801/pexels-photo-1619801.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
