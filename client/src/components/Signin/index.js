import React from "react";
import { signInUser } from "../../actions/authActions";

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = { name: "", password: "" };
  }

  handleChange = (e) => {
    // console.log(e.target.name);
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    const userData = {
      email: this.state.name,
      password: this.state.password
    };

    signInUser(userData);

  };

  render() {
    return (
      <div className="row d-flex justify-content-center">
        <form onSubmit={this.handleSubmit} className="form-inline">
          <div className="form-group mb-2">
            <label htmlFor="name" className="sr-only">
              Name
            </label>
            <input
              onChange={this.handleChange}
              name="name"
              type="text"
              className="form-control-plaintext"
              id="name"
              placeholder="Name"
              value={this.state.name}
            />
          </div>
          <div className="form-group mx-sm-3 mb-2">
            <label htmlFor="inputPassword2" className="sr-only">
              Password
            </label>
            <input
              onChange={this.handleChange}
              name="password"
              type="password"
              className="form-control"
              id="inputPassword2"
              placeholder="Password"
              value={this.state.password}
            />
          </div>
          <div>
            <button type="submit" className="btn btn-primary mb-2">
              Confirm identity
            </button>
          </div>
        </form>
      </div>
    );
  }
}

export default Signin;