import React from "react";
import "./style.css";

function Alert() {
  return (
    <nav className="navbar navbar-expand-lg" id="alert">
      <div className="container">
        <a href="#" class="navbar-brand">
          <p className="alert-p">
            <u>
              <i className="fa fa-exclamation-circle" id="icon"></i><strong>New Course Coming Soon: Bootstrap</strong>
            </u>
          </p>
        </a>

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
