import React from "react";

const Instagram = () => {
  return (
    <div>
      <h1 className="font-bold text-[70px] text-blue-500 mb-8 text-center">
        Follow Our Instagram!
      </h1>

      <div className="flex w-full space-x-1">
        <div className="h-[572px] flex-1 bg-[#D9D9D9] relative"></div>
        <div className="h-[572px] flex-1 bg-green-400 relative group">
          <div className="absolute inset-0 bg-[#D9D9D9] group-hover:bg-pink-100 transition-colors duration-500 z-0" />

          <div
            className="absolute inset-0 z-10 opacity-0 translate-y-4
               group-hover:opacity-100 group-hover:translate-y-0
               transition-all duration-500 ease-out"
          >
            <img
              src="/photoicon.svg"
              alt="Icon 1"
              className="absolute top-2 right-2 w-12 h-12"
            />
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col gap-y-10 items-center px-4">
              <div className="flex items-center justify-center gap-x-2">
                <img
                  src="/likeicon.svg"
                  alt="Heart Icon"
                  className="w-12 h-12"
                />
                <p className="bold">5K</p>
                <img
                  src="/commenticon.svg"
                  alt="Plus Icon"
                  className="w-12 h-12"
                />
                <p className="bold">305</p>
              </div>
              <div className="flex justify-center items-center">
                <p className="text-center max-w-md">
                  "An emotional ending to the semester as our final event marked
                  not only the end of the school year but also the departure of
                  our senior and founding class."
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[572px] flex-1 bg-[#D9D9D9] relative"></div>
      </div>
    </div>
  );
};

export default Instagram;
