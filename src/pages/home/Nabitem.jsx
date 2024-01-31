import React from "react";

const NavItem = ({ title, link }) => {
  return (
    <li className="navbarItem">
      <a href={link}>{title}</a>
    </li>
  );
};

export default NavItem;
