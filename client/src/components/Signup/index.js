import React, { Component } from 'react'
import { FormBtn, Input } from '../SignUpForm'
import { signUpUser } from '../../actions/authActions'
import { Redirect } from "react-router-dom"


export default class SignUp extends Component {

    state = {
        name: "",
        email: "",
        password: "",
        avatar: "",
        isRedirect: false,
        error:""
      };

    handleChange = event => {
      const{name, value} = event.target;
      this.setState({[name] : value})
    }

    handleFormSubmit = event => {
      console.log(this.state)
        event.preventDefault();
        if (this.state.name) {
            const newUser = {
                name: this.state.name,
                email: this.state.email,
                avatar: this.state.avatar,
                password: this.state.password,
              };
          signUpUser(newUser).then(result => {
            if(result.data) {
              this.setState({ isRedirect: true})
            }
          })
        }
        else {
            this.setState({error: "Please enter all required fields."})
        }
      };


    render() {
      console.log(this.state.error)
      if(this.state.isRedirect) {
        return <Redirect to="/"/>
      }
        return (
            <div>
              <div className="row">
               <div className="col-lg-4">
        <div className="card">
        <div className="card-body">
          <div className="login">
            <h2>Sign Up</h2></div>
        
        </div>
              <div className="col-lg-4 form">
                <Input name="name" type="text" placeholder="name" onChange={this.handleChange} />
                <Input name="email" type="email" placeholder="Email" onChange={this.handleChange}  />
                <Input name="password" type="password" placeholder="Password" onChange={this.handleChange}  />
                <Input name="avatar" type="text" placeholder="avatar" onChange={this.handleChange}  />
                
                <FormBtn onClick={this.handleFormSubmit}>Sign Up</FormBtn>
                <p>{this.state.error}</p>
                </div>
                </div>
            </div>
            </div>
            </div>
        )
    }
}