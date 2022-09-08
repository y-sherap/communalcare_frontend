import './dashboardrequestcard.css'

const DashboardRequestCard = ({request, index, removeRequest}) => {

  return (
    <div id="requestCard" key={index}>
      <h2>title: {request.title}</h2>
      <h4>date: {request.createdAt}</h4>
      <h4>category: {request.category}</h4>
      <h4>borough: {request.borough}</h4>
      <h4>zipcode: {request.zipcode}</h4>
      <h4>description: {request.description}</h4>
      <button onClick={() => removeRequest(request.id, index)} id="removeRequestButton">testing delete request</button>
    </div>
  )
}

export default DashboardRequestCard
