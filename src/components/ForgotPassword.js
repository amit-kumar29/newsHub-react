import React from 'react'
import { Link } from 'react-router-dom'

const ForgotPasswordCard = () => {
    return (
            <div className='border-2 border-black p-16 mx-auto w-7/12 ml-18'>
                <h1 className='text-center text-3xl font-bold mb-10'>NewsHub</h1>
                <form>
                    
                    <div className='my-2'>
                        <label>Email</label>
                        <input type='email' placeholder='Enter your email' className='border-2 border-gray-400 w-full py-3 px-2 rounded-xl hover:border-gray-600 mb-8'/>
                    </div>
                    
                    <button className='w-full border rounded-full bg-gray-600 p-4 my-2 text-white text-lg'><Link to='/updatepassword'>Reset Password</Link></button>
                    <h2 className='text-center'>Do already have an account?? <Link to='/login'>Login here</Link></h2>
                </form>
                
            </div>
    )
}
const ForgotPassword = () => {
  return (
    <div className='flex p-8'>
        <div className='p-8 pr-32'>
            <h1 className='text-5xl font-semibold leading-normal mb-6'>You forgot your password? calm down we will help</h1>
            <p className='text-lg text-gray-500 text-justify'>Lorem Ipsum is simply dummy text of the printing and 
                typesetting industry. Lorem Ipsum has been the industry's 
                standard dummy text ever since the 1500s, when an unknown
            </p>
        </div>
        <ForgotPasswordCard />
        
    </div>
  )
}

export default ForgotPassword