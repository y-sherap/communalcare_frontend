import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = ({user, authenticated}) => {

  return (user && authenticated) ? (
    <header>
      <nav>
        <div id="navbar">
          <div>
            <Link to="/" id="homeTitle">Home</Link>
          </div>
          <div>
            <Link to="/dashboard" id="dashboardTitle">Dashboard</Link>
            <Link to="/nyc-mutual-aid-resources" id="mutualaidTitle">Mutual Aid Resources</Link>
            <Link to="/offers" id="offersTitle">Offers</Link>
            <Link to="/requests" id="requestsTitle">Requests</Link>
          </div>
      </div>
    </nav>
    </header>
  ) : (
    <header>
    <nav>
      <div id="navbar">
        <div>
          <Link to="/" id="homeTitle">Home</Link>
        </div>
        <div>
          <Link to="/login" id="loginTitle">Login</Link>
          <Link to="/register" id="registerTitle">Register</Link>
          <Link to="/nyc-mutual-aid-resources" id="mutualaidTitle">Mutual Aid Resources</Link>
          <Link to="/offers" id="offersTitle">Offers</Link>
          <Link to="/requests" id="requestsTitle">Requests</Link>
        </div>
    </div>
  </nav>
  </header>
  )
}

export default Navbar
