import './homerequestcard.css'

const HomeRequestCard = ({request}) => {

  return (
    <div id="requestCard">
      <h2>title: {request.condition}</h2>
    </div>
  )
}

export default HomeRequestCard
