import React from "react";
import "./style.css";


const Quotes = (props) => {
  return (
    <section id="quotes">
      <div className="container text-center mt-4">
        <h3>WHAT OUR HAPPY GRADUATES ARE SAYING </h3>
        <div className="row">
          <div className="col-md-4 my-2">
            <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
            <blockquote className="blockquote">
              <p>
                I enrolled my son into the HTML course, and he's loving it.
              </p>
              <footer className="blockquote-footer">Pamela B.</footer>
            </blockquote>
          </div>
          <div className="col-md-4 my-2">
            <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
            <blockquote className="blockquote">
              <p>
                I really liked the teachers approach in the JavaScript class. She was engaging and the content was perfect for beginners.
              </p>
              <footer className="blockquote-footer">Stanley H.</footer>
            </blockquote>
          </div>
          <div className="col-md-4 my-2">
            <i className="fa fa-quote-left fa-2x text-primary mb-3"></i>
            <blockquote className="blockquote">
              <p>
                Excellent teachers. Classes are challenging, but fun. My son learned so much!
              </p>
              <footer className="blockquote-footer">Dwight S.</footer>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Quotes;
