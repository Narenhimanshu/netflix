import React from "react";

import { useState } from "react";
const Navbar = () => {
  const [isLoggedIn, setLoggedIn] = useState(false);
  return (
    <div className="h-170  w-full   bg-[url('./netflix.png')]  bg-cover bg-center p-0">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl  text-red-500 font-bold italic pl-37 tracking-wider pt-6">
          NETFLIX
        </h1>
        <div className=" text-white pr-37 text-[17px] flex  gap-2 pt-6">
          <select className="h-8 w-32 text-white border bg-black rounded-md px-3">
            <option className="text-black bg-white">English</option>
            <option className="text-black bg-white">Hindi</option>
          </select>

          {isLoggedIn ? (
            <button
              onClick={() => setLoggedIn(!isLoggedIn)}
              className="bg-red-600 h-8 w-20 rounded-md cursor-pointer hover:bg-red-700"
            >
              Logout
            </button>
          ) : (
            <button
              onClick={() => setLoggedIn(!isLoggedIn)}
              className="bg-red-600 h-8 w-20 rounded-md cursor-pointer hover:bg-red-700"
            >
              LogIn
            </button>
          )}
        </div>
      </div>
      <div className="flex justify-center items-center h-full text-white flex-col">
        <p className="font-bold text-6xl">
          Unlimited movies,
          <br />
          <span className="flex justify-center">shows,and more</span>
        </p>
        <h1 className="text-2xl mt-3">Starts at ₹149. Cancel at any time.</h1>
        <h1 className="text-lg mt-3">
          Ready to watch? Enter your email to create or restart your membership.
        </h1>
        <div className="mt-3 flex gap-3 h-[75px] items-center">
          <input
            type="text"
            placeholder="Email Address"
            className="border ring-black bg-transparent h-14 w-96 rounded-sm hover:ring-2 hover:ring-white hover:rounded-md pt-2 pl-4 pr-4 pb-2 focus:outline-none focus:border-gray-500 text-xl"
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
