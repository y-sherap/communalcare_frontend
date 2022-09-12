import './homerequestcard.css'

const HomeRequestCard = ({request, index}) => {

  return (
    <div id="requestCard" key={index}>
      <h2>{request.title}</h2>
      <h2>Category: {request.category}</h2>
      <h2>Borough: {request.borough}</h2>
      <h2>Zipcode: {request.zipcode}</h2>
      <h2>Description: {request.description}</h2>
    </div>
  )
}

export default HomeRequestCard
