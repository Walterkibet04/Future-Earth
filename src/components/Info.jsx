import React from 'react'
import { ArrowLeft, ArrowDown, ArrowRight } from 'lucide-react';
const Info = () => {
  return (
    <div className='w-full py-8 px-30'>
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-white text-sm font-light tracking-wider gap-6 md:gap-0">

        
        <div className="flex items-center gap-2">
          <span>Ongoing Projects</span>
          <ArrowRight className="w-4 h-4" />
        </div>

       
        <div className="flex items-center gap-2">
          <ArrowDown className="w-4 h-4" />
          <span>Scroll to Explore</span>
        </div>

        
        <div className="flex items-center gap-2">
          <span>Our Partners</span>
          <ArrowRight className="w-4 h-4" />
        </div>
      </div>
    </div>
  )
}

export default Info

