import './homeoffercard.css'

const HomeOfferCard = ({offer}) => {

  return (
    <div id="offerCard">
      <h2>title: {offer.title}</h2>
      <h4>date: {offer.datePosted}</h4>
      <img src={offer.photo} alt="mountain" />
    </div>
  )
}

export default HomeOfferCard

