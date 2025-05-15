import React from 'react'
import teamData from '/teamData.json';

const AdvisoryBoard = () => {
  return (
    <div className="py-16 m-7 bg-primary bg-cover bg-center"
         style={{ backgroundImage: 'url(/wooden.png)' }} 
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-secondary mb-4">ADVISORY BOARD</h2>
            <p className="text-secondary max-w-2xl mx-auto mb-12">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
            </p>
    
            {/* Team Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {teamData.map((member, index) => (
                <div
                  key={index}
                  className="bg-card shadow-md p-6 flex flex-col items-left text-left border"
                  style={{ border: '0.5px solid #CC7F6B' }}
                >
                  <img
                    src={member.imageUrl}
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover mb-4"
                  />
                  <h3 className="font-semibold text-md text-primary">{member.name}</h3>
                  <p className="text-sm text-primary">{member.role}</p>
                  <a
                    href="#"
                    className="text-xs text-border mt-4 flex items-center hover:underline"
                  >
                    READ MORE <span className="ml-1">→</span>
                  </a>
                </div>
              ))}
            </div>
    
            {/* View All Button */}
            <div className="mt-12">
              <button className="bg-primary text-white px-6 py-2 text-sm font-regular border"
              style={{ border: '0.5px solid #ffffff' }} >
                VIEW ALL →
              </button>
            </div>
          </div>
    </div>
  )
}

export default AdvisoryBoard
