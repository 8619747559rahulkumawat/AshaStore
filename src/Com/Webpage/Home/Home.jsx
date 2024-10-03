import React from 'react'
import './Home.css'
import FilterComponent from '../FilterComponent/FilterComponent'
import Slider from  '../Slider/Slider'
import Secure from '../Secure/Secure';
import Reviews from '../Reviews/Reviews'
import InstagramFeed from '../InstagramFeed/InstagramFeed'
import Footer from '../Footer/Footer'

import Herader from '../Header/Herader'

const Home = () => {

  
  return (
    <div>
          <Herader/>
   <Slider/>
   <FilterComponent />
   <Secure/>
   <Reviews/>
   <InstagramFeed/>
<Footer/>
   
 
    </div>
  )
}

export default Home
