import React from 'react'

const CarouselCard = ({slideNumber}) => {
  return (
     
    <div className='p-2 flex justify-around'>
        <img
            src='https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg'
            alt='newsImage'
            className=' h-auto'
        /> 
        <div className='m-2 w-5/12'>
        <li className='text-xl mt-2'>Hot topic</li>
        <h1 className='font-bold py-2 text-5xl my-4'>Headlines of Some news which is going to be the text</h1>
        <h1 className='text-lg mt-2 mb-6'>Date,Location</h1>
        <button className='px-6 py-3 bg-black text-white rounded-full mb-2'>
            Read More ↗
        </button>
        <h1>{slideNumber}</h1>
        </div>
        </div>
    
  )
}

export default CarouselCard