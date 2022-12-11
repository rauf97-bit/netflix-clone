import {
  ArrowDropDown,
  Notifications,
  SearchRounded,
} from "@material-ui/icons";
import React, { useState } from "react";
import "./navbar.scss";
import img from "../../assets/images/camera.jpg";
import img1 from "../../assets/images/logo.jpg";

export const Navbar = () => {
  const [isScroll, setIsScroll] = useState(false)
  window.onscroll = () =>{
    window.pageYOffset >= 45 ? setIsScroll(true) : setIsScroll(false)
    return () => (window.onscroll = null);
  }
  return (
    <div className={isScroll ? "container scroll" : "container"}>
      <div className="navbar">
      <div className="navbar" >
        <img src={img1} className="Logo" alt="home" />
        <ul className="nav-items">
          <li className="nav-item">Home</li>
          <li className="nav-item">Series</li>
          <li className="nav-item">Movies</li>
          <li className="nav-item">New and Popular</li>
          <li className="nav-item">My List</li>
        </ul>
      </div>
        <div className="nav-right">
          <SearchRounded />
          <span className="mx-2">KID</span>
          <Notifications />
          <div className="profile_img">
            <img src={img} className="mx-2 " alt="profile-img" />
            <ArrowDropDown  />
            <div className="options">
              <p className="option">Settings</p>
              <p className="option">Logout</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
