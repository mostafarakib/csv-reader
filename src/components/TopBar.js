import React from "react";
import { NavLink } from "react-router-dom";

const TopBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-5">
      <NavLink to={"/"} className={"navbar-brand"}>
        Oil and Gas Company
      </NavLink>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarTogglerDemo02"
        aria-controls="navbarTogglerDemo02"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <NavLink className="nav-link" to={"/"}>
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to={"/result"}>
              Result
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default TopBar;
