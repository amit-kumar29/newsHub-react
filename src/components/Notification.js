import React from 'react'
import { Link } from 'react-router-dom'

const Notification = () => {
  return (
    <div className='p-12 rounded-2xl bg-gray-600  text-white m-12 text-center'>
        <h1 className='p-4 text-5xl font-bold w-8/12 mx-auto text-center leading-normal'>Get the Latest Notifications and Info from Us</h1>
        <p className='w-7/12 mx-auto text-center leading-relaxed m-4'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, 
            when an unknown printer took a galley of type and scrambled.
        </p>
        <button className='px-6 py-3 bg-white text-gray-600 font-bold text-lg rounded-full m-4 '>
        <Link to ='/subscribe'> Subscribe Now ↗</Link>
      </button>
    </div>
  )
}

export default Notification