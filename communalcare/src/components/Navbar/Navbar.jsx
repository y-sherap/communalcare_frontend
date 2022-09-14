import React from 'react'
import { Link } from 'react-router-dom'
import './navbar.css'

const Navbar = ({ user, authenticated, handleLogout }) => {

  return (user && authenticated) ? (
    <header>
      <nav>
        <div id="navbar">
          <div id="navContainer">
            <div id="homeTitle">
              <Link to="/">COMMUNAL CARE</Link>
            </div>
            <div id="navLinks">
              <div id="dashboardTitle">
                <Link to="/dashboard">DASHBOARD</Link>
              </div>
              <div id="requestsTitle">
                <Link to="/offers">COMMUNITY RESOURCES</Link>  
              </div>
              <div id="offersTitle">
                <Link to="/requests" >COMMUNITY REQUESTS</Link>
              </div>
              <div id="mutualaidTitle">
              <Link to="/nyc-mutual-aid-resources"> FRIENDLY FRIDGES</Link>
              </div>
              <div id="logout">
                <Link onClick={handleLogout} to="/"> LOG OUT</Link>              
              </div> 
              <div id="navFlowerImg">
            </div>
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
            <Link to="/">COMMUNAL CARE  </Link>
          </div>
          <div id="navLinks">
            <div id="loginTitle">
              <Link to="/login"> LOGIN</Link>
            </div>
            {/* <div id="registerTitle"> 
              <Link to="/register">REGISTER</Link>
            </div> */}
            <div id="offersTitle">
              <Link to="/offers">COMMUNITY RESOURCES</Link>
            </div>
            <div id="requestsTitle">
              <Link to="/requests">COMMUNITY REQUESTS</Link>
            </div>
            <div id="mutualaidTitle"> 
              <Link to="/nyc-mutual-aid-resources"> FRIENDLY FRIDGES</Link>
            </div> 
          </div>
        </div>
      </div>
    </nav>
  </header>
  )
}

export default Navbar
