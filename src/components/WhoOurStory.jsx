import React from 'react'
import Bottom_image from "../assets/images/Bottom_image.png"
import Top_image from "../assets/images/Top_image.png"

const WhoOurStory = () => {
  return (
    <div className="w-full flex justify-center px-4 md:px-8 py-12 bg-white">
          <div className="bg-secondary w-full max-w-7xl p-6 md:p-12 rounded-none flex flex-col lg:flex-row gap-5 items-start">
            
            {/* Left Column - Text Content */}
            <div className="flex-1 text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-primary leading-tight mb-6">
                WHO WE ARE
              </h2>
              <p className="text-dark text-base md:text-lg mb-4">
                Aid that isn't accompanied by a strategy for long-term sustainability
                 is certain to fail. Driven by the desire to create lasting change 
                 from self-sustainable economies on the ground, we invented the 
                 iRise Homes building system and a corresponding economic development model...
              </p>
              <p className="text-dark text-base md:text-lg">
                Beyond providing people with the fundamental elements to 
                achieve a basic living standard... We provide a technology 
                platform that enables mortgage provisions and monthly 
                pay-as-you-go payments on mobile...
              </p>
              <p className="text-dark text-base md:text-lg">
                We use a blueprint based on PATHWAY (power, agriculture, technology,
                housing, women and youth), a model that was designed by one of our 
                founders, Maya Minkova for a sustainable homes project in South 
                African townships 25 years ago. 
              </p>
              <p className="text-dark text-base md:text-lg">
                We use a blueprint based on PATHWAY (power, agriculture, technology,
                housing, women and youth), a model that was designed by one of our 
                founders, Maya Minkova for a sustainable homes project in South 
                
              </p>
            </div>
    
            {/* Right Column - Images */}
            <div className="flex-1 flex flex-col items-end gap-4">
              <img
                src={Top_image}
                alt="Top illustration"
                className="w-[408px] max-w-sm object-contain"
              />
              <img
                src={Bottom_image}
                alt="Bottom illustration"
                className="w-full max-w-sm object-contain"
              />
            </div>
          </div>
        </div>
  )
}

export default WhoOurStory
