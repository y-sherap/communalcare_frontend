import './home.css'
// import {useState} from 'react'

const Home = () => {
  // const [isHovering, setIsHovering] = useState(false)

  // const handleMouseOver = () => {
  //   setIsHovering(true)
  // }

  // const handleMouseOut = () => {
  //   setIsHovering(false)
  


  return (
    <div id="homeContainer">
      {/* <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut} id="homeImage">
        <img src="https://www.weareplanc.org/app/uploads/2020/04/mutual-aid-logo-620.jpg" alt="picture" />
      </div>
      {isHovering && ( */}
      <div>
        <p>Built with the intention of fostering cooperation and solidarity, communalcare allows members to freely share resources and services with their community. This non-transactional relationship is rooted in the practice of building new social relations that transcend mainstream social and economic paradigms.</p>
      </div>

      <div>
              <img src="https://www.gutenberg.org/files/18913/18913-h/images/img174.jpg" alt="picture" id="homeFlowerImg"/>
              </div>
      {/* )} */}
    </div>
  )

}

export default Home