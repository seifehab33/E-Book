import React from "react";
import logo1 from "../assets/images/featured-logo1.svg";
import logo2 from "../assets/images/featured-logo2.svg";
import logo3 from "../assets/images/featured-logo3.svg";
import logo4 from "../assets/images/featured-logo4.svg";
import logo5 from "../assets/images/featured-logo5.svg";
function Features() {
  return (
    <>
      <div className="my-[5%]">
        <h1 className="text-center text-black text-[20px] font-bold">
          AS FEATURED ON
        </h1>

        <div className="container-main grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          <img src={logo1} alt="" />
          <img src={logo2} alt="" />
          <img src={logo3} alt="" />
          <img src={logo4} alt="" />
          <img src={logo5} alt="" />
        </div>
      </div>
    </>
  );
}

export default Features;
