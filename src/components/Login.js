import React from 'react';
import NewsCard from './NewsCard';
import LoginBlock from './LoginBlock';
import Carousel from './Carousel';

const Login = () => {
  return (
    <div className='flex justify-between'>
           <div className='m-4'>
                
                <h1 className='text-4xl my-4 font-bold'>Welcome back, there is the latest news today !!</h1>
                <div className='flex'>
                    <NewsCard/>
                    <NewsCard/>
                </div>
            </div>
            <LoginBlock/>
    </div>
  )
}

export default Login