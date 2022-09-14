import './dashboardoffercard.css'
import { useNavigate } from 'react-router-dom'

const DashboardOfferCard = ({offer, removeOffer, index}) => {

  let navigate = useNavigate()
  const goToSingleOfferPage = () => {
    navigate(`/update-offer/${offer.id}`)
  }

  return (
    <div id="dashboardOfferCard" key={index}>
      <div>
        <img src={offer.photo} id="dashboardOfferCardImage" alt="mountain" />
      </div>
      <div id="dashboardOfferTitle">
        <p>{offer.title}</p>
      </div>
      <div id="dashboardOfferDate">
        <p>Last updated: {offer.updatedAt}</p>
      </div>
      <div id="buttonsOfferCard">
        <button onClick={() => removeOffer(offer.id, index)} id="removeOffer">Delete Offer</button>
        <button onClick={goToSingleOfferPage} id="updateOffer" offer={offer}>Update Offer</button>
      </div>
    </div>
  )
}

export default DashboardOfferCard