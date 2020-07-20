import React from "react";
import Question from "../Question";
import AnswerOptions from "../AnswerOptions";

function fullQuestion(props) {
    return (
      <div>
        <form action="/action_page.php">
          <p>
            <Question />
          </p>
          <input type="radio" id={1} name="gender" value="male" />
          <label for="male">
            <AnswerOptions option={"answer1"} />
          </label>
          <br />
          <input type="radio" id={2} name="gender" value="female" />
          <label for="female">
            <AnswerOptions option={"answer2"} />
          </label>
          <br />
          <input type="radio" id={3} name="gender" value="other" />
          <label for="other">
            <AnswerOptions option={"answer3"} />
          </label>
          <br />
          <input type="radio" id={4} name="gender" value="other" />
          <label for="other">
            <AnswerOptions option={"answer4"} />
          </label>
        </form>
      </div>
    );
  }
  
export default fullQuestion;