const OfferCard = ({offer, index}) => {

  return (
    <div id="offerCard">
      <h2>title: {offer.title}</h2>
      <h3>condition: {offer.condition}</h3>
      <h3>photo: {offer.photo}</h3>
    </div>
  )
}

export default OfferCard

