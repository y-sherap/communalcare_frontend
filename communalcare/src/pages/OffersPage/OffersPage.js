import HomeOfferCard from '../../components/HomeOfferCard/HomeOfferCard'
import './offerspage.css'
import {useState, useEffect} from 'react'
import axios from 'axios'

const BASE_URL = 'http://localhost:3001'

const OffersPage = () => {
  const [offers, setOffers]  = useState([])
  const [searchValue, setSearchValue] = useState('')

  useEffect(() => {
    const getOffers = async () => {
      const res = await axios.get(`${BASE_URL}/offer/get_all`)
      setOffers(res.data)
    }
    getOffers()
  }, [])

  return (
      <div id="offersPage">
        <div id="offerPageHeader">
          <div id="searchBar">
            <input type="text" placeholder="search" onChange={event => {setSearchValue(event.target.value)}}/>
          </div>
          <div id="homeOfferPageTitle">
            <p>Available Community Resources</p>
          </div>
        </div>
        <div id="homeOfferList"> 
          {offers.filter((val)=> {
            if(searchValue === "") {
              return val
            } else if ((val.title.toLowerCase() || val.category.toLowerCase()).includes(searchValue.toLowerCase())) {
              return val
            }
          }).map((offer, index) => (
              <HomeOfferCard 
                offer={offer}
                key={index}
              />  
            )
          )}   
        </div>
    </div> 
    )
}

export default OffersPage
