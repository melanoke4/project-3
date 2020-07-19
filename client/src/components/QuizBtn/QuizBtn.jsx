import React from "react";

import { Link } from "react-router-dom";

function QuizBtn() {
  return (
    <div>
      <Link to="/Quiz" className="btn btn-primary">
        Take Quiz
      </Link>
    </div>
  );
}

export default QuizBtn;
