import './dashboardrequestcard.css'

const DashboardRequestCard = ({request, index}) => {

  return (
    <div id="requestCard">
      <h2>title: {request.title}</h2>
      <h4>date: {request.createdAt}</h4>
      <h4>category: {request.category}</h4>
      <h4>borough: {request.borough}</h4>
      <h4>zipcode: {request.zipcode}</h4>
      <h4>description: {request.description}</h4>
    </div>
  )
}

export default DashboardRequestCard
