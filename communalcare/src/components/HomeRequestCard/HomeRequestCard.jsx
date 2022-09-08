import './homerequestcard.css'

const HomeRequestCard = ({request, index}) => {

  return (
    <div id="requestCard" key={index}>
      <h2>title: {request.condition}</h2>
    </div>
  )
}

export default HomeRequestCard
