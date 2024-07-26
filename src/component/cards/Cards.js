import React from 'react'
import LocationFilter from '../cards/LocationFliter'

function Cards() {
  return (
    <div class="container mx-auto h-64">
    {/* <!-- Carousel --> */}
    <div class="carousel relative">
      <div class="carousel-inner">
        <div class="carousel-item">
          <img src="https://via.placeholder.com/800x400" alt="Slide 1" class="h-64 w-full"/>
          
        </div>
      </div>

      {/* <!-- Carousel controls --> */}
      <button class="rounded-full px-4 py-2 ml-2 absolute top-1/2 left-0 transform -translate-y-1/2 bg-pink-600 text-white p-2 hover:bg-white hover:text-black transition duration-300" id="prevBtn">
        &#10094;
      </button>
      <button class="rounded-full px-4 py-2 mr-2 absolute top-1/2 right-0 transform -translate-y-1/2 bg-pink-600 text-white p-2 hover:bg-white hover:text-black transition duration-300" id="nextBtn">
        &#10095;
      </button>

      {/* <!-- Carousel indicators --> */}
      <div class="carousel-indicators absolute bottom-0 left-1/2 transform -translate-x-1/2 flex justify-center p-2">
        <button class="active" data-slide-to="0"></button>
        <button data-slide-to="1"></button>
        <button data-slide-to="2"></button>
      </div>
    </div>
  </div>
  )
}

export default Cards