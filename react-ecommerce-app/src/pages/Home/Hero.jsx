import React from 'react';
import bannerImage from '../../assets/banner.png';
import { FaSearch } from "react-icons/fa";

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
     
      <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-white text-lg pointer-events-none">
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


{/* ToolTip  */}
  <div className='absolute bottom-[100px] left-16 group'>

    <button className='relative p-4 bg-white/30 rounded-full shadow-lg border border-1 bg-white hover:shadow-xl transition duration-300'>

    <div className='absolute -top-10 left-1/2 transform -translate-x-1/2  text-white text-sm px-3 py-1 rounded-lg opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center bg-white/30 gap-1.5'>
        <div className='size-5 bg-red-700 border border-white rounded-full'/>
        <div className='size-5 bg-green-700 border border-white rounded-full'/>
        <div className='size-5 bg-blue-700 border border-white rounded-full'/>

        <div classname='' />
        


    </div>

    </button>

  </div>
</div>

  )
}

export default Hero;
