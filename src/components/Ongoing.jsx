import React from 'react'

const Ongoing = () => {
  return (
     <div className="bg-primary py-16 px-4 text-center text-white relative overflow-hidden">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-4xl font-bold mb-6">ONGOING PROJECTS</h2>
        <p className="text-lg leading-relaxed">
          For Future Earth to deliver the country's rural transformation agenda, GoMalawi and CDI are
          supporting the organization by providing them with <span className="font-bold">500,000 hectares of land</span>
          for co-operative agriculture, sustainable reforestation, and the <span className="font-bold">delivery of 500,000 homes</span>. 
          Here are the current projects we’re working on:
        </p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 gap-6 justify-center items-center">
          <div className="relative rounded overflow-hidden">
            <img
              src="/project.png" 
              alt="Malawi project"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 text-white text-xl font-bold shadow-lg">
              Malawi project
            </div>
          </div>

          <div className="relative rounded overflow-hidden">
            <img
              src="/project.png"
              alt="Mozambique project"
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-4 left-4 text-white text-xl font-bold shadow-lg">
              Mozambique project
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Ongoing
