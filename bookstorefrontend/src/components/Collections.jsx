import React from "react";
import series1 from "../assets/images/book-cover1.png";
import series2 from "../assets/images/book-cover2.png";
import series3 from "../assets/images/book-cover3.png";
import series4 from "../assets/images/book-cover4.png";
function Collections() {
  return (
    <>
      <div className="container-main gap-20 mb-10 px-4  flex-col lg:flex-row">
        <div className="left-series flex-1 justify-center items-center">
          <h1 className="text-[#9d7166] text-lg lg:text-[17px]">
            Complete Series
          </h1>

          <h1 className="text-5xl font-bold mb-5">Smoke And The Heart</h1>
          <p className="text-gray-800 mb-5 text-justify">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
            ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
            numquam eius modi tempora incidunt ut labore et dolore magnam
            aliquam quaerat voluptatem.
          </p>
          <>
            <button className="bg-[#946659] text-white px-6 py-3 text-sm rounded-md mb-3">
              Buy Complete Series
            </button>
          </>
        </div>
        <div className="right-series  flex-2 justify-center items-center">
          <div className="collections  grid grid-cols-1  gap-10 lg:grid-cols-2 ">
            <div className="first-collection">
              <img src={series1} alt="" />
              <img src={series2} alt="" />
            </div>
            <div className="second-collection">
              <img src={series3} alt="" />
              <img src={series4} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Collections;
