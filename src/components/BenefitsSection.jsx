import React from 'react'

const BenefitsSection = () => {
 return (
    <div
      className="bg-cover bg-center bg-dark text-white py-20 mx-7 md:px-16"
      style={{ backgroundImage: "url('/wooden.png')" }} 
      >
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white">BENEFITS</h2>
        <p className="mt-6 text-lg md:text-xl max-w-3xl mx-auto text-white">
          The iRise houses are affordable, simple-to-build with sustainable wood and powered by renewable solar energy. In addition, they come with the following benefits:
        </p>

        <div className="mt-12 grid gap-8 md:grid-cols-3">
          {[
            {
              number: "01",
              text: "The iRise housing structure can be mass-manufactured affordably",
            },
            {
              number: "02",
              text: "The house is portable to maintain resale value and make the house financially viable.",
            },
            {
              number: "03",
              text: "The houses can be easily and quickly assembled on-site by inexperienced women and youth.",
            },
          ].map((item, index) => (
            <div
              key={index}
              className="border border-white p-4 rounded-md bg-transparent backdrop-blur-sm"
            >
              <div className="flex items-center justify-start space-x-4 mb-1 mt-0">
                <span className="text-3xl font-bold text-white">{item.number}</span>
              </div>
              <p className="text-left text-white">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default BenefitsSection
