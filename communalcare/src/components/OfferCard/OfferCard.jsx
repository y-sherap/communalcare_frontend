import axios from 'axios'
import { useState, useEffect } from 'react'
import './offercard.css'

const OfferCard = ({offer, key, id, removeOffer, index}) => {

  return (
    <div id="offerCard">
      <h2>title: {offer.title}</h2>
      <button onClick={() => removeOffer(offer.id)} id="removeOffer">testing delete offer</button>
    </div>
  )
}

export default OfferCard

