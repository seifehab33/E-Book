import React from "react";
import upcoming from "../assets/images/upcoming-image2.png";
function Upcoming() {
  return (
    <>
      <div className="container-main my-5 px-4 flex-col lg:flex-row gap-5">
        <div className="left-upcoming flex-1 justify-center items-center">
          <img
            src={upcoming}
            className="max-w-full h-auto"
            alt="upcoming-book"
          />
        </div>
        <div className="right-upcoming flex-1 justify-center items-center">
          <h1 className="text-4xl font-bold mb-5 tracking-tight">
            Upcoming Book
          </h1>
          <p className="text-gray-800 mb-5 text-justify">
            Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut
            fugit, sed quia consequuntur magni dolores eos qui ratione
            voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
            ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non
            numquam eius modi tempora incidunt ut labore et dolore magnam
            aliquam quaerat voluptatem.
          </p>
          <>
            <button className="bg-[#946659] text-white px-8 py-3 text-sm rounded-md mb-3">
              Notify Me
            </button>
          </>
        </div>
      </div>
    </>
  );
}

export default Upcoming;
