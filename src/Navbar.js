import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <>
      <h3>Navbar</h3>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
