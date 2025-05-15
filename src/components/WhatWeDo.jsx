import React from 'react'
import Kids from "../assets/images/Kids.png"
const WhatWeDo = () => {
  return (
    <div className="relative  overflow-hidden mx-7">
      {/* Background */}
      <div className="absolute inset-0 flex flex-col lg:flex-row">
        {/* Top on mobile, Left on desktop */}
        <div className="w-full lg:w-1/3 h-1/2 lg:h-auto bg-secondary" />
        {/* Bottom on mobile, Right on desktop */}
        <div className="w-full lg:w-2/3 h-1/2 lg:h-auto bg-primary" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 flex flex-col lg:flex-row items-center gap-10">
        {/* Image Section */}
        <div className="w-full lg:w-1/2">
          <img
            src={Kids}
            alt="Children playing"
            className="w-full h-auto rounded-md object-cover shadow-lg"
          />
        </div>

        {/* Text Section */}
        <div className="w-full lg:w-1/2 text-white">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6">WHAT WE DO</h2>
          <p className="mb-4 text-sm sm:text-base leading-relaxed">
            Future Earth carries the dream of a world where everyone has access to
             safe housing, sustainable livelihoods, education and healthcare, as 
             well as opportunities to create a legacy for future generations.
          </p>
          <p className="mb-4 text-sm sm:text-base leading-relaxed">
            Using the PATHWAY model we have created a self-sustaining ecosystem
            that will fulfil the long-term needs of people in need, not just at
            a basic level but with the potential to create wealth. iRise Homes
            are low-cost, easy-to-construct houses that we designed with women
            and youth in mind, from construction to functionality. They are
            built with sustainable timber, with each house embedded with 
            amenities, including renewable solar energy and digital connectivity.
          </p>
          <p className="mb-4 text-sm sm:text-base leading-relaxed">
            More than just a place to call home, we have ensured that our houses 
            are also the springboard for opportunity and a better life. Each house 
            comes with a fruit garden that provides an income for the household and
             the financial means to pay the mortgage.
          </p>
          <p className="text-sm sm:text-base leading-relaxed">
            To allow access to more resources, we will construct in every community 
            a central borehole facility to provide access to clean water. Through 
            our building technology, we will also put up schools and health clinics
             for the community’s access to quality education and health service.
          </p>
        </div>
      </div>
    </div>
  )
}

export default WhatWeDo
