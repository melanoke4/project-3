import React, { useState } from "react";
// import "../Register.css";
import Axios from "axios";
import Alert from "../components/Alert";
import Navbar from "../components/Navbar";
import { useHistory } from "react-router-dom";

function Register() {
    const history = useHistory();
    const [registerUsername, setRegisterUsername] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");
    const [loginUsername, setLoginUsername] = useState("");
    const [loginPassword, setLoginPassword] = useState("");

    const register = () => {
        Axios({
            method: "POST",
            data: {
                username: registerUsername,
                password: registerPassword,
            },
            withCredentials: true,
            url: "http://localhost:3000/register",
        }).then((res) => console.log(res));
    };
   
    return (
        <div className="App">
            <div>
                <Alert />
                <Navbar />
            </div>
            <div>
                <h1>Register</h1>
                <input
                    placeholder="username"
                    onChange={(e) => setRegisterUsername(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="password"
                    onChange={(e) => setRegisterPassword(e.target.value)}
                />
                <button onClick={register}>Submit</button>
            </div>

            <div>
                <h1>Login</h1>
                <input
                    placeholder="username"
                    onChange={(e) => setLoginUsername(e.target.value)}
                />
                <input
                    placeholder="password"
                    type="password"
                    onChange={(e) => setLoginPassword(e.target.value)}
                />
                <button onClick={login}>Submit</button>
            </div>
        </div>
    );
}

export default Register;
