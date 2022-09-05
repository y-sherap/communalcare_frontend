// const OfferCard = () => {

//   return (
//     <div>
//       <h1>offers</h1>
//     </div>
//   )
// }

// export default OfferCard


const OfferCard = ({offer, index}) => {

  return (
    <div>
      <h2>title: {offer.title}</h2>
      <h3>condition: {offer.condition}</h3>
      <h3>photo: {offer.photo}</h3>
    </div>
  )
}

export default OfferCard

