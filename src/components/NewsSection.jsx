import React from 'react'
import NewsCard from './Shared/NewsCard'

const newsItems = [
  {
    title: 'East African hardwoods',
    imageUrl: '/news1.png',
  },
  {
    title: 'East African hardwoods',
    imageUrl: '/news2.png',
  },
  {
    title: 'East African hardwoods',
    imageUrl: '/news3.png',
  },
];
const NewsSection = () => {
  return (
    <section className="bg-primary py-16 m-7">
      <div className="max-w-screen-xl mx-auto px-4 flex flex-col lg:flex-row items-start justify-between gap-8">
        {/* Left Content */}
        <div className="text-white max-w-md">
          <h2 className="text-4xl font-bold leading-tight mb-4">
            NEWS <br /> <span className="text-secondary">UPDATES</span>
          </h2>
          <p className="mb-6 text-sm">
            Find all the information and updates about our <br></br> past, present and future projects here.
          </p>
          <button className="border border-white text-white px-5 py-2 text-sm flex items-center gap-2">
            VIEW ALL →
          </button>
        </div>

        {/* News Cards */}
        <div className="w-full overflow-x-auto scrollbar-none lg:overflow-visible">
          <div className="flex gap-3 lg:grid lg:grid-cols-3">
            {newsItems.map((item, index) => (
                <NewsCard key={index} title={item.title} imageUrl={item.imageUrl} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default NewsSection
