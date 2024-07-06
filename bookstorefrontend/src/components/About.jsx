import React from "react";
import about from "../assets/images/about-image.png";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

function About() {
  return (
    <>
      <div className="about mb-10 px-4 ">
        <div className="container-main flex items-center justify-center gap-20 flex-col lg:flex-row ">
          <div className="left-about flex-2 flex justify-center items-center order-2 lg:order-1">
            <img src={about} alt="" className="max-w-full h-auto" />
          </div>
          <div className="right-about flex-1 justify-center items-center order-1 lg:order-2 ">
            <h1 className="text-4xl font-bold mb-5">A Word From The Author</h1>
            <p className="text-gray-800 mb-5 text-justify">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem
              ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia
              non numquam eius modi tempora incidunt ut labore et dolore magnam
              aliquam quaerat voluptatem.
            </p>
            <>
              <button className="bg-[#946659] text-white px-6 py-3 text-sm rounded-md mb-3">
                Read More
              </button>
            </>
            <hr className="border-t border-[#946659] mb-4" />
            <h3 className="text-[18px] font-bold">Kathryn Moris</h3>
            <p className="text-sm">Entrepreneur, Writer and Speaker.</p>
            <div className="flex gap-2">
              <div className="bg-[#946659] rounded-md p-1">
                <FaFacebookF className="text-white w-5 h-5" />
              </div>
              <div className="bg-[#946659] rounded-md p-1">
                <FaInstagram className="text-white w-5 h-5" />
              </div>
              <div className="bg-[#946659] rounded-md p-1">
                <FaTwitter className="text-white w-5 h-5" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
