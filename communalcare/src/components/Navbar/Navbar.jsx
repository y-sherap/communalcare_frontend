import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = () => {

  return (
    <div id="navbar">
      <nav id="navbarContainer">
        <Link to="/" id="homeTitle">Home</Link>
            <Link to="/login" id="loginTitle">Login</Link>
            <Link to="/register" id="registerTitle">Register</Link>
            <Link to="/nyc-mutual-aid-resources" id="mutualaidTitle">Mutual Aid Resources</Link>
            <Link to="/offers" id="offersTitle">Offers</Link>
            <Link to="/requests" id="requestsTitle">Requests</Link>
      </nav>
    </div>
  )
}

export default Navbar
