import React from 'react';
import bannerImage from '../../assets/banner.png';

const Hero = () => {
  return (
    <div
      className="h-[500px] w-full flex items-center justify-center relative text-white"
      style={{
        backgroundImage: `url(${bannerImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
     
      <div className="absolute inset-0 bg-black/40"></div>

     
      <div className="relative text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Our Store</h1>
        <p className="text-lg md:text-2xl mb-6">Discover the best products at unbeatable prices</p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold">
          Shop Now
        </button>
      </div>
    </div>
  )
}

export default Hero;
