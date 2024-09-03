import React from 'react'
import NewsCard from './NewsCard'
import RegisterBlock from './RegisterBlock'

const Register = () => {
  return (
    <div className=''>
        <h1 className='text-center text-5xl m-8 font-bold'>Let's join as NewsHub friends</h1>
        <p className='mx-auto w-4/12 text-gray-500 mt-4 mb-12'>Under the shimmering moonlight, the old oak tree stood tall, casting long shadows on the quiet meadow.
            The gentle breeze whispered secrets through the leaves, creating a melody only nature could understand. 
        </p>

        <RegisterBlock/>

        <div className='mt-8 mb-2 mx-6 flex justify-between '>
            <span className='text-3xl font-semibold mt-1'>Hot Topic News</span>
            <button className='bg-gray-600 px-6 py-2 rounded-full text-white'>View All</button>
        </div>
        
        <hr className='w-auto h-0.5 bg-gray-600 mx-6 my-4'></hr>

        <div className='flex justify-between'>
            <NewsCard/>
            <NewsCard/>
            <NewsCard/>
            <NewsCard/>
        </div>
    </div>
  )
}

export default Register