import React, { useState } from "react";
import './style.css';
import Progress from "../Progress";
import Question from "../Question";
import Answers from "../Answers";
import { questions } from '../../data/cssQuiz';

function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [currentAnswer, setCurrentAnswer] = useState('');
    const [answers, setAnswers] = useState([]);
    const [showResults, setShowResults] = useState(false);
    const [error, setError] =  useState();

    const question = questions[currentQuestion];

    const handleClick = e => {
        setCurrentAnswer(e.target.value);
        setError('');
    };

    const restart = () => {
        setAnswers([]);
        setCurrentAnswer('');
        setCurrentQuestion(0);
        setShowResults(false);
      } 

      const renderError = () => {
        if (!error) {
          return;
        }
        return <div className="error">{error}</div>
      }

      
const renderResultMark = (question, answer) => {
    if (question.correct_answer === answer.answer) {
      return <span className="correct">Correct!</span>
    }
  
    return <span className="failed">Incorrect</span>
  }

  const renderResultsData = () => {
    return answers.map( answer => {
      const question = questions.find( 
        question => question.id === answer.questionId 
        );
  
        return (
          <div key={question.id}>{question.question} - {renderResultMark(question, answer)}</div>
        )
    })
  }

  const next = () => {
    const answer = {questionId: question.id, answer: currentAnswer};
  
    if (!currentAnswer) {
      setError('Please select an answer');
      return;
    }
  
    answers.push(answer);
    setAnswers(answers);
    setCurrentAnswer('');
  
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      return;
    }
  
    setShowResults(true);
  }

  if (showResults) {
    return (
      <div className="results" id="results">
            
            <a href="/html">
              <button className="btn btn-success">HTML5</button>
            </a>
            <a href="/javascript">
              <button className="btn btn-success">JavaScript</button>
            </a>
      <h2 id="h2">Results</h2>
      <ul>{renderResultsData()}</ul>
      <button className="btn btn-success" id="restart-quiz" onClick={restart}>Restart Quiz</button>
      <a href="/css">
            <button className="btn btn-success" id="go-backBtn">Go Back</button>
            </a>
        </div>
    )
  } else {
    return (
      <div className="container" id="container">
        <Progress total={questions.length} current={currentQuestion + 1} />
        <Question question={question.question}/>
        {renderError()}
        <Answers 
          question={question} 
          currentAnswer={currentAnswer} 
          handleClick={handleClick}
        />
        <button className="btn" id="submit-css" onClick={next}>Submit</button>
      </div>
    );
  }
}

export default Quiz;