import React from "react";
import "./style.css";
import { Jumbotron } from "reactstrap";


const Hero = (props) => {
  return (
    <div className="header">
      <div className="row">
        <div className="col-md-6">
          <div className="container">
          <Jumbotron fluid id="img-header" /> 
          </div>
        </div>
        <div className="col-md-6">
          <div className="container">
            <a href="/courses">
              <img src="./images/kcc.png" alt="" id="kccLogo" />
            </a>
          </div>
        </div>
      </div>
      
    </div>



  //  <div className="header">
  //   <Jumbotron fluid id="img-header">
  //     <Container className="hero-text">
  //       <h2 className="subheading">Give your kid a head start with online coding courses.</h2>
  //       <p className="lead info-p">Kids Coding Corner delivers the most engaging and efficient online coding courses for kids and teens on the market. Our coding courses are designed to empower kids with the programming skills and confidence to flourish in the digital world.</p>
  //       <a href="" className="btn btn-success btn-md">Register Today!</a>
  //     </Container>
  //   </Jumbotron>
  //   </div>
  );
}
                

export default Hero;
