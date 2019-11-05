import React from "react";

// Stateless Functional Component example
const Navbar = ({ totalCounters }) => {
  console.log("Navbar - Rendered");
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="/">
        Total Number:{" "}
        <span className="badge badge-pill badgesecondary">{totalCounters}</span>
      </a>
    </nav>
  );
};

export default Navbar;
