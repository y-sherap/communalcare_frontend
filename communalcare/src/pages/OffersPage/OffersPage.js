import axios from 'axios'
import {useState, useEffect} from 'react'
import OfferCard from '../../components/OfferCard/OfferCard'

const OfferPage = () => {
  const [offers, setOffers]  = useState([])

  useEffect(() => {
    const getOffers = async () => {
      const res = await axios.get('http://localhost:3001/offer/get_all')
      setOffers(res.data)
    }
    getOffers()
  }, [offers])

  return (
    <div>
      {offers.map((offer, index) => (
        <div>
          <OfferCard offer={offer} index={index} />
        </div>   
        )
      )}   
    </div>
  )
}

export default OfferPage
