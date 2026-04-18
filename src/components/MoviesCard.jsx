import React from 'react'

const MoviesCard = ({title,rating,category,imageUrl}) => {
  return (
    <div className="relative group overflow-hidden md:rounded-2xl rounded-[12px] cursor-pointer">
        <img src={imageUrl} alt={title} className="w-full md:h-80 h-60 object-cover group-hover:scale-110 transition duration-500 bg-cover"/>
    {/* Gradient overly */}

    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to transparent opacity-80"></div>
    {/* content */}
    <div className="absolute bottom-0 md:p-5 p-2 text-white w-full">̥̥
    <div className="flex justify-between items-center md:mb-1 mb-0.5">
    <span className="md:text-xs text-[9px] font-bold tracking-wider text-red-500 bg-red-500/20 md:px-2 px-1 md:py-1 py-0.5 rounded-xs">
    {category}
    </span>
    <span className="md:text-sm  font-bold flex items-center">
        ⭐ {rating}
    </span>
    </div>
    <h3 className="md:text-xl font-medium">{title}</h3>
    </div>
    </div>


  )
}

export default MoviesCard;