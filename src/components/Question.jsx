import React from "react";

const Question = ({ id, paragraph }) => {
  return (
    <div className="  md:mt-5 md:text-xl text-[15px] cursor-pointer ">
      <div>
        <h3 className="md:h-[84px] h-[40px] bg-neutral-700 md:my-3 my-1.5 md:pl-6 pl-3 flex items-center justify-between hover:bg-neutral-600 transition duration-300">
          {paragraph}
          <span className="md:text-3xl text-2xl font-bold md:pr-8 pr-4 ">+</span>
        </h3>
      </div>
    </div>
  );
};

export default Question;
