import React from 'react'
import HeroBanner from './Shared/HeroBanner'
import Nav from './Shared/Nav'

const HeroStory = () => {
  return (
     <div className='relative'>
      <div className="absolute top-0 left-0 w-full z-20">
        <Nav />
      </div>
      <HeroBanner
        title="Our Story"
        backgroundImage="/HeroStory.png"
      />
    </div>
  )
}

export default HeroStory
