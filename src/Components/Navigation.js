import React from "react";
import { Link } from "react-router-dom";
export default function Navigation() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark py-lg-4" id="mainNav">
        <div className="container">
          <a
            className="navbar-brand text-uppercase fw-bold d-lg-none"
            href="index.html"
          >
            Start Bootstrap
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto">
              <li className="nav-item px-lg-4">
                <Link className="nav-link text-uppercase" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item px-lg-4">
                <Link className="nav-link text-uppercase" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item px-lg-4">
                <Link className="nav-link text-uppercase" to="/product">
                  Products
                </Link>
              </li>
              <li className="nav-item px-lg-4">
              <Link className="nav-link text-uppercase" to="/contact">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
