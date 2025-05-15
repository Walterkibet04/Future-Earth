import React from 'react'

const NewsCard = ({ imageUrl, title }) => {
  return (
    <div className="bg-secondary w-64 h-[333px] rounded-sm shadow-sm flex-shrink-0">
      <img src={imageUrl} alt={title} className="w-full h-40 object-cover" />
      <div className="p-4 flex flex-col justify-between items-center">
        <h3 className="text-primary font-semibold text-md m-4">{title}</h3>
        <button className="bg-primary text-white px-4 py-2 text-xs">LEARN MORE</button>
      </div>
    </div>
  )
}

export default NewsCard
