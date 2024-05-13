import React from "react";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light ">
      <div className="container-fluid">
        <Nav className="navbar-brand" href="#">
          E-Store
        </Nav>
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
            <NavLink className="nav-link active" aria-current="page" href="#">
              Home
            </NavLink>
            <NavLink className="nav-link" >
              Features
            </NavLink>
            <NavLink className="nav-link" href="#">
              Pricing
            </NavLink>
            <NavLink className="nav-link disabled">Disabled</NavLink>
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
