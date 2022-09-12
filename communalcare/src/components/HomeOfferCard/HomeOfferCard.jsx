import './homeoffercard.css'
import { useNavigate } from 'react-router-dom'

const HomeOfferCard = ({ offer, index }) => {

  let navigate = useNavigate()
  const getOfferDetails = () => {
    navigate(`/get-offer-details/${offer.id}`)
  }

  return (
    <div id="offerCard" key={index} onClick={getOfferDetails}>
      <div>
        <img id="homeOfferImage" src={offer.photo} alt="mountain" />
      </div>
      <div id="homeOfferTitleDate">
        <div id="homeOfferTitle">
          <p>{offer.title}</p>
        </div>
        <div id="homeOfferDate">
          <p>last updated: {offer.updatedAt}</p>
        </div>
      </div>

    </div>
  )
}

export default HomeOfferCard

