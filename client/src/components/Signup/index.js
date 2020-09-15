import React, { Component } from 'react'
import { FormBtn, Input } from '../SignUpForm'
import { signUpUser } from '../../actions/authActions'
import { Redirect } from "react-router-dom"
import "./style.css"
import Navbar from "../Navbar";
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
    handleAvatar = event =>{
      const{name, value} = event.target;
      console.log(event.target)
      this.setState({[name] : value})
      console.log(this.state.avatar);
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
                <Navbar/>
              <div className="row">
               <div className="col-lg-12">
        <div className="card sign-up-card">
        <div className="card-body">
          <div className="login">
            <h2>Sign Up</h2></div>
        
        </div>
              <div className="col-lg-12 form">
                <Input className="input-form" name="name" type="text" placeholder="name" onChange={this.handleChange} />
                <Input className="input-form" name="email" type="email" placeholder="Email" onChange={this.handleChange}  />
                <Input className="input-form"  name="password" type="password" placeholder="Password" onChange={this.handleChange}  />
                 <div className="avatar-picker"><h1>Choose your avatar</h1>
                   <button onClick={this.handleAvatar} className="avatar-btn" name="avatar" value="1"  ><img src="./images/avatars/01-bat.png" className="avatar-img"/></button> 
                   <button onClick={this.handleAvatar} className="avatar-btn" name="avatar" value="2" ><img src="./images/avatars/02-frog.png" className="avatar-img"/></button> 
                   <button onClick={this.handleAvatar} className="avatar-btn" name="avatar" value="4"  ><img src="./images/avatars/03-tiger.png" className="avatar-img"/></button> 
                   <button onClick={this.handleAvatar} className="avatar-btn" name="avatar" value="5"  ><img src="./images/avatars/04-mantaray.png" className="avatar-img"/></button> 
                   <button onClick={this.handleAvatar} className="avatar-btn" name="avatar" value="6"  ><img src="./images/avatars/05-penguin.png" className="avatar-img"/></button> 
                   <button onClick={this.handleAvatar} className="avatar-btn" name="avatar" value="7"  ><img src="./images/avatars/06-butterfly.png" className="avatar-img"/></button> 
                   <button onClick={this.handleAvatar} className="avatar-btn" name="avatar" value="8"  ><img src="./images/avatars/07-monkey.png" className="avatar-img"/></button> 
                   <button onClick={this.handleAvatar} className="avatar-btn" name="avatar" value="9"  ><img src="./images/avatars/08-parrot.png" className="avatar-img"/></button> 
                 
                 </div>
                 
                <FormBtn  onClick={this.handleFormSubmit}>Sign Up</FormBtn>
                
                <p>{this.state.error}</p>
                </div>
                </div>
            </div>
            </div>
            </div>
        )
    }
}