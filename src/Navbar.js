import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css"

function Navbar() {
  return (
    <>
      <h3>Navbar</h3>
      <nav className="navbar">
        <ul className="link-container">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/experiences">Experiences</Link>
          </li>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
