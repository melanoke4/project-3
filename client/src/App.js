import React from "react";
// import Alert from "./components/Alert";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
// import About from "./pages/About";
// import Courses from "./pages/Courses";
// import Register from "./pages/Register";
// import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Wrapper from "./components/Wrapper";
// import Footer from "./components/Footer";


function App() {
  return (
   <Router>
     <div>
      <Navbar />
      <Wrapper>
        <Route exact path="/" component={ Home }/>
      </Wrapper>
     </div>
   </Router>
  );
}

export default App;
