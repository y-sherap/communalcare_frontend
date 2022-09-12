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
      <div id="homeDashboardOfferTitle">
        <p>{offer.title}</p>
      </div>
      <div id="dashboardOfferDate">
        <p>Last updated: {offer.updatedAt}</p>
      </div>
      <button onClick={() => removeOffer(offer.id, index)} id="removeOffer">testing delete offer</button>
      <button onClick={goToSingleOfferPage} id="updateOffer" offer={offer}>testing update offer</button>
    </div>
  )
}

export default DashboardOfferCard