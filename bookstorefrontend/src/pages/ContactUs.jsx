import React from "react";
import { MdEmail } from "react-icons/md";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
function ContactUs() {
  return (
    <>
      <div className="bg-[#fcebe6] px-4 mb-4">
        <div className="container-main h-[500px] justify-center items-center">
          <div className="heading-books text-center">
            <h1 className="text-[4.6666666666667rem] text-black font-bold mb-10 ">
              Contact
            </h1>
            <p className="text-sm">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit
            </p>
          </div>
        </div>
      </div>
      <div className="form-contact  mt-[-100px] mb-10">
        <div className="container-main shadow-lg shadow-gray-400 w-full max-w-4xl py-10 bg-white flex items-center flex-col mx-auto px-4">
          <div className="text-start">
            <h1 className="text-3xl font-extrabold">Get In Touch</h1>
            <p className="font-light text-gray-700">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit
            </p>
            <div className="flex items-center justify-start gap-3 mt-2">
              <MdEmail className="text-[#946661] text-4xl" />
              <p className="text-xl text-gray-800">mail@example.com</p>
            </div>
            <hr className="w-full border-gray-300 my-5" />
            <h1 className="text-3xl text-[#946661] font-bold my-5 ">
              Send Me a Message
            </h1>
            <form action="" className="flex flex-col gap-3 mt-3 w-full">
              <input
                type="text"
                className="px-4 border border-gray-300 text-[15px] py-3"
                placeholder="Your Name"
              />
              <input
                type="email"
                placeholder="Email"
                className="px-4 border border-gray-300 text-[15px] py-3"
              />
              <input
                type="text"
                placeholder="Subject"
                className="px-4 border border-gray-300 text-[15px] py-3"
              />
              <textarea
                name=""
                id=""
                placeholder="Message"
                className="px-4 border border-gray-300 text-[15px] py-3"
              ></textarea>
            </form>
            <button className="flex  bg-[#946661] text-white px-5 py-3 my-5 rounded-md">
              Send Message
            </button>
            <div className="social">
              <h1 className="text-xl font-semibold text-gray-800">Follow Me</h1>
              <div className="flex gap-4 justify-start mt-3">
                <div className="bg-[#946659] rounded-full p-2">
                  <FaFacebookF className="text-white w-5 h-5" />
                </div>
                <div className="bg-[#946659] rounded-full p-2">
                  <FaInstagram className="text-white w-5 h-5" />
                </div>
                <div className="bg-[#946659] rounded-full p-2">
                  <FaTwitter className="text-white w-5 h-5" />
                </div>
                <div className="bg-[#946659] rounded-full p-2">
                  <FaYoutube className="text-white w-5 h-5" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
