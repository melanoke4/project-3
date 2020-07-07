import React from "react";
import "./style.css";
// import { } from "reactstrap";

const CoursesSection = (props) => {
  return (
    <div>
      <h1 class="display-3 text-center">Front End Courses</h1>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="card mb-3">
              <img src="./images/html.png" alt="" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">HTML5</h5>
                <span className="learn">Select</span>
                <h6 className="card-subtitle text-muted mb-2">$59.99</h6>
                <ul className="card-text">
                  <li>Learn Web Development Essentials</li>
                  <li>Build Websites from Scratch</li>
                  <li>Lifetime Access</li>
                  <li>Downloadable Resources</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-3">
              <img src="./images/css.png" alt="" className="card-img-top" />
              <div className="card-body">
                <h5 className="card-title">CSS3</h5>
                    <span className="learn">Select</span>
                <h6 className="card-subtitle text-muted mb-2">$59.99</h6>
                <ul className="card-text">
                  <li>Learn Web Development Essentials</li>
                  <li>Build Websites from Scratch</li>
                  <li>Lifetime Access</li>
                  <li>Downloadable Resources</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-4">
            <div className="card mb-3">
              <img src="./images/1java.png" alt="" className="card-img-top" />
              <div className="card-body">
                  <a href="" className="" />
                <h5 className="card-title">JavaScript</h5>
                <span className="learn">Select</span>
                <h6 className="card-subtitle text-muted mb-2">$59.99</h6>
                <ul className="card-text">
                  <li>Learn Web Development Essentials</li>
                  <li>Build Websites from Scratch</li>
                  <li>Lifetime Access</li>
                  <li>Downloadable Resources</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoursesSection;
