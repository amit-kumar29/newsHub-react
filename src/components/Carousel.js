import React from 'react'
import CarouselCard from './CarouselCard'

const Carousel = () => {

    const arr = [1, 2, 3, 4, 5];
  return (
    <div id="default-carousel" className="relative w-auto  mx-auto" data-carousel="slide">
    <div className="overflow-hidden relative h-56 mt-2 rounded-lg md:h-96">
      {/* Slide 1 */}
      <div className="duration-700 ease-in-out absolute inset-0 transition-transform transform translate-x-0" data-carousel-item>
        {/* Replace with your CarouselCard component */}
        <CarouselCard slideNumber={1} />
      </div>
      {/* Slide 2 */}
      {arr.map((item) => (
        <div
          key={item}
          className="duration-700 ease-in-out absolute inset-0 transition-transform transform translate-x-full"
          data-carousel-item
        >
          {/* Replace with your CarouselCard component */}
          <CarouselCard slideNumber={item} />
        </div>
      ))}
    </div>
    {/* Left/Right Controls */}
    <button data-carousel-prev className="absolute top-44 left-0 z-30 p-2 bg-white rounded-full">
      ◀
    </button>
    <button data-carousel-next className="absolute top-44 right-0 z-30 p-2 bg-white rounded-full">
      ▶
    </button>
  </div>
  )
}

export default Carousel