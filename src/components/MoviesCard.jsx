import React from 'react'

const MoviesCard = ({title,rating,category,imageUrl}) => {
  return (
    <div className="relative group overflow-hidden rounded-2xl cursor-pointer">
        <img src={imageUrl} alt={title} className="w-full h-80 object-cover group-hover:scale-110 transition duration-500 bg-cover"/>
    {/* Gradient overly */}

    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to transparent opacity-80"></div>
    {/* content */}
    <div className="absolute bottom-0 p-5 text-white w-full">̥̥
    <div className="flex justify-between items-center mb-1">
    <span className="text-xs font-bold tracking-wider text-red-500 bg-red-500/20 px-2 py-1 rounded">
    {category}
    </span>
    <span className="text-sm font-bold flex items-center">
        ⭐ {rating}
    </span>
    </div>
    <h3 className="text-xl font-medium">{title}</h3>
    </div>
    </div>


  )
}

export default MoviesCard;