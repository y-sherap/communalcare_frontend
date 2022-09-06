
import './App.css'
import { Routes, Route } from 'react-router-dom'
import {useState} from 'react'
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

  const handleLogout = () => {
    setUser(null)
    toggleAuthenticated(false)
    localStorage.clear()
  }

  return (
    <div>
        <Navbar 
          authenticated={authenticated}
          user={user}
          handleLogout={handleLogout}
        />
      <main>
        <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/login" element={ <Login />} />
          <Route path="/register" element={ <Register />} />
          <Route path="/nyc-mutual-aid-resources" element={<MutualAid />} />
          <Route path="/offers" element={ <OffersPage />} />
          <Route path="/requests" element={ <RequestPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
