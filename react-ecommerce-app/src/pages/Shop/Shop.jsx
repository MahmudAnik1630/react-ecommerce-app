import React from 'react'
import BannerImg from '../../assets/banner.png' 
import Products from './Products'

function Shop() {
  return (
    <div className='min-h-screen '>

      <div style={{backgroundImage: `url(${BannerImg})`}} className='h-[300px] bg-cover bg-center flex items-center justify-center'>

      <h1 className='text-4xl text-white font-bold'>Shop Our Products</h1>
      </div>

      <Products Headline='Whats Your Choice' />
    </div>
  )
}

export default Shop