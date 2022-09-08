// import axios from 'axios'
// import { useState, useEffect } from 'react'
import './dashboardoffercard.css'

const DashboardOfferCard = ({offer, key, id, removeOffer, index}) => {

  return (
    <div id="offerCard">
      <h2>{offer.title}</h2>
      <h4>date: {offer.datePosted}</h4>
      <img src={offer.photo} alt="mountain" />
      <button onClick={() => removeOffer(offer.id)} id="removeOffer">testing delete offer</button>
    </div>
  )
}

export default DashboardOfferCard
