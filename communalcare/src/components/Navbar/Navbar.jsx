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
        <div id = "navContainer">
        <div id="homeTitle">
          <Link to="/">Home</Link>
        </div>
        <div id="loginTitle">
          <Link to="/login">Login</Link>
        </div>
        <div id="registerTitle"> 
          <Link to="/register">Register</Link>
        </div>
        <div id="mutualaidTitle"> 
          <Link to="/nyc-mutual-aid-resources">Mutual Aid Resources</Link>
        </div> 
        <div id="offersTitle">
          <Link to="/offers">Offers</Link>
        </div>
        <div id="requestsTitle">
          <Link to="/requests">Requests</Link>
        </div>
        </div>
      </div>
    </nav>
  </header>
  )
}

export default Navbar
