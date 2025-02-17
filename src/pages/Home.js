import React from 'react'
import Slider from '../components/Slider'
import LatestProducts from '../components/LatestProducts'
import WhyChooseUs from '../components/WhyChooseUs'
import ContactUs from '../components/ContactUs'



function Home() {
  return (
    <div>
         <div>
      <Slider />
      <h1 className="text-center text-4xl font-extrabold mt-6 text-gray-800 tracking-wide uppercase">
  Welcome to <span className="text-blue-400" >Our Shop</span>
</h1>


      <LatestProducts />

      <WhyChooseUs />
      <ContactUs />
    </div>
    </div>
    
  )
}

export default Home
