import React from "react";
import "./style.css";
import { Link } from "react-router-dom";

const ContentHTML = () => {
  return (
    <>
    <div className="container-fluid">
      <h1 className="display-1 text-center">HTML<span><img src="./images/html.png" id="header-html" alt=""/> </span></h1>
      <div className="row">
        <div className="col-lg-9">
          <div className="alert alert-info text-center" role="alert">
            HTML(Hyper Text Markup Language): <br />
            The standard markup language consisting of a series of elements that
            tell the browser how to display the content to the page.
          </div>
          <div className="row">

            {/* Simple Ex begins */}
            <div className="col-xl-6 col-sm-6 mt-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title"> Simple HTML Document </h5>
                  <li className="card-text">
                    <code> !DOCTYPE </code> Defines that this document is an
                    HTML5 doc
                  </li>
                  <li className="card-text">
                    <code> html </code> Root element of an HTML page
                  </li>
                  <li className="card-text">
                    <code> head </code> Contains meta information about the HTML
                    page
                  </li>
                  <li className="card-text">
                    <code> title </code> Specifies a title for the HTML page
                  </li>
                  <li className="card-text">
                    <code> h1 </code> Defines a large heading
                  </li>
                  <li className="card-text">
                    <code> p </code> Defines a paragraph
                  </li>
                  <li className="card-text">
                    <code> body </code> Defines the document's body. A container
                    for contents, such as headings, paragraphs, images and
                    links.
                  </li>
                </div>
              </div>
            </div>
            {/* Simple Ex Ends */}

            {/* Simple Example Image */}
            <div className="col-xl-6 col-sm-6 mt-4">
              <div className="card">
                <img
                  className="card-img-top"
                  src="./images/example-html.PNG"
                  id="example-html"
                  alt=""
                />
              </div>
            </div>
            {/* Simple Example ends*/}

            {/* Intermediate Example Begins */}
            <div className="col-xl-6 col-sm-6 mt-4">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title"> Intermediate HTML Document </h5>
                  <li className="card-text">
                    <code> !DOCTYPE </code> Defines that htis document is an
                    HTML5 doc
                  </li>
                  <li className="card-text">
                    <code> html </code> Root element of an HTML page
                  </li>
                  <li className="card-text">
                    <code> head </code> Contains meta information about the HTML
                    page
                  </li>
                  <li className="card-text">
                    <code> title </code> Specifies a title for the HTML page
                  </li>
                  <li className="card-text">
                    <code> h1 </code> Defines a large heading
                  </li>
                  <li className="card-text">
                    <code> p </code> Defines a paragraph
                  </li>
                  <li className="card-text">
                    <code> body </code> Defines the document's body. A container
                    for contents, such as headings, paragraphs, images and
                    links.
                  </li>
                </div>
              </div>
            </div>
            {/* Intermediate Example Ends */}

            {/* example card */}
            <div className="col-xl-6 col-sm-6 mt-4">
              <div className="card">
                <img
                  className="card-img-top"
                  src="./images/example-html.PNG"
                  id="example-html"
                  alt=""
                />
              </div>
            </div>
            {/* example card ends */}

          </div>
        </div>

        {/* table section begins */}
        <div className="col-lg-3">
          <h5 className="text-center"> HTML Tags to Remember </h5>
          <table>
            
            <tr>
              <td> !DOCTYPE </td>
              <td> Defines the document type </td>
            </tr>
            <tr>
              <td> b </td>
              <td> Bolds the text </td>
            </tr>
            <tr>
              <td> br </td>
              <td> Creates a line break </td>
            </tr>
            <tr>
              <td> img </td>
              <td> Image </td>
            </tr>
            <tr>
              <td> li </td>
              <td> List Item </td>
            </tr>
            <tr>
              <td> p </td>
              <td> Paragraph </td>
            </tr>
            <tr>
              <td> a </td>
              <td> Link </td>
            </tr>
            <tr>
              <td> div </td>
              <td> Creates a section in the document </td>
            </tr>
            <tr>
              <td> head </td>
              <td> Contains information for the document </td>
            </tr>
            <tr>
              <td> table </td>
              <td> Defines a table </td>
            </tr>
            <tr>
              <td> title </td>
              <td> Defines a title for the document </td>
            </tr>
            <tr>
              <td> button </td>
              <td> Defines a clickable button </td>
            </tr>
          </table>
        </div>
        {/* table section ends */}

      </div>
      <div className="d-flex justify-content-center">
        <Link to="/html-quiz" className="btn" id="HTMLBtn">
          HTML5 Quiz
        </Link>
      </div>
      
    </div>  
    
    </>  
  );
};

export default ContentHTML;
