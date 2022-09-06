import { SignInUser } from "../../services/Auth"
import { useState } from 'react'

const Login = () => {

  const [formValues, setFormValues] = useState({ email: '', password: '' })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
  }

  return (
    <div id="login">
      <form onSubmit={handleSubmit} id="login">
          <h1>Sign In</h1>
          <label htmlFor="email">Email:</label>
            <input
              name="email"
              type="text"
              onChange={handleChange}
              value={formValues.email}
              required
            />
          <label htmlFor="password">Password:</label>
            <input
              name="password"
              type="password"
              onChange={handleChange}
              value={formValues.password}
              required
            />
            <button
            disabled={!formValues.email || !formValues.password}>Submit</button>
      </form>
    </div>
  )
}

export default Login
