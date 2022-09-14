import './dashboardrequestcard.css'

const DashboardRequestCard = ({request, index, removeRequest}) => {

  return (
    <div id="dashboardRequestCard" key={index}>
      <div id="dashboardRequestTitle">
        <p id="dashboardRequestTitle">{request.title}</p>
      </div>
      <div id="dashboardRequestInnerCard">
        <p>Category: {request.category}</p>
        <p>Borough: {request.borough}</p>
        <p>Zipcode: {request.zipcode}</p>
        <p>Description: {request.description}</p>
      </div>
      <button onClick={() => removeRequest(request.id, index)} id="removeRequestButton">Delete Request</button>
    </div>
  )
}

export default DashboardRequestCard
