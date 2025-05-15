import React from 'react'
import houseDesign from "../assets/images/houseDesign.png"
import video from "../assets/images/Play_video.png"
const HouseDesign = () => {
  return (
    <div className='bg-white w-full py-12 px-7'>
      <div className="flex flex-col md:flex-row w-full h-full">
        
        {/* left side Video*/}
        <div className="relative w-full md:w-1/2">
          <img
            src={houseDesign}
            alt="House design thumbnail"
            className="w-[638px] h-auto object-cover opacity-80"
          />
          <div className=" w-[66px] h-[66px] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <img src={video} alt="Play video"/>
          </div>
        </div>

        {/* Text Content */}
        <div className="w-full md:w-1/2 bg-secondary flex items-center justify-center p-10">
          <div className='text-center md:text-left max-w-md'>
            <h2 className="text-4xl font-bold text-primary mb-4 leading-tight">
               HOUSE <br /> DESIGN
            </h2>
            <p className="text-lg text-dark leading-relaxed">
               Our patent-pending design employs a strategy that reduces the environmental impact
               associated with traditional residential construction. This is how we envision your safe haven:
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HouseDesign
