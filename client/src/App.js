
import React from "react";
// import Alert from "./components/Alert";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
// import About from "./pages/About";
import Courses from "./pages/Courses";
import Register from "./pages/Register";
// import Login from "./pages/Login";
import Wrapper from "./components/Wrapper";
// import Footer from "./components/Footer";
import Quiz from "./pages/Quiz";


function App() {
  
  return (
   <Router>
     <div>
      <Wrapper>
        <Route exact path="/" component={ Home }/>
        <Route exact path="/Courses" component={ Courses }/>
        <Route exact path="/Quiz" component={ Quiz }/>
        
        <Route exact path="/Register" component={ Register }/>
      </Wrapper>
     </div>
   </Router>
  );
}

export default App;
