import React from 'react'
import HeroBanner from './Shared/HeroBanner'
import Nav from './Shared/Nav'
const HeroSustainable = () => {
  return (
    <div className='relative'>
      <div className="absolute top-0 left-0 w-full z-20">
        <Nav />
      </div>
      <HeroBanner
        title="SUSTAINABLE LIVING"
        backgroundImage="/HeroSustainable.png"
      />
    </div>
  )
}

export default HeroSustainable
