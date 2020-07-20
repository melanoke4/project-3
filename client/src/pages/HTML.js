import React from "react";
import ContentHTML from "../components/ContentHTML";
import { Link } from "react-router-dom";

function html() {
    return(
        <>
        <ContentHTML />
        <br />
        <Link to="/html-quiz" className="btn btn-primary">
            Take Quiz
        </Link>
        </>
    );
}

export default html;