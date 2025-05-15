import React from 'react'
import forest from "../assets/images/forest.png"
const Pathways = () => {
  return (
   <div className='bg-white w-full py-12 px-7'>
         <div className="flex flex-col md:flex-row w-full h-full">
           
           {/* Text Content */}
           <div className="w-full md:w-1/2 bg-secondary flex items-center justify-center p-10">
             <div className='text-center md:text-left max-w-md'>
               <h2 className="text-4xl font-bold text-primary mb-4 leading-tight">
                  PATHWAY
               </h2>
               <p className="text-sm text-dark leading-relaxed">
                  Future Earth’s blueprint is based on a model that was designed by one 
                  of our founders, Maya Minkova, 25 years ago while still a student, for 
                  a safe and sustainable homes project in South African townships. We have 
                  adapted the PATHWAY (power, agriculture, technology, housing, women and youth) 
                  model as the framework that outlines our projects. We believe that women and the 
                  youth, who make up more than half of the society, are critical in unlocking 
                  self-development. The project will target women as homeowners, giving them assets 
                  and credit and therefore power to self-develop. We also emphasize support for SMEs 
                  owned by women and young people to provide services within the community. 
               </p>
             </div>
           </div>
           {/* right side image*/}
           <div className="relative w-full md:w-1/2">
             <img
               src={forest}
               alt="House design thumbnail"
               className="w-[638px] h-auto object-cover"
             />
           </div>
         </div>
       </div>
  )
}

export default Pathways
