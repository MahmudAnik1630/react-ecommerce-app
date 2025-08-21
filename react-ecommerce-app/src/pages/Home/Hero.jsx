import React from 'react';
import bannerImage from '../../assets/banner.png';
import { FaSearch } from "react-icons/fa";
import ToolTip from '../../components/ToolTip';



const Hero = () => {
  return (
   <div
  className="h-[650px] w-full flex items-center justify-center relative text-white"
  style={{
    backgroundImage: `url(${bannerImage})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  }}
>
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black/40 z-0"></div>

  {/* Hero content */}
  <div className="relative text-center px-2 -mt-[150px] z-10">
    <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Our Store</h1>
    <p className="text-lg md:text-2xl mb-6">Discover the best products at unbeatable prices</p>
    
    <div className="relative w-full md:w-1/2 inline-block mx-auto">
     
      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white text-lg cursor-pointer">
        <FaSearch />
      </div>

      
      <input
        type="text"
        placeholder="Search for products.."
        className="pl-10 pr-3 py-2 w-full rounded-lg bg-black/20 text-white placeholder-gray-400 border border-gray-300 focus:outline-none focus:border-gray-500 transition duration-300"
      />
    </div>
  </div>

  
  <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-white/30 to-transparent z-0"></div>



  <div className='absolute inset-0'>
    <ToolTip  position ="bottom-left"/>
    <ToolTip  position ="bottom-right"/>
  </div>
</div>

  )
}

export default Hero;
