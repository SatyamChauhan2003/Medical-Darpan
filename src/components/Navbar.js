import React from "react";
import { BsApp } from "react-icons/bs";
import { BsPersonCircle } from "react-icons/bs";

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-danger">
        <a className="navbar-brand text-white" href="#">
          <BsApp /> Medical Darpan
        </a>
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="#navData"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse collapse " id="navData">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link text-white " href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Products
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Distributors
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Manufacturers
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                About us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Blog
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link login text-white" href="#">
                Login <BsPersonCircle />
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
