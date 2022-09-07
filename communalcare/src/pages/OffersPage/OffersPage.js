import OfferCard from '../../components/OfferCard/OfferCard'
import Client from '../../services/api'
import { useState} from 'react'

const OfferPage = ( {offers, user, authenticated}) => {

  const [userOffers, setUserOffers] = useState([])

  const removeOffer = async (id, index) => {
    await Client.delete(`http://localhost:3001/offer/${id}`)
    let tempArray = [...userOffers]
    tempArray.splice(index, 1)
    setUserOffers(tempArray)
    window.location.reload(false)
  }

  return (user, authenticated) ? (
    <div>
      {offers.map((offer, index) => (
          <OfferCard 
            offer={offer}
            index={index}
            removeOffer={removeOffer}
          />  
        )
      )}   
    </div>
  ) : 
  <div>
    <h1>testing ternary</h1>
  </div>
}

export default OfferPage
