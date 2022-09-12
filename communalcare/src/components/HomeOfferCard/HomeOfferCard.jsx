import './homeoffercard.css'

const HomeOfferCard = ({ offer, index, showOfferDetails }) => {

  return (
    <div id="offerCard" key={index} onClick={() => showOfferDetails(offer)}>
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

