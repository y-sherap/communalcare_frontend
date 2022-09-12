import HomeOfferCard from '../../components/HomeOfferCard/HomeOfferCard'
import './offerspage.css'
import {useState} from 'react'

const OffersPage = ( {offers}) => {
  const [searchValue, setSearchValue] = useState('')

  return (
      <div id="offersPage">
        <div id="offerPageHeader">
          <div id="searchBar">
            <input type="text" placeholder="search" onChange={event => {setSearchValue(event.target.value)}}/>
          </div>
          <div id="homeOfferPageTitle">
            <p>Available Community Resources</p>
          </div>
        </div>
        <div id="homeOfferList"> 
          {offers.filter((val)=> {
            if(searchValue === "") {
              return val
            } else if ((val.title.toLowerCase() || val.category.toLowerCase()).includes(searchValue.toLowerCase())) {
              return val
            }
          }).map((offer, index) => (
              <HomeOfferCard 
                offer={offer}
                key={index}
              />  
            )
          )}   
        </div>
    </div> 
    )
}

export default OffersPage
