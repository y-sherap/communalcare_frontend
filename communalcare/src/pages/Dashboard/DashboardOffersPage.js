import DashboardOfferCard from '../../components/DashboardOfferCard/DashboardOfferCard'
import DashboardRequestCard from '../../components/DashboardRequestCard/DashboardRequestCard'
// import UpdateOffer from '../../components/UpdateOffer/UpdateOffer'
import Client from '../../services/api'
import { useState, useEffect} from 'react'
import './dashboardofferspage.css'

const DashboardOfferPage = ( {user, authenticated}) => {

  const [offers, setOffers] = useState([])
  const [datePosted, setDatePosted] = useState('')
  const [photo, setPhoto] = useState('')
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [condition, setCondition] = useState('')
  const [borough, setBorough] = useState('')
  const [zipcode, setZipcode] = useState('')
  const [description, setDescription] = useState('')

  const [requests, setRequests] = useState([])
  const [requestDatePosted, setRequestDatePosted] = useState('')
  const [requestTitle, setRequestTitle] = useState('')
  const [requestCategory, setRequestCategory] = useState('')
  const [requestBorough, setRequestBorough] = useState('')
  const [requestZipcode, setRequestZipcode] = useState('')
  const [requestDescription, setRequestDescription] = useState('')

  const BASE_URL = 'http://localhost:3001'

  const showUserOffers = async () => {
    const res = await Client.get(`${BASE_URL}/offer/${user.id}`)
    setOffers(res.data)
    console.log(res.data)
  }

  const showUserRequests = async () => {
    const res = await Client.get(`${BASE_URL}/request/${user.id}`)
    setRequests(res.data)
    console.log(res.data)
  }

    useEffect(() => {
        showUserOffers() 
        showUserRequests()
    },
     [user]) 

  const addOffer = async (e) => {
    const res = await Client.post(`${BASE_URL}/offer/${user.id}`, {
      datePosted: datePosted,
      photo: photo,
      title: title,
      category: category,
      condition: condition,
      borough: borough,
      zipcode: zipcode,
      description: description
    })
    setDatePosted ('')
    setPhoto ('')
    setTitle ('')
    setCategory ('')
    setCondition ('')
    setBorough ('')
    setZipcode ('')
    setDescription ('')
    let tempArray = [...offers]
    let tempObj = { ...res.data }
    tempArray.push(tempObj)
    setOffers(tempArray)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    addOffer(e)
    window.location.reload(false)
  }

  const changeDatePosted = (event) => {
    let e = event.target.value
    setDatePosted(e)
  }

    const changePhoto = (event) => {
    let e = event.target.value
    setPhoto(e)
  }

  const changeTitle = (event) => {
    let e = event.target.value
    setTitle(e)
  }

  const changeCategory = (event) => {
    let e = event.target.value
    setCategory(e)
  }

  const changeCondition = (event) => {
    let e = event.target.value
    setCondition(e)
  }

  const changeBorough = (event) => {
    let e = event.target.value
    setBorough(e)
  }

  const changeZipcode = (event) => {
    let e = event.target.value
    setZipcode(e)
  }

  const changeDescription = (event) => {
    let e = event.target.value
    setDescription(e)
  }

  const removeOffer = async (id) => {
    await Client.delete(`${BASE_URL}/offer/${id}`)
    showUserOffers()
  }


  const addRequest = async (e) => {
    const res = await Client.post(`${BASE_URL}/request/${user.id}`, {
      datePosted: requestDatePosted,
      title: requestTitle,
      category: requestCategory,
      borough: requestBorough,
      zipcode: requestZipcode,
      description: requestDescription
    })
    setRequestDatePosted ('')
    setRequestTitle ('')
    setRequestCategory ('')
    setRequestBorough ('')
    setRequestZipcode ('')
    setRequestDescription ('')
    let tempRequestArray = [...requests]
    let tempRequestObj = { ...res.data }
    tempRequestArray.push(tempRequestObj)
    setRequests(tempRequestArray)
  }


  const changeRequestDatePosted = (event) => {
    let e = event.target.value
    setRequestDatePosted(e)
  }

  const changeRequestTitle = (event) => {
    let e = event.target.value
    setRequestTitle(e)
  }

  const changeRequestCategory = (event) => {
    let e = event.target.value
    setRequestCategory(e)
  }

  const changeRequestBorough = (event) => {
    let e = event.target.value
    setRequestBorough(e)
  }

  const changeRequestZipcode = (event) => {
    let e = event.target.value
    setRequestZipcode(e)
  }

  const changeRequestDescription = (event) => {
    let e = event.target.value
    setRequestDescription(e)
  }

  const requestHandleSubmit = (e) => {
    e.preventDefault()
    addRequest(e)
    window.location.reload(false)
  }

  const removeRequest = async (id) => {
    await Client.delete(`${BASE_URL}/request/${id}`)
    showUserRequests()
  }

  return (user, authenticated) ? (
    <div id="dashboardPage">
      <div id="dashboardPageTitle">
        <p>Dashboard</p>
      </div>
      <div id="dashboardPageForms">
        <div className="formContainer">
          <div id = "Form">
            <h3 id="offerPageTitle">offer form</h3>
              <form onSubmit={handleSubmit}>
                <div className="createOfferForm">
                  <div id = "offerInner">
                    <div>
                      <input className='offerFromInput'
                        type="date"
                        value={datePosted}
                        onChange={changeDatePosted}
                        name={'name'}
                        id="createOfferName"
                        required
                      />
                    </div>
                    <div>
                      <input className='offerFromInput'
                        type="text"
                        value={photo}
                        onChange={changePhoto}
                        name={'photo'}
                        placeholder={'Photo'}
                        id="createOfferPhoto"
                        required
                      />
                    </div>
                    <div>
                      <input className='offerFromInput'
                        type="text"
                        value={title}
                        onChange={changeTitle}
                        name={'title'}
                        placeholder={'title'}
                        id="createOfferTitle"
                        required
                      />
                    </div>
                    <div>
                      <select onChange={changeCategory} value={category}   required >
                      <option hidden>Category</option>
                      <option value="antiques">Antiques</option>
                      <option value="appliances">Appliances</option>
                      <option value="art">Arts & Crafts</option>
                      <option value="auto">Auto Parts</option>
                      <option value="baby">Baby products</option>
                      <option value="beauty">Health & Beauty</option>
                      <option value="bicycle">Bicycles & Bicycle Parts</option>
                      <option value="books">Books & Magazines</option>
                      <option value="music">CDs, DVDs & VHS</option>
                      <option value="apparel">Clothing, shoes & accessories</option>
                      <option value="electronics">Electronics</option>
                      <option value="furniture">Furniture</option>
                      <option value="garden">Garden Supplies</option>
                      <option value="house">Household Supplies</option>
                      <option value="jewelry">Jewelry</option>
                      <option value="kitchen">Kitchen Supplies</option>
                      <option value="lighting">Lighting</option>
                      <option value="music">Musical Instruments</option>
                      <option value="toys">Toys & Games</option>
                      </select>
                    </div>
                    <div>
                    <select className='offerFromInput' onChange={changeCondition}   required value={condition} >
                      <option hidden>Condition</option>
                      <option value="new">New</option>
                      <option value="used">Used - like new</option>
                      <option value="used">Used - good</option>
                      <option value="used">Used - fair</option>
                      </select>
                    </div>
                    <div>
                    <select className='offerFromInput' onChange={changeBorough}   required value={borough} >
                      <option hidden>Borough</option>
                      <option value="bronx">The Bronx</option>
                      <option value="brooklyn">Brooklyn</option>
                      <option value="manhattan">Manhattan</option>
                      <option value="queens">Queens</option>
                      <option value="statenIsland">Staten Island</option>
                      </select>
                    </div>
                    <div>
                      <input className='offerFromInput'
                        type="number"
                        value={zipcode}
                        onChange={changeZipcode}
                        name={'zipcode'}
                        placeholder={'zipcode'}
                        id="createOfferZipcode"
                        required
                      />
                    </div>
                    <div>
                      <textarea className='offerFromInput'
                        type="text"
                        value={description}
                        onChange={changeDescription}
                        name={'description'}
                        placeholder={'description'}
                        id="createOfferDescription"
                        required
                      />
                    </div>
                    <div>
                    <button id="form-submit" disabled={!title}>Submit</button>
                    </div>
                  </div>
                </div>
              </form>
          </div>
        </div>
        <div className="formContainer">
          <div id = "RequestForm">
            <h3 id="requestFormTitle">request form</h3>
              <form onSubmit={requestHandleSubmit}>
                <div className="createRequestForm">
                  <div id = "requestInner">
                    <div>
                      <input className='requestFormInput'
                        type="date"
                        value={requestDatePosted}
                        onChange={changeRequestDatePosted}
                        name={'name'}
                        id="createRequestDate"
                      />
                    </div>
                    <div>
                      <input className='requestFormInput'
                        type="text"
                        value={requestTitle}
                        onChange={changeRequestTitle}
                        name={'requestTitle'}
                        placeholder={'Title'}
                        id="createRequestTitle"
                      />
                    </div>
                    <div>
                      <select onChange={changeRequestCategory} value={requestCategory} >
                      <option hidden>Category</option>
                      <option value="antiques">Antiques</option>
                      <option value="appliances">Appliances</option>
                      <option value="art">Arts & Crafts</option>
                      <option value="auto">Auto Parts</option>
                      <option value="baby">Baby products</option>
                      <option value="beauty">Health & Beauty</option>
                      <option value="bicycle">Bicycles & Bicycle Parts</option>
                      <option value="books">Books & Magazines</option>
                      <option value="music">CDs, DVDs & VHS</option>
                      <option value="apparel">Clothing, shoes & accessories</option>
                      <option value="electronics">Electronics</option>
                      <option value="furniture">Furniture</option>
                      <option value="garden">Garden Supplies</option>
                      <option value="house">Household Supplies</option>
                      <option value="jewelry">Jewelry</option>
                      <option value="kitchen">Kitchen Supplies</option>
                      <option value="lighting">Lighting</option>
                      <option value="music">Musical Instruments</option>
                      <option value="toys">Toys & Games</option>
                      </select>
                    </div>
                    <div>
                    <select className='requestFormInput' onChange={changeRequestBorough} value={requestBorough} >
                      <option hidden>Borough</option>
                      <option value="bronx">The Bronx</option>
                      <option value="brooklyn">Brooklyn</option>
                      <option value="manhattan">Manhattan</option>
                      <option value="queens">Queens</option>
                      <option value="statenIsland">Staten Island</option>
                      </select>
                    </div>
                    <div>
                      <input className='requestFormInput'
                        type="number"
                        value={requestZipcode}
                        onChange={changeRequestZipcode}
                        name={'requestZipcode'}
                        placeholder={'zipcode'}
                        id="createRequestZipcode"
                      />
                    </div>
                    <div>
                      <textarea className='requestFormInput'
                        type="text"
                        value={requestDescription}
                        onChange={changeRequestDescription}
                        name={'requestDescription'}
                        placeholder={'description'}
                        id="RequestDescription"
                      />
                    </div>
                    <div>
                    <button>Submit</button>
                    </div>
                  </div>
                </div>
              </form>
          </div>
        </div>
      </div>
      <div id="dashboardOffersList">
        <div id="dashboardOffersListTitle">
          <h1>offers</h1>
        </div>
        <div id="dashboardOfferCards">
          {offers.map((offer, index) => (
              <DashboardOfferCard 
                offer={offer}
                key={index}
                removeOffer={removeOffer}
              />  
            )
          )}
          </div>
          {/* <div id="dashboardOfferCards">
          {offers.map((offer, index) => (
              <UpdateOffer
                offer={offer}
                key={index}
              />  
            )
          )}
          </div> */}
      </div>
      <div id="dashboardRequestsList">
        <div id="dashboardRequestsListTitle">
          <h1>requests</h1>
        </div>
        <div id="dashboardRequestCards">
          {requests.map((request, index) => (
              <DashboardRequestCard 
                request={request}
                key={index}
                removeRequest={removeRequest}
              />  
            )
          )}
        </div>
        </div>
        {/* <div id="dashboardOfferCards">
          {offers.map((offer, index) => (
              <UpdateOffer 
                offer={offer}
                key={index}
              />  
            )
          )}
          </div> */}
      </div>     
  ) : <span></span>

}

export default DashboardOfferPage