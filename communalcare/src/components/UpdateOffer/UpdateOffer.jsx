import Client from '../../services/api'
import { useNavigate, useParams } from "react-router-dom"
import { useState, useEffect } from "react"

const UpdateOffer = ({ }) => {

  let navigate = useNavigate()
  let { id } = useParams()

  let initialFormState = {
    photo: "",
    title: "", 
    category: "", 
    condition: "", 
    borough: "", 
    zipcode: "", 
    description: ""
  }
  const [formValues, setFormValues] = useState(initialFormState)

  const getOffer = async () => {
    let response = await Client.get(`http://localhost:3001/offer/get-offer/${id}`)
    console.log(id)
    setFormValues(response.data.offers)
  }

  useEffect(() => {
    setFormValues(initialFormState)
    getOffer()
  }, [])

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    await Client.put(`http://localhost:3001/offer/${id}`, formValues)
    setFormValues(initialFormState)
    navigate(`/dashboard`)
  }

  return (
    <div className="editPost">
      <h1>change heading for form</h1>
      <form onSubmit={handleSubmit}>

                  <div id = "offerInner">
                    <div>
                      <input className='offerFromInput'
                        type="text"
                        value={formValues.photo}
                        onChange={handleChange}
                        name={'photo'}
                        placeholder={'Photo'}
                        id="createOfferPhoto"
                      />
                    </div>
                    <div>
                      <input className='offerFromInput'
                        type="text"
                        value={formValues.title}
                        onChange={handleChange}
                        name={'title'}
                        placeholder={'title'}
                        id="createOfferTitle"
                      />
                    </div>
                    <div>
                      <select onChange={handleChange} value={formValues.category} >
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
                    <select className='offerFromInput' onChange={handleChange} value={formValues.condition} >
                      <option hidden>Condition</option>
                      <option value="new">New</option>
                      <option value="used">Used - like new</option>
                      <option value="used">Used - good</option>
                      <option value="used">Used - fair</option>
                      </select>
                    </div>
                    <div>
                    <select className='offerFromInput' onChange={handleChange} value={formValues.borough} >
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
                        value={formValues.zipcode}
                        onChange={handleChange}
                        name={'zipcode'}
                        placeholder={'zipcode'}
                        id="createOfferZipcode"
                      />
                    </div>
                    <div>
                      <textarea className='offerFromInput'
                        type="text"
                        value={formValues.description}
                        onChange={handleChange}
                        name={'description'}
                        placeholder={'description'}
                        id="createOfferDescription"
                      />
                    </div>
                    <div>
                    <button id="form-submit">Submit</button>

                    </div>
    </div>
    </form>
    </div>
  )

}

export default UpdateOffer