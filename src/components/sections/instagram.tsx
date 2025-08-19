import React from "react";
import Post from "./post";

const Instagram = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      {/* title */}
      <h1 className="max-w-[85%] font-bold leading-[1.1] text-5xl sm:text-6xl md:text-7xl mb-8 text-center bg-gradient-to-r from-[#515BD4] via-[#8134AF] to-[#DD2A7B] bg-clip-text text-transparent">
        Follow Us on Instagram!
      </h1>

      {/* instagram profile gradient button link */}
      <div className="flex items-center justify-center mb-10">
        <a
          href="https://www.instagram.com/appdev_umd/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Visit our Instagram profile"
          className="flex  items-center justify-center group rounded-full w-34 p-[.15rem] bg-gradient-to-r from-[#515BD4] via-[#8134AF] to-[#DD2A7B] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-[#8134AF] focus-visible:ring-offset-white"
        >
          <span
            className="flex rounded-full h-full w-full items-center justify-center py-3
               bg-white text-black 
               transition-all duration-300
               group-hover:bg-transparent group-hover:text-white"
          >
            @appdev_umd
          </span>
        </a>
      </div>

      {/* instagram posts; surrounding divs act as top + bottom borders */}
      <div>
        <div className="h-1 bg-gradient-to-r from-[#DD2A7B] via-[#8134AF] to-[#515BD4]"></div>
        <div className="flex w-full gap-x-1 bg-gradient-to-r from-[#DD2A7B] via-[#8134AF] to-[#515BD4]">
          <Post
            imgSrc="/test.png"
            caption="An emotional ending to the semester as our final event marked not
              only the end of the school year but also the departure of our
              senior and founding class. founding class. founding class."
          />
          <Post
            imgSrc="/test3.png"
            caption="An emotional ending to the semester as our final event marked not
              only the end of the school year but also the departure of our
              senior and founding class. founding class. founding class."
            className="hidden sm:block"
          />
          <Post
            imgSrc="/test4.png"
            caption="An emotional ending to the semester as our final event marked not
              only the end of the school year but also the departure of our
              senior and founding class. founding class. founding class."
            className="hidden md:block"
          />
        </div>
        <div className="h-1 bg-gradient-to-r from-[#DD2A7B] via-[#8134AF] to-[#515BD4] hidden sm:block"></div>
        <div className="h-1 bg-gradient-to-r from-[#515BD4] via-[#8134AF] to-[#DD2A7B] block sm:hidden"></div>
      </div>
    </div>
  );
};

export default Instagram;
