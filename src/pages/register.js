import { Link } from "react-router-dom"

export default function Register() {
    return <div className="register-page">
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
                        <input type="text" name="email" id="register-email" />
                        <label htmlFor="Username">Username</label>
                        <input type="text" name="username" id="register-username" />
                        <label htmlFor="Password">Password</label>
                        <input type="text" name="password" id="register-password" />
                    </div>
                </div>

                <input id="register-button" type="button" value="Register"/>
            </div>

            <Link className="login-register-swap" to="/pages/login.js">Already have an account?</Link>
        </div>
    </div>
}