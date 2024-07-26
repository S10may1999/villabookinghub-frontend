import React from 'react'

function ProductCard() {
  return (
    <div class="container mx-auto p-4">
    {/* <!-- Product Card --> */}
    <div class="max-w-sm mx-auto bg-white rounded-lg shadow-md overflow-hidden">
      <img class="w-full h-48 object-cover object-center" src="https://via.placeholder.com/400x300" alt="Product Image"/>
      <div class="p-4">
        <h2 class="text-lg font-semibold text-gray-800">Product Title</h2>
        <p class="text-gray-600 mt-2">This is a brief description of the product.</p>
        <div class="mt-4 flex items-center justify-between">
          <span class="text-xl font-bold text-gray-900">$29.99</span>
          <button class="px-2 py-1 ml-2 md:px-3 md:py-1 bg-pink-600 text-white text-xs font-bold uppercase rounded-full">Book Now</button>
        </div>
      </div>
    </div>
  </div>

  )
}

export default ProductCard