
import './App.css'
import { Routes, Route } from 'react-router-dom'
import {useState, useEffect} from 'react'
import { CheckSession } from './services/Auth'
import axios from 'axios'
import Home from './pages/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import MutualAid from './pages/MutualAid/MutualAid'
import OffersPage from './pages/OffersPage/OffersPage'
import RequestPage from './pages/RequestsPage/RequestsPage'

const App = () => {
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)
  const [offers, setOffers]  = useState([])

  useEffect(() => {
    const getOffers = async () => {
      const res = await axios.get('http://localhost:3001/offer/get_all')
      setOffers(res.data)
    }
    getOffers()
  }, [])

  const handleLogout = () => {
    setUser(null)
    toggleAuthenticated(false)
    localStorage.clear()
  }

  const checkToken = async () => {
    const user = await CheckSession()
    setUser(user)
    toggleAuthenticated(true)
  }

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
          <Route path="/login" element={ <Login setUser={setUser} toggleAuthenticated={toggleAuthenticated}/>} />
          <Route path="/register" element={ <Register />} />
          <Route path="/nyc-mutual-aid-resources" element={<MutualAid />} />
          <Route path="/offers" element={ <OffersPage offers={offers} user={user} authenticated={authenticated}/>} />
          <Route path="/requests" element={ <RequestPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
