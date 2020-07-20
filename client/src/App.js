import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
// import About from "./pages/About";
import CoursesSection from "./pages/Courses";
import Register from "./pages/Register";
import Wrapper from "./components/Wrapper";
// import Footer from "./components/Footer";
import HTMLQuiz from "./components/HTMLQuiz";
import CSSQuiz from "./components/CSSQuiz";
import JSQuiz from "./components/JSQuiz";
import HTML from "./pages/HTML";
import CSS from "./pages/CSS";
import Javascript from "./pages/Javascript";



function App() {
  return (
   <Router>
     <div>
      <Wrapper>
        <Route exact path="/" component={ Home }/>
        <Route exact path="/Courses" component={ CoursesSection }/>
        <Route exact path="/Register" component={ Register }/>
        <Route exact path="/html" component={ HTML } />
        <Route exact path="/css" component={ CSS } />
        <Route exact path="/javascript" component={ Javascript } />
        <Route path="/html-quiz" exact component={ HTMLQuiz }/>
        <Route path="/js-quiz" exact component={ JSQuiz }/>
        <Route path="/css-quiz" exact component={ CSSQuiz }/>
     
        
      </Wrapper>
     </div>
   </Router>
  );
}
export default App;
