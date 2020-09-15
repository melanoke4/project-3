import React from "react";
import "./style.css";
import { Jumbotron } from "reactstrap";

const Hero = (props) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12" >
          <Jumbotron fluid id="img-header" >
            
              <img src="./images/kcc.png" alt="" useMap="#workmap" width="460" height="458" id="kccLogo" />
              <map name="workmap">
                <area target="" alt="register" title="yellow" href="register" coords="390,173,40" shape="circle" />
                <area target="" alt="courses" title="blue" href="/" coords="217,230,80" shape="circle" />
                <area target="" alt="courses" title="green" href="courses" coords="74,74,65" shape="circle" />
              </map>
           
          </Jumbotron>
        </div>
      </div>
    </div>
  );
};

export default Hero;
