import React from 'react'

const Footer = () => {
  
  return (
    <div className='bg-black mt-4'>
        <div>
          <h1 className='text-3xl font-semibold text-center text-white pt-2'>NewsHub</h1>
          <p className='mx-auto text-center w-3/12 text-white my-4'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</p>
        </div>
        <hr className='mx-2 mt-10'></hr>
        <div className='flex justify-between py-8 mx-2'>
          <span className='text-white text-sm mt-2'>Copyright © All Rights are Reserved</span>
          <ul className='flex'>
            <li className='mx-4 text-white'><img src='/images/instagram.png' className='h-7 cursor-pointer' alt='instagram_icon'/></li>
            <li className='mx-4 text-white'><img src='/images/linkedin.png' className='h-7 cursor-pointer' alt='instagram_icon'/></li>
            <li className='mx-4 text-white'><img src='/images/facebook.png' className='h-7 cursor-pointer' alt='instagram_icon'/></li>
            <li className='mx-4 text-white'><img src='/images/twitter.png' className='h-7 bg-white cursor-pointer' alt='instagram_icon'/></li>
          </ul>
        </div>
    </div>
  )
}

export default Footer