import React from 'react'
import { Link } from 'react-router-dom'

const LoginBlock = () => {
  return (
    <div className='border-2 border-black p-16 w-full ml-18 mt-8 mr-6'>
        <h1 className='text-center text-3xl font-bold mb-10'>NewsHub</h1>
        <form>
            <div className='my-2'>
                <label>Email</label>
                <input type='email' placeholder='Enter your email' className='border-2 border-gray-400 w-full py-3 px-2 rounded-xl hover:border-gray-600 mb-8'/>
            </div>
            <div className='my-2'>
                <label>Password</label>
                <input type='password' placeholder='Enter your password' className='border-2 border-gray-400 w-full py-3 px-2 rounded-xl hover:border-gray-600'/>
            </div>
            <div className='ml-1 my-4 flex justify-between'>
                <div>
                    <input type='checkbox' className='scale-150 mr-1'/> <label className='text-lg font-semibold'>Remember me?</label>
                </div>
                <span className='text-lg font-semibold'><Link to='/forgotpassword'>Forgot Password</Link></span>
            </div>
            <button className='w-full border rounded-full bg-gray-600 p-4 my-2 text-white text-lg'>Login</button>
            <h2 className='text-center'>Don't have an account? <Link to='/register'>Register here</Link></h2>
        </form>
    </div>
  )
}

export default LoginBlock