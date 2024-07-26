import React from 'react'
import PaymentDeatils from '../component/cards/PaymentDeatils'

function Description() {
  return (
    // <!-- Hero Section -->
    <>
      <div class="relative bg-cover bg-center h-64" style={{ backgroundImage: "url('https://via.placeholder.com/1200x400')" }}>
        <div class="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <h1 class="text-4xl text-white font-bold">Product Title</h1>
        </div>
      </div>
      {/* // <!-- Main Content --> */}
      <div class="container mx-auto px-4 py-8">
        {/* <!-- Product Description --> */}
        <div className='hidden md:grid md:grid-cols-2'>
          <div>
            <section class="mb-8">
              <h2 class="text-2xl font-bold mb-4">Product Description</h2>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent vehicula dui id metus hendrerit, in sagittis urna dapibus. Sed at cursus nunc, nec lacinia lorem. Integer nec nibh nec elit suscipit egestas. In a tincidunt urna. Cras ultricies libero nec leo consectetur, sit amet venenatis sapien pharetra.</p>
            </section>
          </div>
          <section className='mb-8'>
            <PaymentDeatils />
          </section>
        </div>
        {/* <!-- Features Section --> */}
        <section class="mb-8">
          <h2 class="text-2xl font-bold mb-4">Features</h2>
          <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <div class="bg-white p-4 rounded-lg shadow">
              <h3 class="text-xl font-semibold mb-2">Feature 1</h3>
              <p>Feature 1 description goes here.</p>
            </div>
            <div class="bg-white p-4 rounded-lg shadow">
              <h3 class="text-xl font-semibold mb-2">Feature 2</h3>
              <p>Feature 2 description goes here.</p>
            </div>
            <div class="bg-white p-4 rounded-lg shadow">
              <h3 class="text-xl font-semibold mb-2">Feature 3</h3>
              <p>Feature 3 description goes here.</p>
            </div>
            <div class="bg-white p-4 rounded-lg shadow">
              <h3 class="text-xl font-semibold mb-2">Feature 4</h3>
              <p>Feature 4 description goes here.</p>
            </div>
            <div class="bg-white p-4 rounded-lg shadow">
              <h3 class="text-xl font-semibold mb-2">Feature 5</h3>
              <p>Feature 5 description goes here.</p>
            </div>
            <div class="bg-white p-4 rounded-lg shadow">
              <h3 class="text-xl font-semibold mb-2">Feature 6</h3>
              <p>Feature 6 description goes here.</p>
            </div>
          </div>
        </section>

        {/* <!-- Image Gallery --> */}
        <section>
          <h2 class="text-2xl font-bold mb-4">Image Gallery</h2>
          <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            <div class="bg-white rounded-lg shadow overflow-hidden">
              <img src="https://via.placeholder.com/300" alt="Gallery Image" class="w-full h-48 object-cover" />
            </div>
            <div class="bg-white rounded-lg shadow overflow-hidden">
              <img src="https://via.placeholder.com/300" alt="Gallery Image" class="w-full h-48 object-cover" />
            </div>
            <div class="bg-white rounded-lg shadow overflow-hidden">
              <img src="https://via.placeholder.com/300" alt="Gallery Image" class="w-full h-48 object-cover" />
            </div>
            <div class="bg-white rounded-lg shadow overflow-hidden">
              <img src="https://via.placeholder.com/300" alt="Gallery Image" class="w-full h-48 object-cover" />
            </div>
            <div class="bg-white rounded-lg shadow overflow-hidden">
              <img src="https://via.placeholder.com/300" alt="Gallery Image" class="w-full h-48 object-cover" />
            </div>
            <div class="bg-white rounded-lg shadow overflow-hidden">
              <img src="https://via.placeholder.com/300" alt="Gallery Image" class="w-full h-48 object-cover" />
            </div>
            <div class="bg-white rounded-lg shadow overflow-hidden">
              <img src="https://via.placeholder.com/300" alt="Gallery Image" class="w-full h-48 object-cover" />
            </div>
            <div class="bg-white rounded-lg shadow overflow-hidden">
              <img src="https://via.placeholder.com/300" alt="Gallery Image" class="w-full h-48 object-cover" />
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default Description