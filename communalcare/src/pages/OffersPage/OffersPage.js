import HomeOfferCard from '../../components/HomeOfferCard/HomeOfferCard'
// import { useNavigate } from 'react-router-dom'

const OffersPage = ( {offers}) => {
  // let navigate = useNavigate()

  // const showOfferDetails = (offer) => {
  //   navigate(`offers/${offer.id}`)
  // }

  return (
      <div>
        <h1>style, change yellow background, make images larger</h1>
        {offers.map((offer, index) => (
            <HomeOfferCard 
              offer={offer}
              key={index}
              // showOfferDetails={showOfferDetails}
            />  
          )
        )}   
    </div> 
    )
}

export default OffersPage
