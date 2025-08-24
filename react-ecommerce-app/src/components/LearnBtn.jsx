import React from 'react'


function LearnBtn({text,icon}) {
  return (
    <div className="flex justify-center mt-4"> 
      <div className='h-10 w-1/2 flex items-center justify-center bg-yellow-500 text-white gap-3 rounded-lg cursor-pointer hover:bg-yellow-600 transition duration-300'>
       {text}{icon}
       
      </div>
    </div>
  )
}

export default LearnBtn
