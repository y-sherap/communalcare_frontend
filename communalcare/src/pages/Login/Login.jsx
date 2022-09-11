import { SignInUser } from "../../services/Auth"
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './login.css'

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
    navigate('/offers')
  }

  return (
    <div id="loginPage">
      <form onSubmit={handleSubmit} id="loginForm">
          <h1 id="loginFormTitle">Sign In</h1>
          <label htmlFor="email">Email:</label>
            <input
              name="email"
              type="text"
              onChange={handleChange}
              value={formValues.email}
              required
              id="loginField"

            />
          <label htmlFor="password">Password:</label>
            <input
              name="password"
              type="password"
              onChange={handleChange}
              value={formValues.password}
              required
              id="loginField"

            />
            <button id="loginButton"
            disabled={!formValues.email || !formValues.password}>Submit</button>
      </form>
    </div>
  )
}

export default Login
