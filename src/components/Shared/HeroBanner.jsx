import React from 'react'

const HeroBanner = ({title, backgroundImage}) => {
  return (
    <div
      className="w-full h-[60vh] md:h-[70vh] bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      {/* Overlay */}
      <div className="bg-primary/50 w-full h-full flex items-center">
        <div className="max-w-7xl mx-auto px-6 sm:px-8">
          <h1 className="text-white text-4xl sm:text-5xl font-bold leading-tight">
            {title.split(" ").map((word, index) => (
              <span key={index} className="block">
                {word}
              </span>
            ))}
          </h1>
        </div>
      </div>
    </div>
  )
}

export default HeroBanner
