import React from 'react'
import IconImg from "../assets/images/Icon-2.png"
import Lowat from "../assets/images/Icon-3.png"
import Enviro from "../assets/images/Icon-4.png"
import cane from "../assets/images/Icon-5.png"
const Partners = () => {
  return (
    <div className="bg-secondary m-7 py-16 px-4 relative">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl sm:text-5xl font-bold text-primary mb-4">OUR PARTNERS</h2>
        <p className="text-lg text-dark mb-12">
          We have formed solid partnerships with these organizations, on the basis of our shared vision.
        </p>

        <div className="relative flex justify-center items-center gap-4 overflow-x-auto px-4">
          {/* Left Arrow */}
          <button className="text-primary text-2xl absolute left-0 top-1/2 -translate-y-1/2 px-2 z-10">
            ←
          </button>

          {/* Partner Logos */}
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6 w-full max-w-5xl">
            <div className="border border-primary w-59 h-30 flex items-center justify-center">
              <img src={IconImg} alt="Partner 1" className="max-h-full max-w-full p-5" />
            </div>
            <div className="border border-primary w-59 h-30 flex items-center justify-center">
              <img src={Lowat} alt="Partner 2" className="max-h-full max-w-full p-6" />
            </div>
            <div className="border border-primary w-59 h-30 flex items-center justify-center ">
              <img src={Enviro} alt="Partner 3" className="max-h-full max-w-full p-6" />
            </div>
            <div className="border border-primary w-59 h-30 flex items-center justify-center">
              <img src={cane} alt="Partner 4" className="max-h-full max-w-full p-6" />
            </div>
          </div>

          {/* Right Arrow */}
          <button className="text-primary text-2xl absolute right-0 top-1/2 -translate-y-1/2 px-2 z-10">
            →
          </button>
        </div>

        <div className="mt-12">
          <button className="bg-primary text-white px-8 py-3 text-lg font-medium hover:bg-[#104522] transition rounded">
            LEARN MORE →
          </button>
        </div>
      </div>
    </div>
  )
}

export default Partners
