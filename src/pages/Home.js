import React from 'react'
import Cards from '../component/cards/Cards'
import ProductCard from '../component/cards/ProductCard'
import CircularAvatar from '../component/cards/CircularAvatar'
import './Home.css'
import Testimonial from '../component/other/Testimonial'


function Home() {
  return (
    <div>

        <div className='h-3/5 '>
            <Cards/>
        </div>
        <h2 className='mt-2 ml-6 mb-2 font-bold text-xl'>
            Most Visited Place
        </h2>
        <div className='flex flex-row overflow-x-scroll hide-scrollbar'>
            <CircularAvatar/>
            <CircularAvatar/>
            <CircularAvatar/>
            <CircularAvatar/>
            <CircularAvatar/>
            <CircularAvatar/>
            <CircularAvatar/>
            <CircularAvatar/>
            <CircularAvatar/>
            <CircularAvatar/>
        </div>        
        <h2 className='ml-6 mb-2 font-bold text-xl'>
            Recommended Rooms
        </h2>
        <div className='grid grid-cols-2 md:flex md:flex-row'>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </div>

        <h2 className='ml-6 mb-2 font-bold text-xl'>
            Most Booked Rooms
        </h2>
        <div className='grid grid-cols-2 md:flex md:flex-row'>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </div>
        <div className=''>
            <Testimonial/>
        </div>
    </div>
  )
}

export default Home