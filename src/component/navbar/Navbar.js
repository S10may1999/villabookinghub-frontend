import React, { useEffect, useState } from 'react'
import LocationFliter from '../cards/LocationFliter'
import { IoMenu } from 'react-icons/io5'

function Navbar() {
    const [isSCrolling,setIsScrolling]=useState(0);

    const handleScroll=()=>{
        setIsScrolling(window.scrollY);
    }

    useEffect(()=>{
        window.addEventListener("scroll",handleScroll);

        return ()=>window.removeEventListener("scroll",handleScroll);
    },[])

  return (
    <div>
          {/* <!-- Top Navbar --> */}
        <div class="bg-pink-600 shadow-md p-4 md:flex md:items-center md:justify-between">
            <div class="flex justify-between items-center">
            <span class="text-white text-3xl font-bold">villbookinghub.com</span>
            <button class="block md:hidden text-2xl" id="menu-btn">
                ☰
            </button>
            </div>
            <div>
                <LocationFliter scroll={isSCrolling}/>
            </div>
            <div class="hidden md:flex md:items-center border-[2px]  rounded-full  space-x-2">
                <IoMenu size={18}/>
                <img src="https://via.placeholder.com/40" alt="User Profile" class="rounded-full"/>
            </div>
        </div>

        {/* <!-- Bottom Navbar for Mobile --> */}
        <nav class="fixed  bottom-0 left-0 w-full bg-white shadow-md md:hidden">
            <div class="flex justify-around p-2">
            <button class="flex flex-col items-center">
                <span>🏠</span>
                <span class="text-xs">Home</span>
            </button>
            <button class="flex flex-col items-center">
                <span>❤️</span>
                <span class="text-xs">Wishlist</span>
            </button>
            <button class="flex flex-col items-center">
                <span>🛒</span>
                <span class="text-xs">Cart</span>
            </button>
            <button class="flex flex-col items-center">
                <span>👤</span>
                <span class="text-xs">Profile</span>
            </button>
            </div>
        </nav>

    </div>
  )
}

export default Navbar

