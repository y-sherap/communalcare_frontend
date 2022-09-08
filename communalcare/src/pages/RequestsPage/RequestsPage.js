import HomeRequestCard from '../../components/HomeRequestCard/HomeRequestCard'

const RequestsPage = ( {requests}) => {

  return (
      <div>
        {requests.map((request, index) => (
            <HomeRequestCard 
              request={request}
              key={index}
            />  
          )
        )}   
    </div> 
    )
}


export default RequestsPage
