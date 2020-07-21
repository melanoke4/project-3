import React from "react";
import "./style.css";
import { Jumbotron } from "reactstrap";

const Hero = (props) => {
  return (
    <div className="header">
      <div className="row" style={{width:"100%"}}>
        <div className="col-md-12" >
          <Jumbotron fluid id="img-header" >
            
              <img src="./images/kcc.png" alt="" useMap="#workmap" width="460" height="458" id="kccLogo" />
              <map name="workmap">
            
                <area target="" alt="about" title="red" href="about" coords="125,400,61" shape="circle" />
                <area target="" alt="register" title="yellow" href="register" coords="370,173,42" shape="circle" />
                <area target="" alt="courses" title="blue" href="about" coords="254,248,91" shape="circle" />
                <area target="" alt="courses" title="green" href="courses" coords="86,80,78" shape="circle" />
       
              </map>
           
          </Jumbotron>
        </div>
      </div>
    </div>
  );
};

export default Hero;
