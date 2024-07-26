import React from 'react'

function Testimonial() {
  return (
    <div>
          {/* <!-- Testimonial Section --> */}
  <section class="bg-white py-12">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-12">What Our Customers Say</h2>
      
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* <!-- Testimonial 1 --> */}
        <div class="bg-gray-100 p-6 rounded-lg shadow-lg">
          <div class="flex items-center mb-4">
            <img src="https://via.placeholder.com/100" alt="Customer 1" class="w-16 h-16 rounded-full mr-4"/>
            <div>
              <h3 class="text-xl font-bold">Customer 1</h3>
              <p class="text-gray-500">Job Title</p>
            </div>
          </div>
          <p class="text-gray-700">"This is the best product I have ever used. It completely changed my life!"</p>
        </div>

        {/* <!-- Testimonial 2 --> */}
        <div class="bg-gray-100 p-6 rounded-lg shadow-lg">
          <div class="flex items-center mb-4">
            <img src="https://via.placeholder.com/100" alt="Customer 2" class="w-16 h-16 rounded-full mr-4"/>
            <div>
              <h3 class="text-xl font-bold">Customer 2</h3>
              <p class="text-gray-500">Job Title</p>
            </div>
          </div>
          <p class="text-gray-700">"Amazing service and top-notch quality. I highly recommend it to everyone."</p>
        </div>

        {/* <!-- Testimonial 3 --> */}
        <div class="bg-gray-100 p-6 rounded-lg shadow-lg">
          <div class="flex items-center mb-4">
            <img src="https://via.placeholder.com/100" alt="Customer 3" class="w-16 h-16 rounded-full mr-4"/>
            <div>
              <h3 class="text-xl font-bold">Customer 3</h3>
              <p class="text-gray-500">Job Title</p>
            </div>
          </div>
          <p class="text-gray-700">"The customer support was exceptional. I am very satisfied with my purchase."</p>
        </div>

        {/* <!-- Add more testimonials as needed --> */}

      </div>
    </div>
  </section>
    </div>
  )
}

export default Testimonial