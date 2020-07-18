import React from "react";
// import Alert from "./components/Alert";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
// import About from "./pages/About";
import CoursesSection from "./pages/Courses";
import Register from "./pages/Register";
// import Login from "./pages/Login";
import Wrapper from "./components/Wrapper";
// import Cart from "./pages/Cart";
// import Footer from "./components/Footer";
import Quiz from "./pages/Quiz";
import Checkout from "./components/Checkout"
import Canceled from "./components/Canceled.";
import Success from "./components/Success";


function App() {
  return (
   <Router>
     <div>
      <Wrapper>
        <Route exact path="/" component={ Home }/>
        <Route exact path="/Courses" component={ CoursesSection }/>
        <Route exact path="/Quiz" component={ Quiz }/>
        <Route exact path="/Register" component={ Register }/>
        {/* stripe routes */}
        <Switch>
        <Route path="/success">
          <Success/>
        </Route>
        <Route path="/canceled">
       <Canceled/>
        </Route>
        <Route path="/Checkout">
          <Checkout />
        </Route>
      </Switch>
      {/* end stripe */}
      </Wrapper>
     </div>
   </Router>
  );
}
export default App;
