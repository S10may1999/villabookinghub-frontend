import React from 'react'
import { IoCalendar, IoHome, IoPerson, IoReceipt } from 'react-icons/io5'
import { Outlet } from 'react-router-dom'

function BackendNav() {
  return (
    <div>
            {/* <!-- Top Navbar --> */}
      <nav class="bg-pink-600 text-white px-4 py-3 shadow-md">
          <div class="flex justify-between items-center">
              <div class="text-xl font-bold">villachalo.com</div>
              <div class="hidden md:flex">
                  <a href="#" class="mx-2">Home</a>
                  <a href="#" class="mx-2">About</a>
                  <a href="#" class="mx-2">Contact</a>
              </div>
          </div>
      </nav>

      <div class="flex">
          {/* <!-- Side Navbar --> */}
          <div class="bg-gray-800 text-white w-64 min-h-screen hidden md:block">
              <div class="px-4 py-4">
                  <h2 class="text-2xl font-semibold">Dashboard</h2>
                  <nav class="mt-4">
                      <a href="#" class="block px-4 py-2 mt-2 rounded hover:bg-gray-700">Overview</a>
                      <a href="#" class="block px-4 py-2 mt-2 rounded hover:bg-gray-700">Settings</a>
                      <a href="#" class="block px-4 py-2 mt-2 rounded hover:bg-gray-700">Profile</a>
                      <a href="#" class="block px-4 py-2 mt-2 rounded hover:bg-gray-700">Help</a>
                  </nav>
              </div>
          </div>

          {/* <!-- Main Content --> */}
          <div class="flex-1 p-6">
                <Outlet/>
          </div>
      </div>

      {/* <!-- Bottom Navbar for Mobile --> */}
      <nav class="fixed bottom-0 left-0 right-0 bg-gray-800 text-white flex justify-between md:hidden">
          <a href="#" class="w-full items-center mx-2 px-2 py-2">
              <IoHome size={18} style={{marginLeft: '8px',}}/>
              <span class="block text-xs">Home</span>
          </a>
          <a href="#" class="w-full items-center mx-2 px-2 py-2">
              <IoReceipt size={18} style={{marginLeft: '8px',}}/>
              <span class="block text-xs">Reports</span>
          </a>
          <a href="#" class="w-full items-center mx-2 px-2 py-2">
              <IoCalendar size={18} style={{marginLeft: '8px',}}/>
              <span class="block text-xs">Calendar</span>
          </a>
          <a href="#" class="w-full items-center mx-2 px-2 py-2">
              <IoPerson size={18} style={{marginLeft: '8px',}}/>
              <span class="block text-xs">Profile</span>
          </a>
      </nav>
    </div>
  )
}

export default BackendNav