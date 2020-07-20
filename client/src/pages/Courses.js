import React from "react";
import Alert from "../components/Alert";
import Navbar from "../components/Navbar";
import CourseGroup from "../components/CourseGroup";
import Quotes from "../components/Quotes";
import Checkout from "../Checkout";



function Courses() {
    return(
        <div>
            <Alert />
            <Navbar />
            <CourseGroup />
            <p className="App-intro">
          <Checkout
            name={'Your Company Name'}
            description={'Item that you sold'}
            amount={4.99}
          />
        </p>
            <Quotes />
        </div>
    );
}

export default Courses;