import './homerequestcard.css'

const HomeRequestCard = ({request, index}) => {

  return (
    <div id="homeRequestCard" key={index}>
      <div id="homeRequestTitle">
        <p id="homeRequestTitle">{request.title}</p>
      </div>
      <div id="homeRequestInnerCard">
        <p>Category: {request.category}</p>
     
      
        <p>Borough: {request.borough}</p>
 
  
        <p>Zipcode: {request.zipcode}</p>
    
    
        <p>Description: {request.description}</p>
      </div>
    </div>
  )
}

export default HomeRequestCard
