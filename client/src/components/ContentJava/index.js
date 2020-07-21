import React from 'react';
import "./style.css";

const ContentJava = () => {
    return(
        <div className="container-fluid">
        <h1 className="display-1 text-center">Javascript<span><img src="./images/java.png" id="header-js" alt="" /></span></h1>
        <div className="row">
          <div className="col-lg-9">
            <div className="alert alert-info text-center" role="alert">
              JavaScript <br />
              JavaScript is the programming language of HTML and the Web. JS can change HTML content. Below are some examples of how JS can affect the document.
            </div>
            <div className="row">
  
              {/* Simple Ex begins */}
             
              <div className="col-xl-6 col-sm-6 mt-4">
                <div className="card">
                  <img
                    className="card-img-top"
                    src="./images/js-code1.PNG"
                    id="example-html"
                    alt=""
                  />
                </div>
              </div>

              {/* Simple Ex Ends */}
  
              {/* Simple Example Image */}
              <div className="col-xl-6 col-sm-6 mt-4">
                <div className="card">
                  <img
                    className="card-img-top"
                    src="./gif/pbj.gif"
                    id="example-html"
                    alt=""
                  />
                </div>
              </div>
              {/* Simple Example ends*/}
  
              {/* Intermediate Example Begins */}
              
              <div className="col-xl-6 col-sm-6 mt-4">
                <div className="card">
                  <img
                    className="card-img-top"
                    src="./images/js-code.PNG"
                    id="example-html"
                    alt=""
                  />
                </div>
              </div>
              {/* example card ends */}
  
              <div className="col-xl-6 col-sm-6 mt-4">
                <div className="card">
                  <img
                    className="card-img-top"
                    src="./gif/js.gif"
                    id="example-html"
                    alt=""
                  />
                </div>
              </div>

            </div>
          </div>
  
          {/* table section begins */}
          <div className="col-lg-3">
            <h5 className="text-center"> Javascript Methods to Remember </h5>
            <table>
              
              <tr>
                <td> clear() </td>
                <td> clears the console</td>
              </tr>
              <tr>
                <td> floor() </td>
                <td> Returns x, rounded downwards to the nearest int</td>
              </tr>
              <tr>
                <td> ceil() </td>
                <td> Returns x, rounded upwards to nearest int </td>
              </tr>
              <tr>
                <td> NaN </td>
                <td> Not a Number </td>
              </tr>
              <tr>
                <td> onClick </td>
                <td> The event occurs when the user clicks on an element </td>
              </tr>
              <tr>
                <td> if.. else .. else if </td>
                <td>A block of statements to be executed depending on a condition</td>
              </tr>
              <tr>
                <td> alert() </td>
                <td> Displays an alert box with a message and OK button </td>
              </tr>
              <tr>
                <td> var </td>
                <td> Declares a variable</td>
              </tr>
            </table>
          </div>
          {/* table section ends */}
  
        </div>
      </div>
    );
};

export default ContentJava;