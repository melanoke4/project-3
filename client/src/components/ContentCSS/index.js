import React from 'react';
import "./style.css";

const ContentCSS = () => {
    return(
        <div className="container-fluid">
      <h1 className="display-1 text-center">CSS<span><img src="./images/css.png" alt="" id="header-css" /></span></h1>
      <div className="row">
        <div className="col-lg-9">
          <div className="alert alert-info text-center" role="alert">
            CSS(Cascading Style Sheets): <br />
            CSS describes how HTML elements are to be displayed on screen.It can control the layout of multiple web pages all at once.
          </div>
          <div className="row">

            {/* Simple Ex begins */}
            <div className="col-xl-6 col-sm-6 mt-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title"> Coolest Website Ever!</h5>
                  <li className="card-text">
                    <code> h1 </code> Large Header // You can set the font-size, text color, text alignment and background color
                  </li>
                  <li className="card-text">
                    <code> h2 </code> Smaller Header
                  </li>
                  <li className="card-text">
                    <code> h3 </code> Even Smaller Header
                  </li>
                  <li className="card-text">
                    <code> p </code> Paragraph text - "Lorem" is a quick way to add text to your page.
                  </li>
                  <li className="card-text">
                    <code> img </code> Center a block element in the middle of its enclosing - We'll explain Block Display in more detail in later sections.
                  </li>
                  <li className="card-text">
                    <code> ul </code> unordered list // text-align: center ; 
                  </li>
                </div>
              </div>
            </div>
            {/* Simple Ex Ends */}

            {/* CSS Example */}
            <div className="col-xl-6 col-sm-6 mt-4">
              <div className="card">
                <img
                  className="card-img-top"
                  src="./images/css-example.PNG"
                  id="example-html"
                  alt=""
                />
              </div>
            </div>
            {/* css Example ends*/}

            {/* css code*/}
            <div className="col-xl-6 col-sm-6 mt-4">
              <div className="card">
                <img
                  className="card-img-top"
                  src="./images/css-code.PNG"
                  id="example-html"
                  alt=""
                />
              </div>
            </div>
            {/* css code */}

            {/* html code  */}
            <div className="col-xl-6 col-sm-6 mt-4">
              <div className="card">
                <img
                  className="card-img-top"
                  src="./images/css-html.PNG"
                  id="example-html"
                  alt=""
                />
              </div>
            </div>
            {/* html code ends */}

          </div>
        </div>

        {/* table section begins */}
        <div className="col-lg-3">
          <h5 className="text-center"> CSS Properties to Remember </h5>
          <table>
            
            <tr>
              <td>text-align</td>
              <td>Specifies the horizontal alignment of text</td>
            </tr>
            <tr>
              <td>padding</td>
              <td>Adds padding to all sides of a element</td>
            </tr>
            <tr>
              <td>height</td>
              <td>Sets height of an element</td>
            </tr>
            <tr>
              <td>font-size</td>
              <td>Specifies the font size of text</td>
            </tr>
            <tr>
              <td>color</td>
              <td>Sets the color of text</td>
            </tr>
            <tr>
              <td> # </td>
              <td>Selector: targets an id element</td>
            </tr>
            <tr>
              <td> p </td>
              <td>Targets all p tags </td>
            </tr>
            <tr>
              <td> . </td>
              <td> Selector: targets an class element </td>
            </tr>
            <tr>
              <td> background-color </td>
              <td>Specifies the background color of an element</td>
            </tr>
          </table>
        </div>
        {/* table section ends */}

      </div>
    </div>
    );
};

export default ContentCSS;