import React from 'react'
import scrollReading from '../scrollReading'

export default function Navbar() {
    const calculatedHeight = scrollReading();
  return (
    <nav className='bg-white py-6 sticky top-0'>
        <div className="flex items-center justify-between container mx-auto text-xl">
        <div className="flex items-center justify-center space-x-2">
          <div className="w-6 h-6 rounded-full bg-yellow-500"></div>
          <div className="w-6 h-6 rounded-full bg-blue-500"></div>
          <div className="w-6 h-6 rounded-full bg-red-500"></div>
        </div>
        <div className="flex gap-8">
          <ul><li class="text-black font-medium">Home</li></ul>
          <ul><li class="text-black font-medium">About Me</li></ul>
          <ul><li class="text-black font-medium">Contact Me</li></ul>
          <ul><li class="text-black font-medium">Projects</li></ul>
        </div>
      </div>
      <span style={{transform:`translateX(${calculatedHeight - 100}%)`}} className='absolute bg-yellow-500 h-2 w-full bottom-0'></span>
    </nav>
  )
}
