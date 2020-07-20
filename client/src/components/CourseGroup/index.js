import React, { useState } from "react";
import "./style.css";
import Checkout from "../../Checkout";

const CoursesSection = (props) => {
  const [products] = useState([
    { name: "HTML5", cost: 35.00, image: "./images/html.png"},
    { name: "CSS3", cost: 45.00, image: "./images/css.png"},
    { name: "JavaScript", cost: 55.00, image: "./images/java.png"},
  ]);

  return (
    <>
      <h1 className="display-3 text-center">Front End Courses</h1>
      <div className="container">
        <div className="row">
          {products.map((product, idx) => (
            <div className="col-md-4" key={idx}>
              <div className="card mb-3">
                <div className="product" key={idx}>
                  <img
                    src={product.image}
                    alt={product.image}
                    className="card-img-top"
                    id="html"
                  />
                  <div className="card-body">
                    <h5 className="card-title">{product.name}</h5>
                    {/* this is stripe button  */}
                    <p className="App-intro">
                      <Checkout
                        name={"Kids Coding Corner"}
                        description={product.name}
                        amount={product.cost}
                      />
                    </p>
{/* ===================================================== */}
                    <h6 className="card-subtitle text-muted mb-2">
                      ${product.cost}
                    </h6>
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
          ))}
        </div>
      </div>
    </>
  );
};

export default CoursesSection;
