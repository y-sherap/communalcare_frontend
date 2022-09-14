import './homeoffercard.css'
import { useState } from 'react'

const HomeOfferCard = ({ offer, index }) => {
  const [isHovering, setIsHovering] = useState(false)

  const handleMouseOver = () => {
    setIsHovering(true)
  }

  const handleMouseOut = () => {
    setIsHovering(false)
  }

  return (
    <div id="offerCard" key={index} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} >
      <div>
        <img id="homeOfferImage" src={offer.photo} alt="mountain"  />
      </div>
      <div id="homeOfferTitle">
          <p>{offer.title}</p>
        </div>

      {isHovering && (
      <div id="homeOfferOnHover">
        <div id="homeOfferDesription">
          <p>Description: {offer.description}</p>
        </div>
        <div id="homeOfferCategory">
          <p>Category: {offer.category}</p>
        </div>
        <div id="homeOfferDate">
          <p>Condition: {offer.condition}</p>
        </div>
        <div id="homeOfferDate">
          <p>Location:{offer.borough} {offer.zipcode}</p>
        </div>
        <div id="homeOfferDate">
          <p>last updated: {offer.updatedAt}</p>
        </div>
      </div>
    )}
    </div>
  )
}

export default HomeOfferCard