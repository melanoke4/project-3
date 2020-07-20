import React from "react";
import Alert from "../components/Alert";
import Navbar from "../components/Navbar";
import CourseGroup from "../components/CourseGroup";
import Quotes from "../components/Quotes";




function Courses() {
    return(
        <div>
            <Alert />
            <Navbar />
            <CourseGroup />
            <Quotes />
        </div>
    );
}

export default Courses;