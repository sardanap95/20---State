import React from "react";
import { Link, useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  return (
    <header className="header_area">
      <div className="main-menu">
        <nav className="navbar navbar-expand-lg navbar-light">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <div className="mr-auto"></div>
            <ul className="navbar-nav">
              <li className="nav-item">
                <Link to="/" className={location.pathname === "/" ? "nav-link active" : "nav-link"}>
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/about"
                  className={location.pathname === "/about" ? "nav-link active" : "nav-link"}
                >
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/skills"
                  className={location.pathname === "/skills" ? "nav-link active" : "nav-link"}
                >
                  Skills
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/projects"
                  className={location.pathname === "/projects" ? "nav-link active" : "nav-link"}
                >
                  Projects
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/testimonies"
                  className={location.pathname === "/testimonies" ? "nav-link active" : "nav-link"}
                >
                  Testimonies
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/contact"
                  className={location.pathname === "/contact" ? "nav-link active" : "nav-link"}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}
export default Navbar;
