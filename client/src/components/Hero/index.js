import React from "react";
import "./style.css";
import { Jumbotron, Container } from "reactstrap";


const Hero = (props) => {
  return (
    <Jumbotron fluid id="img-header">
      <Container className="hero-text">
        <h2 className="subheading">Give your kid a head start with online coding courses.</h2>
        <br />
        <p className="lead info-p">Kids Coding Corner delivers the most engaging and efficient online coding courses for kids and teens on the market. Our coding courses are designed to empower kids with the programming skills and confidence to flourish in the digital world.</p>
        <a href="" className="btn btn-success btn-md">Register Today!</a>
      </Container>
    </Jumbotron>
  );
}
                

export default Hero;
