import React from 'react'
import { Link } from 'react-router-dom'

const AlreadyRegisteredComponent = ({setAlreadyRegistered}) => {
  const handleOnClick =() => {
    setAlreadyRegistered(false)
  }
  return (
    <div className="z-50 fixed inset-0 flex items-center justify-center bg-black bg-opacity-30">
      <div className="bg-white p-6 rounded-lg shadow-2xl w-6/12 text-center">
        <h2 class="text-2xl font-bold mb-4 text-center">This email id is Already Registered.</h2>
        <p class="mb-4 text-center">Click below to log in now Or <Link  to={'/register'}><span onClick={handleOnClick} className='text-lg font-semibold text-gray-600'>Register</span></Link> with new Email id.</p>
        <div class="mb-4 text-center">
          <svg class="inline-block animate-ping h-6 w-6 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M9 13l6 6 6-6" />
          </svg>
        </div>
      

        <button onClick={handleOnClick} className="inline-flex items-center px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition-colors duration-300">
          <Link to={'/login'}>Log In Now</Link>
        </button>
      </div>
    </div>
  )
}

export default AlreadyRegisteredComponent