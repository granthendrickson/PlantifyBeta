import React from 'react'
import { Link } from "react-router-dom"

export default function Navbar() {
    return <nav className='navbar'>
         <Link id="plantify" to="pages/home.js">Plantify.</Link>


          <ul class="nav-links">
            <li class="nav-item"><Link href="#">About</Link></li>
            <li class="nav-item"><Link to="/pages/plantbase.js">Browse</Link></li>
          </ul>

        <div className="search-box">
          <input type="text" placeholder='Search'/>
        </div>


          <ul class="nav-links">
          <li class="nav-item"><Link to="/pages/login.js">Login</Link></li>
          <div class="register-button-box">
            <li class="nav-item"><Link id="register-button" to="/pages/register.js">Register</Link></li>
          </div>
        </ul>
    </nav>
}