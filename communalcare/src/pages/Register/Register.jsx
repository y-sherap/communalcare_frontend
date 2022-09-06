import React, {useState} from 'react'
import './register.css'

const Register = () => {

  const initialState = {
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: ''
  }

  const [formState, setFormState] = useState(initialState)
  
  const handleChange = e => {
    setFormState({ ...formState, [e.target.id]: e.target.value})
  }
  
  const handleSubmit = e => {
    e.preventDefault()
    setFormState(initialState)
  }

  return (
    <div id="registration">
      <h1>Become a member</h1>
      <form onSubmit={handleSubmit} id="registrationForm">
      <label htmlFor="firstName">First Name:</label> 
        <input
          id="firstName"
          type="text"
          onChange={handleChange}
          value={formState.firstName}
        />
      <label htmlFor="lastName">Last Name:</label>
        <input
          id="lastName"
          type="text"
          onChange={handleChange}
          value={formState.lastName}
        />
      <label htmlFor="username">Username:</label>
        <input
          id="username"
          type="text"
          onChange={handleChange}
          value={formState.username}
        />
      <label htmlFor="email">Email:</label>
        <input
          id="email"
          type="text"
          onChange={handleChange}
          value={formState.email}
        />
      <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="text"
          onChange={handleChange}
          value={formState.password}
        />

      <button type="submit">Submit</button>
      </form>
    </div>
  )

}

export default Register
