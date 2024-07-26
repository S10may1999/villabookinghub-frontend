import React from 'react'
import { IoSearch } from 'react-icons/io5'

function LocationFliter(props) {
  return (
    // <!-- Filter Row -->
  // <div class={`hidden md:bg-white md:shadow-md md:p-2 md:mx-4 md:flex md:justify-between md:items-center md:rounded-full`}>
  //   <div class="flex items-center space-x-4">
  //     {/* <!-- Location Filter --> */}
  //     <div class="flex items-center border rounded-full px-2 py-1">
  //       <label for="location" class="mr-2 text-gray-600">Location:</label>
  //       <input id="location" type="text" placeholder="Where are you going?" class="border-none outline-none"/>
  //     </div>
  //     {/* <!-- Date Filter --> */}
  //     <div class="flex items-center border rounded-full px-2 py-1">
  //       <label for="date" class="mr-2 text-gray-600">Start Date:</label>
  //       <input id="date" type="date" class="border-none outline-none"/>
  //     </div>
  //     <div class="flex items-center border rounded-full px-2 py-1">
  //       <label for="date" class="mr-2 text-gray-600">End Date:</label>
  //       <input id="date" type="date" class="border-none outline-none"/>
  //     </div>
  //     {/* <!-- Guest Filter --> */}
  //     <div class="flex items-center border rounded-full px-2 py-1">
  //       <label for="guests" class="mr-2 text-gray-600">Guests:</label>
  //       <input id="guests" type="number" min="1" max="10" value="1" class="border-none outline-none"/>
  //     </div>
  //     <div class="items-center bg-pink-600 text-white border rounded-full px-[10px] py-[10px] hover:shadow-gray transition duration-300">
  //       <IoSearch size={24} style={{text:"white"}}/>
  //     </div>
  //   </div>
  // </div>
<div className="hidden md:flex md:flex-row md:gap-4 md:bg-white hover:shadow-lg md:p-4 md:m-4 md:rounded-full">
  <div className="flex-1">
    <select className="p-2 w-full border border-gray-300 rounded-md">
      <option value="" disabled selected>Location</option>
      <option value="location1">Location 1</option>
      <option value="location2">Location 2</option>
      <option value="location3">Location 3</option>
      {/* <!-- Add more locations as needed --> */}
    </select>
  </div>
  <div className="flex-1 flex flex-col md:flex-row gap-2 md:gap-4">
    <input className="p-2 w-full border border-gray-300 rounded-md" placeholder="Check In" type="date" />
    <input className="p-2 w-full border border-gray-300 rounded-md" placeholder="Check Out" type="date"/>
  </div>
  <div className="flex-1">
    <input className="p-2 w-full border border-gray-300 rounded-md" placeholder="Add Guest" type="number" min="1"/>
  </div>
  <div className="flex items-center">
    <button className="p-2 bg-pink-600 text-white rounded-full hover:text-black">
      <IoSearch/>
    </button>
  </div>
</div>

  )
}

export default LocationFliter