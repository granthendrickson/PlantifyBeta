import { Link } from "react-router-dom"

export default function Login() {
    return <div className="login-page">
        <div className="login-container">
            <div classname="login-header">
                <h1 id="plantify">Plantify.</h1>
                <h2>Sign in to get started using Plantify</h2>
                <hr />
            </div>

            <div id="login-input" className="input-group">
                <label htmlFor="Username">Email or username</label>
                <input type="text" name="username" id="login-username" />
                <label htmlFor="Password">Password</label>
                <input type="text" name="password" id="login-password" />

                <input type="button" value="Login"/>
            </div>

            <Link className="login-register-swap" to="/pages/register.js">Don't have an account yet?</Link>
        </div>
    </div>
}