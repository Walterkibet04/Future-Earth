import React from 'react'
import HeroBanner from './Shared/HeroBanner'
import Nav from './Shared/Nav'
const HeroContact = () => {
  return (
     <div className='relative'>
      <div className="absolute top-0 left-0 w-full z-20">
        <Nav />
      </div>
      <HeroBanner
        title="CONTACT US"
        backgroundImage="/HeroContact.png"
      />
    </div>
  )
}

export default HeroContact
