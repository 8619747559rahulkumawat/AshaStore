import React from 'react'
import './Home.css'
import Slider from  '../Slider/Slider'
import Secure from '../Secure/Secure';
import Reviews from '../Reviews/Reviews'
import InstagramFeed from '../InstagramFeed/InstagramFeed'
import Footer from '../Footer/Footer'
const Home = () => {

  
  return (
    <div>
   <Slider/>
   <Secure/>
   <Reviews/>
   <InstagramFeed/>
<Footer/>
   
      
    </div>
  )
}

export default Home
