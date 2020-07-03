import React from "react";
import "./style.css";

function Alert() {
  return (
    <nav className="navbar navbar-expand-lg">
      <div className="container">
        <a href="#" class="navbar-brand">
          <p className="alert-p">
            <u>
              <i className="fa fa-exclamation-circle" id="icon"></i><strong>Fall classes start August 1.</strong>
            </u>
          </p>
        </a>
        <button
          className="navbar-toggler"
          data-toggle="collapse"
          data-target="alertNav"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-end"
          id="alertNav"
        >
          <ul className="navbar-nav">
            <li className="nav-item">
              <a href="" className="nav-link">
                <strong>Student Login</strong>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <strong>Parent Login</strong>
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link">
                <strong>Class Calendar</strong>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Alert;
