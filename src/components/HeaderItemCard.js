import React from 'react'
import NewsCard from './NewsCard';

const HeaderItemCard = ({heading}) => {
  
    
  const arr = [1,2,3,4];
  return (
    <div className='my-16'>
        <div className='flex justify-between mx-2 mt-4 mb-4'>
            <h1 className='text-5xl font-semibold'>{heading}</h1>
            <button className='px-6 py-3 bg-gray-700 text-white rounded-full mb-2'>
            View All ↗
            </button>
        </div>
        <hr className='h-0.5 bg-black mb-4 mx-2' ></hr>
        <div className='flex justify-center'>
            {arr.map((item,index) => <NewsCard key={index} cardNumber={item}/>)}
        </div>
    </div>
  )
}

export default HeaderItemCard