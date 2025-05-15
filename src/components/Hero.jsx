import React from 'react'
import houseImg from '../assets/images/houseImg.png'
import Nav from './Shared/Nav'

const Hero = () => {
  return (
    <>
   
    <div className="relative  text-white min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-[url('/Home.png')] bg-cover bg-center">
        <Nav />
      <div className="relative z-10 container mx-auto px-6 py-16 flex flex-col-reverse lg:flex-row items-center gap-10">
        {/* Text Section */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
            OUR VISION & <br />
            <span className="text-white">PROMISE</span>
          </h1>
          <p className="text-sm sm:text-lg max-w-lg mx-auto lg:mx-0">
            Our vision is to create self-sustaining, thriving communities in rural Africa and other marginalized parts
            of the world by introducing a model that allows for mass-scale “self-development”.
          </p>

          {/* Slider dots */}
          <div className="flex items-center gap-2 mt-6 justify-center lg:justify-start">
            <div className="w-3 h-3 bg-universe rounded-full"></div>
            <div className="w-3 h-3 bg-white rounded-full"></div>
            <div className="w-3 h-3 bg-white rounded-full"></div>
            <div className="w-3 h-3 bg-white rounded-full"></div>
          </div>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 flex justify-center">
          <div className="relative">
            <div className="absolute inset-0 w-full h-full rounded-full bg-opacity-60 scale-[1.4] z-0"></div>
            <img
              src={houseImg}
              alt="Sustainable Hut"
              className="relative z-10 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg"
            />
          </div>
        </div>
      </div>

      {/* Bottom Navigation */}
      <div className="absolute bottom-8 w-full flex justify-between items-center px-10 text-xs">
        <a href="#projects" className="hover:underline">
          ON GOING PROJECTS →
        </a>
        <div className="text-center text-white opacity-80">
          Scroll to Explore
          <div className="text-xl">↓</div>
        </div>
        <a href="#partners" className="hover:underline">
          OUR PARTNERS →
        </a>
      </div>
      </div>
    </div>
    </>
  )
}

export default Hero
