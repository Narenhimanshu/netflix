import React from 'react'

const QuestionDown = () => {
  return (
    <div  >
     <p className="text-lg">Ready to watch? Enter your email to create or restart your membership.</p>
     <div className="mt-3 flex gap-3 h-[75px] items-center">
          <input type="text" placeholder="Email Address" className="border border-slate-600 bg-transparent h-14 w-[561px] rounded-sm hover:ring-2 hover:ring-white hover:rounded-md pt-2 pl-4 pr-4 pb-2 focus:outline-none focus:border-gray-500 text-xl"/>
        <button className="bg-red-600 w-52 h-14  font-bold cursor-pointer text-2xl rounded-sm hover:bg-red-700 text-white">Get Started &gt;</button>
        </div>
       </div>
  )
}

export default QuestionDown
