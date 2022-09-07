import OfferCard from '../../components/OfferCard/OfferCard'
import Client from '../../services/api'
import { useState} from 'react'

const OfferPage = ( {offers, user, authenticated}) => {

  const [userOffers, setUserOffers] = useState([])
  const [datePosted, setDatePosted] = useState('')
  const [photo, setPhoto] = useState('')
  const [title, setTitle] = useState('')
  const [category, setCategory] = useState('')
  const [condition, setCondition] = useState('')
  const [borough, setBorough] = useState('')
  const [zipcode, setZipcode] = useState('')
  const [description, setDescription] = useState('')

  const addOffer = async (e) => {
    const res = await Client.post(`http://localhost:3001/offer/${user.id}`, {
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
    setUserOffers(tempArray)
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




  const removeOffer = async (id, index) => {
    await Client.delete(`http://localhost:3001/offer/${id}`)
    let tempArray = [...userOffers]
    tempArray.splice(index, 1)
    setUserOffers(tempArray)
    window.location.reload(false)
  }

  return (user, authenticated) ? (
    <div>
      <div className="formContainer">
        <div id = "Form">
        <h3 id="offerPageTitle">offers</h3>
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
                  />
                </div>
                <div>
                  <input className='offerFromInput'
                    type="text"
                    value={category}
                    onChange={changeCategory}
                    name={'category'}
                    placeholder={'category'}
                    id="createOfferCategory"
                  />
                </div>
                <div>
                  <input className='offerFromInput'
                    type="text"
                    value={condition}
                    onChange={changeCondition}
                    name={'condition'}
                    placeholder={'condition'}
                    id="createOfferCondition"
                  />
                </div>
                <div>
                  <input className='offerFromInput'
                    type="text"
                    value={borough}
                    onChange={changeBorough}
                    name={'borough'}
                    placeholder={'borough'}
                    id="createOfferBorough"
                  />
                </div>
                <div>
                  <input className='offerFromInput'
                    type="text"
                    value={zipcode}
                    onChange={changeZipcode}
                    name={'zipcode'}
                    placeholder={'zipcode'}
                    id="createOfferZipcode"
                  />
                </div>
                <div>
                  <input className='offerFromInput'
                  type="text"
                    value={description}
                    onChange={changeDescription}
                    name={'description'}
                    placeholder={'description'}
                    id="createOfferDescription"
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
        {offers.map((offer, index) => (
            <OfferCard 
              offer={offer}
              index={index}
              removeOffer={removeOffer}
            />  
          )
        )}   
    </div>
  ) : 
  <div>
    <h1>testing ternary</h1>
  </div>
}

export default OfferPage
