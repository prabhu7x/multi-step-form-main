import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Personal Info</Link>
        </li>
        <li>
          <Link to="/plan">Select Plan</Link>
        </li>
        <li>
          <Link to="/add_ons">Add-ons</Link>
        </li>
      </ul>
    </nav>
  );
}

function Layout2({ children }) {
  return (
    <div>
      <Navbar />
      {children}
    </div>
  );
}

export default Layout2;
