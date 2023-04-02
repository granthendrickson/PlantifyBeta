import { createUserWithEmailAndPassword } from "firebase/auth";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { auth } from "../firebase.ts";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const register = (e) => {
    e.preventDefault();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log(userCredential);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="register-page">
      <div className="register-container">
        <div>
          <div className="container-half">
            <div classname="register-header">
              <h1 id="plantify">Plantify.</h1>
              <h2>Create an account to get started using Plantify</h2>
              <hr />
            </div>

            <div id="register-input" className="input-group">
              <label htmlFor="First-Name">First Name</label>
              <input type="text" name="first-name" id="register-first-name" />
              <label htmlFor="Last-Name">Last Name</label>
              <input type="text" name="last-name" id="register-last-name" />
            </div>
          </div>

          <div className="container-half">
            <div id="register-input" className="input-group">
              <label htmlFor="Email">Email</label>
              <input 
                type="text" 
                name="email" 
                id="register-email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}/>
              <label htmlFor="Password">Password</label>
              <input 
                type="password" 
                name="password" 
                id="register-password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)}/>
            </div>
          </div>
        
        <Link to="/pages/authDetails.js">
            <input
                id="register-button"
                type="button"
                value="Register"
                onClick={register}
            />
        </Link>

        </div>

        <Link className="login-register-swap" to="/pages/login.js">
          Already have an account?
        </Link>
      </div>
    </div>
  );
};

export default Register;
