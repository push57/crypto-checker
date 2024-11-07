import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
        <div className="navbar">
            <div className="nav_logo">
                <h2 className="logo">Crypto Check</h2>
            </div>
            <div className="nav_list">
                <ul>
                    <li>Home</li>
                    <li>Feature</li>
                    <li>Pricing</li>
                    <li>Blog</li>
                </ul>
            </div>
            <div className="nav_button">
                <button>Sign Up</button>
            </div>
        </div>
    </div>
  )
}

export default Navbar