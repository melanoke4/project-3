import React from "react";
import ContentCSS from "../components/ContentCSS";
import { Link } from "react-router-dom";

function CSS() {
    return(
        <>
        <ContentCSS />
        <br />
        <Link to="/css-quiz" className="btn btn-primary">
        Take Quiz
        </Link>
        </>
    );
}

export default CSS;