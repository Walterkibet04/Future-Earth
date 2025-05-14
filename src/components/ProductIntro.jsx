import React from 'react'

const ProductIntro = () => {
  return (
     <div
      className="w-full bg-cover bg-center bg-no-repeat px-4 py-16 md:py-24 flex justify-center"
      style={{ backgroundImage: "url('/wooden.png')" }}
    >
      <div className="max-w-5xl text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-primary mb-8">
          PRODUCT INTRODUCTION
        </h2>
        <p className="text-base md:text-lg text-dark leading-relaxed mb-4">
          To enable ‘self-development’ at scale so as to break the poverty cycle, Future Earth
          found its solution in the iRise Homes™ & Gardens initiative.
        </p>
        <p className="text-base md:text-lg text-dark leading-relaxed">
          Future Earth builds affordable houses and delivers them with a variety of facilities that
          provide families the basic requirements and the tools for self-development.
        </p>
      </div>
    </div>
  )
}

export default ProductIntro
