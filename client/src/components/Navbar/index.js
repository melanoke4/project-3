import React from "react";
import "./style.css";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <a href="/" className="navbar-brand">
          <img src="./images/logo.PNG" className="logo"></img>
        </a>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Home <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="">
                Enroll
              </a>
            </li>
            <li className="nav-item dropdown">
              <a
                href=""
                className="nav-link dropdown-toggle"
                data-toggle="dropdown"
              >
                Courses
              </a>
              <div className="dropdown-menu">
                <a href="" className="dropdown-item">
                  HTML5
                </a>
                <a href="" className="dropdown-item">
                  CSS3
                </a>
                <a href="" className="dropdown-item">
                  JavaScript
                </a>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
