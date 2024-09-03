import React, { useState } from 'react'

const Plan = ({price,planType}) => {
    return (
        <div className='p-8 leading-loose mt-2 mb-6  rounded-2xl mx-2'>
            <h1 className='text-xl mb-2'>Standard Plan</h1>
            <h1 className='my-3'> <span className='text-4xl font-bold'>${price}</span>/{planType}</h1>
            <ul >
                <li className='list-disc'>Access All News</li>
                <li className='list-disc'>Latest News Notification</li>
                <li className='list-disc'>Send News Articles</li>
                <li className='list-disc'>Latest Movie Reccomendation</li>
                <li className='list-disc'>Updated News</li>
            </ul>
            <button className='px-6 py-3 bg-gray-600 text-white font-bold text-lg rounded-full w-full mt-6'>
                Subscribe
            </button>
        </div>
    )
}
const Subscribe = () => {
  const [planType,setPlanType] = useState('month');
  const handleOnClickMonth = () => {
        setPlanType('month')
  }
  const handleOnClickQuater = () => {
        setPlanType('quarter')
  }
  const handleOnClickYear = () => {
        setPlanType('year')
  }

  return (
    <div >
        <div className='p-12 w-9/12 mx-auto'>
            <h1 className='text-4xl font-semibold text-center my-6'>Subscribe now for the latest and exclusive information alerts</h1>
            <p className='text-center text-lg text-gray-500 leading-relaxed'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                 when an unknown printer took a galley of type and scrambled it to make a type specimen book. 
                It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
            </p>

            <div className='p-4 flex justify-between w-5/12 mx-auto mt-8'>
                <button className={` ${planType === 'month' ? 'bg-gray-600 text-white p-3 rounded-lg' : ''}`} onClick={handleOnClickMonth}>MONTHLY</button>
                <button className={` ${planType === 'quarter' ? 'bg-gray-600 text-white p-3 rounded-lg' : ''}`} onClick={handleOnClickQuater}>QUARTERLY</button>
                <button className={` ${planType === 'year' ? 'bg-gray-600 text-white p-3 rounded-lg' : ''}`} onClick={handleOnClickYear}>YEARLY</button>
            </div>
        </div >
        <div className='flex justify-between mx-6 mt-6'>
        <div className={` ${planType ==='month' ? 'w-3/12  border-gray-600' : '  border-gray-300 '} shadow-2xl border-4 rounded-2xl mb-8`}><Plan planType={'month'} price={50}/></div>
        <div className={` ${planType ==='quarter' ? 'w-3/12  border-gray-600' : '  border-gray-300 '} shadow-2xl border-4 rounded-2xl mb-8`}><Plan planType={'quarter'} price={75}/></div>
        <div className={` ${planType ==='year' ? 'w-3/12  border-gray-600' : '  border-gray-300 '} shadow-2xl border-4 rounded-2xl mb-8`}><Plan planType={'year'} price={100}/></div>
        </div>
        
    </div>
  )
}

export default Subscribe