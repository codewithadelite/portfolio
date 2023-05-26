import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-black2 sticky-top p-3">
      <div className="container">
        <NavLink to="/" className="nav-link">
          <h3 className="font-800 text-white">ADELITE</h3>
        </NavLink>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#collapse"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon bg-white"></span>
        </button>
        <div className="collapse navbar-collapse" id="collapse">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item ">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? "nav-link text-gray1 font-600 nav-link-active"
                    : "nav-link text-gray1 font-600"
                }
              >
                About
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink
                to="/skills"
                className={({ isActive }) =>
                  isActive
                    ? "nav-link text-gray1 font-600 nav-link-active"
                    : "nav-link text-gray1 font-600"
                }
              >
                Skills
              </NavLink>
            </li>

            <li className="nav-item ">
              <NavLink
                to="/projects"
                className={({ isActive }) =>
                  isActive
                    ? "nav-link text-gray1 font-600 nav-link-active"
                    : "nav-link text-gray1 font-600"
                }
              >
                Projects
              </NavLink>
            </li>
            <li className="nav-item ">
              <NavLink
                to="/contact"
                className={({ isActive }) =>
                  isActive
                    ? "nav-link text-gray1 font-600 nav-link-active"
                    : "nav-link text-gray1 font-600"
                }
              >
                Contact
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
