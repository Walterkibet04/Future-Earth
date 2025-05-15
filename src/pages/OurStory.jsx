import React from 'react'
import HeroStory from '../components/HeroStory'
import WhoOurStory from '../components/WhoOurStory'
import WhatWeDo from '../components/WhatWeDo'
import OurTeam from '../components/OurTeam'
import Footer from '../components/Shared/Footer'
import AdvisoryBoard from '../components/AdvisoryBoard'
const OurStory = () => {
  return (
    <div>
      <HeroStory />
      <WhoOurStory />
      <WhatWeDo />
      <OurTeam />
      <AdvisoryBoard />
      <Footer />
    </div>
  )
}

export default OurStory
