
import React from "react";
// import Alert from "./components/Alert";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./pages/Home";
// import About from "./pages/About";
import CoursesSection from "./pages/Courses";
import Register from "./pages/Register";
// import Login from "./pages/Login";
import Wrapper from "./components/Wrapper";
import Cart from "./pages/Cart";
// import Footer from "./components/Footer";
// import Quiz from "./pages/Quiz";



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state={cart: []};
  }

  addToCart = (product) => {
    this.setState((state) => {
      return{
        cart: state.cart.concat(product)
      }
    })
  }
  render() {

  console.log(this.addToCart);

  return (
   <Router>
     <div>
      <Wrapper>
        <Route exact path="/" component={ Home }/>
        <Route exact path="/Courses" render={(props) => {
          return <CoursesSection {...props} addToCart={this.addToCart} /> }}/>
        {/* <Route exact path="/Quiz" component={ Quiz }/> */}
        <Route exact path="/Cart" component={ Cart } />
        <Route exact path="/Register" component={ Register }/>
      </Wrapper>
     </div>
   </Router>
  );

  }
}

export default App;
