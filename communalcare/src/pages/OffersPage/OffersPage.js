import HomeOfferCard from '../../components/HomeOfferCard/HomeOfferCard'

const OffersPage = ( {offers}) => {

  return (
      <div>
        {offers.map((offer, index) => (
            <HomeOfferCard 
              offer={offer}
              index={index}
            />  
          )
        )}   
    </div> 
    )
}


export default OffersPage
