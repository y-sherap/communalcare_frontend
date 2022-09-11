import './dashboardoffercard.css'
import { useNavigate } from 'react-router-dom'

const DashboardOfferCard = ({offer, removeOffer, index}) => {

  let navigate = useNavigate()
  const goToSingleOfferPage = () => {
    navigate(`/update-offer/${offer.id}`)
  }

  return (
    <div id="dashboardOfferCard" key={index}>
      <h2>{offer.title}</h2>
      <h4>date: {offer.datePosted}</h4>
      <img src={offer.photo} alt="mountain" />
      <button onClick={() => removeOffer(offer.id, index)} id="removeOffer">testing delete offer</button>
      <button onClick={goToSingleOfferPage} id="updateOffer">testing update offer</button>
    </div>
  )
}

export default DashboardOfferCard