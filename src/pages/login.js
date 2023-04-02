import { signInWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../firebase.ts"

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const login = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        console.log(userCredential);
        navigate("/pages/authDetails.js", {replace: true})
    }).catch((error) => {
        console.log(error);
    })
  }

  return (
    <div className="login-page">
      <div className="login-container">
        <div classname="login-header">
          <h1 id="plantify">Plantify.</h1>
          <h2>Sign in to get started using Plantify</h2>
          <hr />
        </div>

        <div id="login-input" className="input-group">
          <label htmlFor="Username">Email or username</label>
          <input
            type="text"
            name="username"
            id="login-username"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="Password">Password</label>
          <input
            type="password"
            name="password"
            id="login-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
            <Link to="/pages/authDetails.js">
                <input type="button" value="Login" onClick={login}/>
            </Link>
        </div>

        <Link className="login-register-swap" to="/pages/register.js">
          Don't have an account yet?
        </Link>
      </div>
    </div>
  );
};

export default Login;
