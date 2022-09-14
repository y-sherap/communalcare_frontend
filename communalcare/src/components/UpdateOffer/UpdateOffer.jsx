import Client from '../../services/api'
import { useNavigate, useParams } from "react-router-dom"
import { useState, useEffect } from "react"
import './updateOffer.css'

const UpdateOffer = ( { user }) => {

  let navigate = useNavigate()
  let { id } = useParams()
    
  const initialState = {
    datePosted: "",
    photo: "",
    title: "", 
    category: "", 
    condition: "", 
    borough: "", 
    zipcode: "", 
    description: ""
  }

  const [toBeUpdated, setToBeUpdated] = useState(initialState)
  
  const getOffer = async () => {
    let response = await Client.get(`/offer/get-offer/${id}`)
    console.log(id)
    setToBeUpdated(response.data.offer)
  }


  useEffect(() => {
    setToBeUpdated(initialState)
    getOffer()
  }, [user])


  const handleChange = (e) => {
    setToBeUpdated({ ...toBeUpdated, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await Client.put(`/offer/${id}`, toBeUpdated)
    setToBeUpdated(initialState)
    navigate(`/dashboard`)
  }


  return (
    <div className="editPost">
      <form onSubmit={handleSubmit} id="updateForm">

                  <div id = "offerFormUpdate">
                  <h1 id="updateOfferFormTitle">form heading. style page and form</h1>
                    <div>
                      <input className='offerFromInput'
                        type="date"
                        // value={formValues.datePosted}
                        onChange={handleChange}
                        name="datePosted"
                        id="updateOffer"
                        required
                      />
                    </div>
                    <div>
                      <input className='offerFromInput'
                        type="text"
                        // value={formValues.photo}
                        onChange={handleChange}
                        name="photo"
                        placeholder={'Photo'}
                        id="updateOffer"
                      />
                    </div>
                    <div>
                      <input className='offerFromInput'
                        type="text"
                        // value={formValues.title}
                        onChange={handleChange}
                        name="title"
                        placeholder={'title'}
                        id="updateOffer"
                      />
                    </div>
                    <div>
                      <select onChange={handleChange}  name="category" id="updateOffer">
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
                      <option value="music">Musical Instruments</option>
                      <option value="toys">Toys & Games</option>
                      </select>
                    </div>
                    <div>
                    <select className='offerFromInput' onChange={handleChange} name="condition"  id="updateOffer" >
                      <option hidden>Condition</option>
                      <option value="new">New</option>
                      <option value="used">Used - like new</option>
                      <option value="used">Used - good</option>
                      <option value="used">Used - fair</option>
                      </select>
                    </div>
                    <div>
                    <select className='offerFromInput' onChange={handleChange} name="borough" id="updateOffer"  >
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
                        // value={formValues.zipcode}
                        onChange={handleChange}
                        name="zipcode"
                        placeholder={'zipcode'}
                        id="updateOffer"
                      />
                    </div>
                    <div>
                      <input className='offerFromInput'
                        type="text"
                        // value={formValues.description}
                        onChange={handleChange}
                        name="description"
                        placeholder={'description'}
                        id="updateOfferDescriptionForm"
                      />
                    </div>
                    <div>
                    <button id="updateFormButton">Update</button>

                    </div>
    </div>
    </form>
    </div>
  )
}

export default UpdateOffer