import HomeOfferCard from '../../components/HomeOfferCard/HomeOfferCard'
import './offerspage.css'
// import { useNavigate } from 'react-router-dom'
import {useState} from 'react'

const OffersPage = ( {offers}) => {
  const [searchValue, setSearchValue] = useState('')
  // let navigate = useNavigate()

  // const showOfferDetails = (offer) => {
  //   navigate(`offers/${offer.id}`)
  // }

  return (
      <div id="offersPage">
        <div id="searchBar">
          <input type="text" placeholder="search" onChange={event => {setSearchValue(event.target.value)}}/>
        </div>
        <h1>style, change yellow background, make images larger</h1>
        {offers.filter((val)=> {
          if(searchValue == "") {
            return val
          } else if (val.title.toLowerCase().includes(searchValue.toLowerCase())) {
            return val
          }
        }).map((offer, index) => (
            <HomeOfferCard 
              offer={offer}
              key={index}
              // showOfferDetails={showOfferDetails}
            />  
          )
        )}   
    </div> 
    )
}

export default OffersPage
