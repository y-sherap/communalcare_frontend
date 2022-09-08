import './dashboardrequestcard.css'

const DashboardRequestCard = ({request, index}) => {

  return (
    <div id="requestCard">
      <h2>{request.title}</h2>
      <h4>date: {request.datePosted}</h4>
    </div>
  )
}

export default DashboardRequestCard
