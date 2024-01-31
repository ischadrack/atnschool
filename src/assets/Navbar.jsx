import React from "react";
import "./Navbar.css";
import logo_light from "../../assets/logo_light.svg";
import logo_dark from "../../assets/logo_dark.png";
import search_icon_light from "../../assets/search_icon_light.png";
import search_icon_dark from "../../assets/search_icon_dark.png";
import toggle from "../../assets/toggle.png";

const Navbar = ({ theme, setTheme }) => {
  const toggle_mode = () => {
    theme == "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <div className="navbar">
      <img
        src={theme == "light" ? logo_light : logo_dark}
        alt=""
        className="logo"
      />

      <ul>
        <li>Home</li>
        <li>About us</li>
        <li>Services</li>
        <li>Blog</li>
        <li>Contact</li>
      </ul>

      <div className="search-box">
        <input type="text" placeholder="search" />
        <img src={search_icon_dark} alt="" className="search-icon" />
      </div>

      <img
        onClick={() => {
          toggle_mode();
        }}
        src={toggle}
        alt=""
        className="toggle-icon"
      />
    </div>
  );
};

export default Navbar;
