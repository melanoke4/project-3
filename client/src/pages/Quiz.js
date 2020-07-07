import React from "react";
import Question from "../components/Question";

function Quiz() {
  return (
    <div className="App">
      <div className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <h2>React Quiz</h2>
      </div>
      <Question content="Here is where the question will go" />
    </div>
  );
}

export default Quiz;
