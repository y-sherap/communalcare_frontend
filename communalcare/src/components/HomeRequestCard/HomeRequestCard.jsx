import './homerequestcard.css'

const HomeRequestCard = ({request}) => {

  return (
    <div id="requestCard">
      <h2>title: {request.title}</h2>
    </div>
  )
}

export default HomeRequestCard
