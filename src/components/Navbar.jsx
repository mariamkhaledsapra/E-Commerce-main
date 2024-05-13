import React from "react";
import { NavLink, Link, Button, Form } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { BsBag } from "react-icons/bs";
import { IoCloseCircleOutline } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light ">
      <div className="container-fluid">
        <NavLink className="navbar-brand">E-Store</NavLink>
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
            <NavLink className="nav-link">Features</NavLink>
            <NavLink className="nav-link" href="#">
              Pricing
            </NavLink>
            <NavLink className="nav-link disabled">Disabled</NavLink>
          </div>
        </div>

        <div className="d-flex">
          <div class="dropdown">
            <FaUser
              className="fs-3 mx-3 dropdown-toggle"
              type="button"
              id="dropdownMenu2"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            />

            <ul
              class="dropdown-menu dropdown-menu-end"
              aria-labelledby="dropdownMenu2"
            >
              <li class="dropdown-item " style={{ cursor: "pointer" }}>
                <FaUser className="fs-4" />
                <span className="mx-2">My Name</span>
              </li>
              <li class="dropdown-item" style={{ cursor: "pointer" }}>
                <FaUser className="fs-4" />
                <span className="mx-2">Manage My Account</span>
              </li>
              <li class="dropdown-item" style={{ cursor: "pointer" }}>
                <BsBag className="fs-4" />
                <span className="mx-2">My products</span>
              </li>
              <li class="dropdown-item" style={{ cursor: "pointer" }}>
                <IoCloseCircleOutline className="fs-4" />
                <span className="mx-2">My Number</span>
              </li>
              <li class="dropdown-item" style={{ cursor: "pointer" }}>
                <CiLogout className="fs-4" />
                <span className="mx-2">LogOut</span>
              </li>
            </ul>
          </div>
          {/*penalty of icon*/}
          <Form.Control
            type="search"
            placeholder="Search"
            className="mr-sm-20"
            aria-label="Search"
          />
          <Link
            to="/login"
            className="d-flex justify-content-center align-items-center flex-column "
          >
            <i class="fa-solid fa-user"></i> <p>login</p>
          </Link>
          <Link
            to="/cate"
            className="d-flex justify-content-center align-items-center flex-column "
          >
            <i class="fa-solid fa-message"></i> <p>Messages</p>
          </Link>
          <Link
            to="/favoret"
            className="d-flex justify-content-center align-items-center flex-column "
          >
            <i class="fa-solid fa-heart"></i>
            <p>Favoret</p>
          </Link>
          <Link
            to="/ShoppingCart"
            className="d-flex justify-content-center align-items-center flex-column "
          >
            <i class="fa-solid fa-cart-shopping"></i> <p>cart</p>
          </Link>
          <Button variant="outline-info" to="/Signup">
            Signup{" "}
          </Button>

          <button className="btn btn-warning  text-light fw-bold">
            Signin
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
