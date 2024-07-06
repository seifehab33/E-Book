import React from "react";
import sub from "../assets/images/susbcribe-image.png";
function Subscribe() {
  return (
    <>
      <div className="bg-[#fcebe6] py-10  px-4 ">
        <div className="container-main flex-col lg:flex-row gap-10 ">
          <div className="left-sub flex-1 justify-center items-center">
            <h1 className="text-5xl font-bold mb-10">
              Subscribe Now to Get <br /> Regular Updates
            </h1>
            <div className="flex items-center gap-4 sm:gap-10 relative">
              <div className="relative w-full sm:w-auto">
                <input
                  type="email"
                  placeholder="Your Email..."
                  required
                  className="w-full sm:w-[400px] h-10 pl-2 pr-20 border border-gray-700"
                />
                <button className="sm:hidden bg-[#946659] absolute right-0 top-0 bottom-0 h-10 px-5 text-white hover:shadow hover:shadow-gray-700 transition-all duration-200">
                  Submit
                </button>
              </div>
              <button className="hidden sm:inline-block bg-[#946659] h-10 px-5 text-white hover:shadow hover:shadow-gray-700 transition-all duration-200">
                Submit
              </button>
            </div>
          </div>
          <div className="right-sub flex-2 justify-center items-center">
            <img src={sub} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}

export default Subscribe;