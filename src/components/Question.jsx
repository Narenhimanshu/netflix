import React from 'react'

const Question = ({id,paragraph}) => {
  return (
    // <div className="h-full w-full  text-white mt-14 px-32">
    //     <p className="text-xl font-semibold"> Frequently Asked Questions</p>
    //    <div className="  mt-5 text-xl cursor-pointer ">
    //     <div className="h-[84px] bg-neutral-700 my-3 pl-6 flex items-center justify-between hover:bg-neutral-600 transition duration-300">What is Netflix?                 <span className="text-3xl font-bold pr-8 ">+</span></div>
    //     <div className="h-[84px] bg-neutral-700 my-3 pl-6 flex items-center justify-between hover:bg-neutral-600 transition duration-300">How much does does Netflix cost? <span className="text-3xl font-bold pr-8 ">+</span></div>
    //     <div className="h-[84px] bg-neutral-700 my-3 pl-6 flex items-center justify-between hover:bg-neutral-600 transition duration-300">Where can I watch?               <span className="text-3xl font-bold pr-8 ">+</span></div>
    //     <div className="h-[84px] bg-neutral-700 my-3 pl-6 flex items-center justify-between hover:bg-neutral-600 transition duration-300">How do I cancel?                 <span className="text-3xl font-bold pr-8 ">+</span></div>
    //     <div className="h-[84px] bg-neutral-700 my-3 pl-6 flex items-center justify-between hover:bg-neutral-600 transition duration-300">What can I watch on Netflix?     <span className="text-3xl font-bold pr-8 ">+</span></div>
    //     <div className="h-[84px] bg-neutral-700 my-3 pl-6 flex items-center justify-between hover:bg-neutral-600 transition duration-300">Is Netflix good for kids?        <span className="text-3xl font-bold pr-8 ">+</span></div>
    //    </div>
    //    <div className="mt-10 flex flex-col justify-center items-center" >
    //     <p className="text-lg">Ready to watch? Enter your email to create or restart your membership.</p>
    //     <div className="mt-3 flex gap-3 h-[75px] items-center">
    //       <input type="text" placeholder="Email Address" className="border ring-black bg-transparent h-14 w-[561px] rounded-sm hover:ring-2 hover:ring-white hover:rounded-md pt-2 pl-4 pr-4 pb-2 focus:outline-none focus:border-gray-500 text-xl"/>
    //     <button className="bg-red-600 w-52 h-14  font-bold cursor-pointer text-2xl rounded-sm hover:bg-red-700">Get Started &gt;</button>
    //     </div>
    //    </div>
    // </div>d
    <div className="  mt-5 text-xl cursor-pointer ">
      <div>
        <h3 className="h-[84px] bg-neutral-700 my-3 pl-6 flex items-center justify-between hover:bg-neutral-600 transition duration-300">{paragraph}<span className="text-3xl font-bold pr-8 ">+</span></h3>
      </div>
    </div>
  )
}

export default Question