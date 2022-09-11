
import './App.css'
import { Routes, Route } from 'react-router-dom'
import {useState, useEffect} from 'react'
import { CheckSession } from './services/Auth'
import axios from 'axios'
import Home from './pages/Home/Home'
import Dashboard from './pages/Dashboard/DashboardOffersPage'
import Navbar from './components/Navbar/Navbar'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import MutualAid from './pages/MutualAid/MutualAid'
import OffersPage from './pages/OffersPage/OffersPage'
import RequestsPage from './pages/RequestsPage/RequestsPage'
import DetailsOfferCard from './components/DetailsOfferCard/DetailsOfferCard'
import UpdateOffer from './components/UpdateOffer/UpdateOffer'

const App = () => {
  const [authenticated, toggleAuthenticated] = useState(false)
  const [user, setUser] = useState(null)
  const [offers, setOffers]  = useState([])
  const [requests, setRequests]  = useState([])

    const getOffers = async () => {
      const res = await axios.get('http://localhost:3001/offer/get_all')
      setOffers(res.data)
    }

    const getRequests = async () => {
      const res = await axios.get('http://localhost:3001/request/get_all')
      setRequests(res.data)
    }

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
    getOffers()
    getRequests()
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
          <Route path="/dashboard" element={ <Dashboard offers={offers} user={user} authenticated={authenticated}/>} />
          <Route path="/login" element={ <Login setUser={setUser} toggleAuthenticated={toggleAuthenticated}/>} />
          <Route path="/register" element={ <Register />} />
          <Route path="/nyc-mutual-aid-resources" element={<MutualAid />} />
          <Route path="/offers" element={ <OffersPage offers={offers}/>} />
          <Route path="/offers/:id" element={ <DetailsOfferCard/> } />
          <Route path="/requests" element={ <RequestsPage requests={requests} />} />
          <Route path="/update-offer/:id" element={ <UpdateOffer requests={requests} />} />
        </Routes>
      </main>
    </div>
  )
}

export default App