import React from "react";
import { Menu } from "antd";
import { Link } from 'react-router-dom';

const NavLinks = ({ mode }) => {
  return (
    <div className="nav-links">
      <Link to="/about" className="nav-link">About Us</Link>
      <Link to="/about" className="nav-link">About Us</Link>
      <Link to="/about" className="nav-link">About Us</Link>
      <Link to="/about" className="nav-link">About Us</Link>
      <Link to="/about" className="nav-link">About Us</Link>
      <Link to="/about" className="nav-link">About Us</Link>
    </div>
  );
};

export default NavLinks;
