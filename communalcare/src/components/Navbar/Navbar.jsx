import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = ({user, authenticated}) => {

  return (user && authenticated) ? (
    <header>
      <nav>
        <div id="navbar">
          <div id="navContainer">
            <div id="homeTitle">
              <Link to="/">Home</Link>
            </div>
            <div id="dashboardTitle">
              <Link to="/dashboard">Dashboard</Link>
            </div>
            <div id="requestsTitle">
              <Link to="/requests">Requests</Link>  
            </div>
            <div id="offersTitle">
              <Link to="/offers" >Offers</Link>
            </div>
            <div id="mutualaidTitle">
              <Link to="/nyc-mutual-aid-resources" >Mutual Aid Resources</Link>          
            </div>
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
