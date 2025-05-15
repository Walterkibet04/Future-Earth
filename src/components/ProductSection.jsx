import React from 'react'

const ProductSection = () => {

    const features = [
    { title: 'SOLAR POWER', icon: '/Solar.png' },
    { title: 'WATERLESS TOILETS', icon: '/Toilet.png' },
    { title: 'LOW-COST MORTGAGE', icon: '/mm.png' },
    { title: 'GARDEN TO PLANT TREES', icon: '/Tree.png' },
    { title: 'CLEAN, EFFICIENT COOK-STOVE', icon: '/fire.png' },
    { title: 'INTERNET ACCESS DEVICE', icon: '/internet.png' },
  ];

  return (
    <section className="bg-white py-8 px-4">
      <div className="max-w-[90%] mx-auto bg-cover bg-center rounded-md overflow-hidden shadow-md"
      style={{ backgroundImage: "url('/Solar_bg.png')" }}
      >
        <div className="flex flex-col lg:flex-row">
          {/* Left Side: Text & Icon */}
          <div className="lg:w-full w-full bg-primary/60 text-white px-8 py-12 flex flex-col justify-between relative z-10">
            <div>
              <img src="/Solar.png" alt="Solar Icon" className="w-16 h-16 mb-4" />
              <h2 className="text-4xl font-bold leading-tight mb-4">
                SOLAR<br />POWER
              </h2>
              <p className="text-base leading-relaxed">
                Basic access to electricity improves safety, security, and <br></br> productivity while reducing household expenses for lighting sources.
              </p>
            </div>

            {/* Carousel Dots */}
            <div className="flex space-x-2 mt-6">
              <span className="w-4 h-2 rounded-full bg-universe"></span>
              <span className="w-2 h-2 rounded-full bg-white"></span>
              <span className="w-2 h-2 rounded-full bg-white"></span>
              <span className="w-2 h-2 rounded-full bg-white"></span>
            </div>
          </div>
        </div>

        {/* Bottom Icons */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 bg-primary text-white text-center">
          {features.map((feature, index) => (
            <div
              key={index}
              className={`flex flex-col items-center justify-center px-4 py-6 ${
                index === 0 ? 'bg-light text-white' : ' transition'
              }`}
            >
              <img src={feature.icon} alt={feature.title} className="w-8 h-8 mb-2" />
              <span className="text-xs font-light">{feature.title}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductSection
