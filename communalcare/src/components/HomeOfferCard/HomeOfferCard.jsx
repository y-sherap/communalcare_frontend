import './homeoffercard.css'

const HomeOfferCard = ({ offer, index, showOfferDetails }) => {

  return (
    <div id="offerCard" key={index} onClick={() => showOfferDetails(offer)}>
      <h2>title: {offer.title}</h2>
      <h4>date: {offer.createdAt}</h4>
      <img src={offer.photo} alt="mountain" />
    </div>
  )
}

export default HomeOfferCard

