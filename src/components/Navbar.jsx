import React from "react";

import { useState } from "react";
const Navbar = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  return (
    <div className=" w-full md:h-[700px] h-[600px]  bg-[url('/netflix.png')]  bg-cover bg-no-repeat bg-top">
      <div className="flex justify-between items-center  md:px-20 pt-4 md:pt-6">
        <h1 className="md:text-4xl text-xl pl-3 text-red-500 font-bold italic  md:tracking-wider md:pt-5 pt-4">
          NETFLIX
        </h1>
        <div className=" text-white md:px-20 px-4 md:text-[17px] text-[15px] flex  md:gap-2 gap-1.5 md:pt-6 pt-5">
          <select className="md:h-8 h-6 w-18 md:w-32 text-white border bg-black md:rounded-md rounded-[4px] md:px-3 px-1 ">
            <option className="text-black bg-white">English</option>
            <option className="text-black bg-white">Hindi</option>
          </select>

          {isLoggedIn ? (
            <button
              onClick={() => setLoggedIn(!isLoggedIn)}
              className="bg-red-600 md:h-8 h-6 md:w-20 w-15 md:rounded-md rounded-[4px]  cursor-pointer hover:bg-red-700"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => setLoggedIn(!isLoggedIn)}
              className="bg-red-600 md:h-8 h-6 md:w-20 w-15 md:rounded-md rounded-[4px] cursor-pointer hover:bg-red-700"
            >
              LogIn
            </button>
          )}
        </div>
      </div>
      <div className="flex justify-center items-center h-full text-white flex-col w-full">
        <p className="font-bold md:text-6xl text-3xl">
          Unlimited movies,
          <br />
          <span className="flex justify-center">shows,and more</span>
        </p>
        <h1 className="md:text-2xl md:mt-3 mt-1.5">Starts at ₹149. Cancel at any time.</h1>
        <h1 className="md:text-lg text-[px] mt-3">
          Ready to watch? Enter your email to create or restart your membership.
        </h1>
        <div className="mt-3 flex gap-3 h-[75px] items-center">
          <input
            type="text"
            placeholder="Email Address"
            className="border ring-black bg-transparent h-14 w-full max-w-md rounded-sm hover:ring-2 hover:ring-white hover:rounded-md pt-2 pl-4 pr-4 pb-2 focus:outline-none focus:border-gray-500 text-xl"
          />
          <button className="bg-red-600 w-52 h-14  font-bold cursor-pointer text-2xl rounded-sm hover:bg-red-700">
            Get Started &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
