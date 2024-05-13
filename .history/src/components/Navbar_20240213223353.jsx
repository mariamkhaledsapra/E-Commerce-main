import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light ">
      <div className="container-fluid">
        <a className="navbar-brand" href="#">
          E-Store
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="#">
              Home
            </a>
            <NavLink className="nav-link" >
              Features
            </NavLink>
            <NavLink className="nav-link" href="#">
              Pricing
            </NavLink>
            <a className="nav-link disabled">Disabled</a>
          </div>
        </div>

        <button className="btn btn-warning  text-light fw-bold">
          LogOut
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
