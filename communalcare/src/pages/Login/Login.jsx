import { SignInUser } from "../../services/Auth"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './login.css'
import { Link } from 'react-router-dom'

const Login = ( {setUser, toggleAuthenticated}) => {
  let navigate = useNavigate()
  const [formValues, setFormValues] = useState({ email: '', password: '' })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const payload = await SignInUser(formValues)
    setFormValues({ email: '', password: '' })
    setUser(payload)
    toggleAuthenticated(true)
    navigate('/dashboard')
  }

  return (
    <div id="loginPage">
      <div id="rightHeader"><span></span></div>
      <form onSubmit={handleSubmit} id="signUpRegisterForm">
          <div id="loginFormTitle">
            <h1>Sign In</h1>
          </div>          
          <label id="emailTitleLogin" htmlFor="email">Email:</label>
            <input
              name="email"
              type="text"
              onChange={handleChange}
              value={formValues.email}
              required
              class="loginField"
            />
          <label htmlFor="password" id="passwordTitle">Password:</label>
            <input
              name="password"
              type="password"
              onChange={handleChange}
              value={formValues.password}
              required
              class="loginField"
            />
            <button id="loginButton"
            disabled={!formValues.email || !formValues.password}>Submit</button>
            <div id="navigateToRegisterPage">
              <div id="alreadyMember">
                <p>Not yet a member?</p>
              </div>
              <div id="signin">
                <Link to="/register">Sign Up</Link>
              </div>
            </div>
      </form>
    </div>
  )
}

export default Login
