
import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home'
import Navbar from './components/Navbar/Navbar'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import MutualAid from './pages/MutualAid/MutualAid'
import OfferPage from './pages/OffersPage/OfferPage'
import RequestPage from './pages/RequestsPage/RequestsPage'

const App = () => {

  return (
    <div>
        <Navbar />
      <main>
        <Routes>
          <Route path="/" element={ <Home />} />
          <Route path="/login" element={ <Login />} />
          <Route path="/register" element={ <Register />} />
          <Route path="/nyc-mutual-aid-resources" element={<MutualAid />} />
          <Route path="/offers" element={ <OfferPage />} />
          <Route path="/requests" element={ <RequestPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default App
