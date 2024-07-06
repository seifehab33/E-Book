import React from "react";
import logo from "../assets/images/logo-white.svg";
import { NavLink } from "react-router-dom";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
function Footer() {
  return (
    <>
      <div className="bg-[#171921] py-10">
        <div className="container-main items-center text-white flex-col lg:flex-row gap-5">
          <img src={logo} alt="" />
          <div className="links-footer flex items-center gap-5">
            <NavLink
              to="/"
              className={({ isActive }) => (isActive ? "text-[#f28f60] " : "")}
            >
              Home
            </NavLink>
            <NavLink
              to="/books"
              className={({ isActive }) => (isActive ? "text-[#f28f60] " : "")}
            >
              Books
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? "text-[#f28f60] " : "")}
            >
              Contact
            </NavLink>
          </div>
          <div className="social-footer flex gap-5">
            <FaFacebook className="w-7 h-7" />
            <FaInstagram className="w-7 h-7" />
            <FaTwitter className="w-7 h-7" />
          </div>
        </div>
        <div>
          <hr className="my-5 " />
          <p className="flex justify-center items-center text-white ">
            Copyright © 2024 eBook | Powered by S|E
          </p>
        </div>
      </div>
    </>
  );
}

export default Footer;
