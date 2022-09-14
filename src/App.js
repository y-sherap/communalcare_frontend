import './App.css'
import { Routes, Route } from 'react-router-dom'
import {useState, useEffect} from 'react'
import { CheckSession } from './services/Auth'
import Home from './pages/Home/Home'
import Dashboard from './pages/Dashboard/DashboardOffersPage'
import Navbar from './components/Navbar/Navbar'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import MutualAid from './pages/MutualAid/MutualAid'
import OffersPage from './pages/OffersPage/OffersPage'
import RequestsPage from './pages/RequestsPage/RequestsPage'
import UpdateOffer from './components/UpdateOffer/UpdateOffer'

const App = () => {
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)

  const handleLogout = () => {
    setUser(null)
    toggleAuthenticated(false)
    localStorage.clear()
  }
  // makes a get request w/ stored token to check it's validity
  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
    toggleAuthenticated(true)
  }
  // check if token currently exists
  useEffect(() => {
    const token = localStorage.getItem('token')
    if (token) {
      checkToken()
    }
  }, [])

  return (
    <div>
        <Navbar 
          authenticated={authenticated}
          user={user}
          handleLogout={handleLogout}
        />
      <main>
        <Routes>
          <Route path="/" element={ <Home user={user} authenticated={authenticated}/>} />
          <Route path="/dashboard" element={ <Dashboard user={user} authenticated={authenticated}/>} />
          <Route path="/login" element={ <Login setUser={setUser} toggleAuthenticated={toggleAuthenticated}/>} />
          <Route path="/register" element={ <Register />} />
          <Route path="/nyc-mutual-aid-resources" element={<MutualAid />} />
          <Route path="/offers" element={ <OffersPage />} />
          <Route path="/requests" element={ <RequestsPage />} />
          <Route path="/update-offer/:id" element={ <UpdateOffer />} />
        </Routes>
      </main>
    </div>
  )
}

export default App