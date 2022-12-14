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
        <p>Last Updated: {request.updatedAt}</p>
      </div>
      <div id="buttondashboardrequest">
      <button onClick={() => removeRequest(request.id, index)} id="removeRequestButton">Delete Request</button>
      </div>
    </div>
  )
}

export default DashboardRequestCard
