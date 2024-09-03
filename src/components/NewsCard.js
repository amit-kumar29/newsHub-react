import React from 'react';

const NewsCard = () => {
  return (
    <div className='w-full m-3 relative shadow-xl'>
      <img
        src='https://img.freepik.com/free-photo/abstract-autumn-beauty-multi-colored-leaf-vein-pattern-generated-by-ai_188544-9871.jpg'
        alt='newsImage'
        className='w-full'
      />
      <div className='absolute -top-3 -right-3  text-white px-2 py-1 rounded-full m-2'>
        Category
      </div>
      <div className='absolute  bottom-60 -left-3 text-white px-2 py-1 rounded-full m-2'>
        Date: May 24, 2024
      </div>
      <h1 className='font-bold py-2'>Headlines of Some news which is going to be the text</h1>
      <p className='text-sm text-justify pb-4 text-gray-600'>
        The forest whispered secrets of ancient times, with each rustling leaf
        and babbling brook telling stories of forgotten eras. Sunlight filtered
        through the dense canopy, casting a dappled glow on the forest floor,
        where wildflowers bloomed in vibrant hues.
      </p>
      <button className='px-6 py-3 bg-black text-white rounded-full mb-2'>
        Read More ↗
      </button>
    </div>
  );
};

export default NewsCard;
