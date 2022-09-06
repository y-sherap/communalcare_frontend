import { useState } from 'react'
import { RegisterUser} from '../../services/Auth'
import { useNavigate} from 'react-router-dom'
import './register.css'

const Register = () => {
  let navigate = useNavigate()

  const [formValues, setFormValues] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  })

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await RegisterUser({
      firstName: formValues.firstName,
      lastName: formValues.lastName,
      username: formValues.username,
      email: formValues.email,
      password: formValues.password
    })
    setFormValues({
      firstName: '',
      lastName: '',
      username: '',
      email: '',
      password: '',
      confirmPassword: ''
    })
    navigate('/login')
  }

  return (
    <div id="registration">
      <form onSubmit={handleSubmit} id="registrationForm">
          <h1>Become a member</h1>
          <label htmlFor="firstName">First Name:</label> 
            <input
              onChange={handleChange}
              name="firstName"
              type="text"
              value={formValues.firstName}
              required
            />
          <label htmlFor="lastName">Last Name:</label>
            <input
              name="lastName"
              type="text"
              onChange={handleChange}
              value={formValues.lastName}
              required
            />
          <label htmlFor="email">Email:</label>
            <input
              name="email"
              type="text"
              onChange={handleChange}
              value={formValues.email}
              required
            />
          <label htmlFor="username">Username:</label>
            <input
              name="username"
              type="text"
              onChange={handleChange}
              value={formValues.username}
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
          <label htmlFor="confirmPassword">Confirm Password:</label>
            <input
              name="confirmPassword"
              type="password"
              onChange={handleChange}
              value={formValues.confirmPassword}
              required
            />
            <button
            disabled={
              !formValues.email ||
              (!formValues.password &&
                formValues.confirmPassword === formValues.password)
              }>Submit</button>
      </form>
    </div>
  )
}

export default Register
