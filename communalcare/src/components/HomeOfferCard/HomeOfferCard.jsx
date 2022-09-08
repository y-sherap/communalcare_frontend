import './homeoffercard.css'

const HomeOfferCard = ({offer, index}) => {

  return (
    <div id="offerCard" key={index}>
      <h2>title: {offer.title}</h2>
      <h4>date: {offer.datePosted}</h4>
      <img src={offer.photo} alt="mountain" />
    </div>
  )
}

export default HomeOfferCard

