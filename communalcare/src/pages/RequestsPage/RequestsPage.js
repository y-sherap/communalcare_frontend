import { Chart as ChartJS, BarElement, CategoryScale, LinearScale} from 'chart.js'
import { Bar } from 'react-chartjs-2'
import { useState, useEffect } from 'react'
import axios from 'axios'
import './requestpage.css'
import HomeRequestCard from '../../components/HomeRequestCard/HomeRequestCard'

ChartJS.register(
  BarElement,
  CategoryScale,
  LinearScale
)

const RequestsPage = ( ) => {
  const [chart, setChart]  = useState([])

  useEffect(() => {
    const getRequests = async () => {
      const res = await axios.get('http://localhost:3001/request/get_all')
      setChart(res.data)
      console.log(res.data)
  }
  getRequests()
  }, [])

  // const requests 

  console.log("chart", chart)

const data = {
  labels: [
    'Antiques', 
    'Appliances', 
    'Arts & Crafts', 
    'Auto Parts', 
    'Baby products', 
    'Health & Beauty', 
    'Bicycles & Bicycle Parts', 
    'Books & Magazines',
    'CDs, DVDs & VHS',
    'Clothing, shoes & accessories',
    'Electronics',
    'Furniture',
    'Garden Supplies',
    'Household Supplies',
    'Jewelry',
    'Kitchen Supplies',
    'Lighting',
    'Musical Instruments',
    'Toys & Games'
  ],
  datasets: [{
      label: 'Count of Requests',
      data: chart?.requests?.map(x => x.category),
      backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)'
      ],
      borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)'
      ],
      borderWidth: 1
  }]
}

const options =  {
  maintainAspectRatio: false,
  scales: {
    yAxes: [{
      ticks: {
        stepSize: 1
      }
    }]
  },
  legend: {
    labels: {
      fontSize: 20
    }
  }
  }

  return (
    <div id="requestPage">
    <h1 id="requestPageTitle">Community Requests</h1>
    <div id="barChart">
      <Bar 
        data={data}
        options={options}
        height={400}      
      />
    </div> 
      <div id="homeRequestList">
        {chart.map((request, index) => (
            <HomeRequestCard 
              request={request}
              key={index}
            />  
          )
        )}   
      </div> 
    </div>
    )
}

export default RequestsPage