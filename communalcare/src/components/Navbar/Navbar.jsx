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
                <Link to="/dashboard">dashboard</Link>
              </div>
              <div id="requestsTitle">
                <Link to="/requests">community requests</Link>  
              </div>
              <div id="offersTitle">
                <Link to="/offers" >community resources</Link>
              </div>
              <div id="mutualaidTitle">
                <Link to="/nyc-mutual-aid-resources" >mutual aid groups</Link>          
              </div>
              <div id="logout">
                <Link onClick={handleLogout} to="/"> log out</Link>              
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
            <Link to="/">COMMUNAL CARE</Link>
          </div>
          <div id="navLinks">
            <div id="loginTitle">
              <Link to="/login">login</Link>
            </div>
            <div id="registerTitle"> 
              <Link to="/register">register</Link>
            </div>
            <div id="offersTitle">
              <Link to="/offers">community resources</Link>
            </div>
            <div id="requestsTitle">
              <Link to="/requests">community requests</Link>
            </div>
            <div id="mutualaidTitle"> 
              <Link to="/nyc-mutual-aid-resources">mutual aid groups</Link>
            </div> 
            {/* <div id="navFlowerImg">
                <img src="https://www.gutenberg.org/files/18913/18913-h/images/img174.jpg" alt="picture" />
            </div> */}
          </div>
        </div>
      </div>
    </nav>
  </header>
  )
}

export default Navbar
