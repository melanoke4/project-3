import React from "react";
import ContentJava from "../components/ContentJava";
import { Link } from "react-router-dom";

function Javascript() {
    return(
        <>
        <ContentJava />
        <br />
        <Link to="/js-quiz" className="btn btn-primary">
            Take Quiz
        </Link>
        </>
    );
}

export default Javascript;