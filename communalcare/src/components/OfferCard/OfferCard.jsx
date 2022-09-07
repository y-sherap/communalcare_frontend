// import axios from 'axios'
// import { useState, useEffect } from 'react'
import './offercard.css'

const OfferCard = ({offer, key, id, removeOffer, index}) => {

  return (
    <div id="offerCard">
      <h2>title: {offer.title}</h2>
      <h4>date: {offer.datePosted}</h4>
      <img src={offer.photo} alt="mountain" />
      <button onClick={() => removeOffer(offer.id)} id="removeOffer">testing delete offer</button>
    </div>
  )
}

export default OfferCard

