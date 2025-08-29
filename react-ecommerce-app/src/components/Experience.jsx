import React from 'react'
import exp from '../assets/expricences.png'

function Experience() {
  return (
    <div className='w-full flex flex-col md:flex-row items-center justify-center gap-10 px-6 md:px-16 lg:px-32 my-16'>
      
     
      <div className='flex-shrink-0'>
        <img src={exp} alt="Experience" className='w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 object-contain drop-shadow-lg hover:scale-105 transition-transform duration-300' 
        />
      </div>

     
      <div className='text-center md:text-left max-w-xl'>
        <h1 className='text-3xl md:text-4xl font-bold text-gray-800 mb-4'>
          Experience
        </h1>
        <p className='text-gray-600 text-base md:text-lg leading-relaxed mb-6'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. 
          Ea at ipsa dolorem omnis aliquam repellat, dignissimos magni 
          exercitationem nihil tempore.
        </p>

       
        <button className='px-6 py-3 bg-yellow-500 text-white font-semibold rounded-xl shadow-md hover:bg-yellow-600 hover:scale-105 transition duration-300'>
          Read More </button>
      </div>
    </div>
  )
}

export default Experience
