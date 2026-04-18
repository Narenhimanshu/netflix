import React from 'react'

const Question = ({id,paragraph}) => {
  return (
  
    <div className="  mt-5 text-xl cursor-pointer ">
      <div>
        <h3 className="h-[84px] bg-neutral-700 my-3 pl-6 flex items-center justify-between hover:bg-neutral-600 transition duration-300">{paragraph}<span className="text-3xl font-bold pr-8 ">+</span></h3>
      </div>
    </div>
  )
}

export default Question