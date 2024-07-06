import React, { useEffect, useState } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
  List,
  ListItem,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartItemsCount } from "../features/cartSlice";
import logo from "../assets/images/logo-dark.svg";

function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <Typography
        as="a"
        href="#"
        variant="small"
        color="black"
        className="font-normal text-[16px] hover:text-[#f28f60] transition-all duration-200"
      >
        <NavLink
          to="/"
          className={({ isActive }) =>
            `flex items-center gap-2 py-2 pr-4 ${
              isActive ? "text-[#f28f60]" : ""
            }`
          }
        >
          Home
        </NavLink>
      </Typography>
      <Typography
        as="a"
        href="#"
        variant="small"
        color="black"
        className="font-normal text-[16px] hover:text-[#f28f60] transition-all duration-200"
      >
        <NavLink
          className={({ isActive }) =>
            `flex items-center gap-2 py-2 pr-4 ${
              isActive ? "text-[#f28f60]" : ""
            }`
          }
          to="/books"
        >
          Books
        </NavLink>
      </Typography>

      <Typography
        as="a"
        href="#"
        variant="small"
        color="black"
        className="font-normal text-[16px] hover:text-[#f28f60] transition-all duration-200"
      >
        <NavLink
          className={({ isActive }) =>
            `flex items-center gap-2 py-2 pr-4 ${
              isActive ? "text-[#f28f60]" : ""
            }`
          }
          to="/ContactUs"
        >
          Contact Us
        </NavLink>
      </Typography>
    </List>
  );
}

export function NavbarWithMegaMenu() {
  const [openNav, setOpenNav] = React.useState(false);
  const navigate = useNavigate();
  const [userImage, setUserImage] = useState("");
  const auth = localStorage.getItem("authenticated");
  useEffect(() => {
    const imageFromLocalStorage = localStorage.getItem("userImage");
    if (imageFromLocalStorage) {
      setUserImage(imageFromLocalStorage);
    }
  }, []);
  const handleNavigate = () => {
    navigate("/cart");
  };
  const handleSignIn = () => {
    navigate("/SignIn");
  };
  const itemCount = useSelector((state) => selectCartItemsCount(state));

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  return (
    <Navbar className="max-w-full container-main px-4 py-2 rounded-none shadow-none">
      <div className="flex items-center container-main text-blue-gray-900">
        <Link
          as="a"
          href="#"
          variant="h6"
          className="mr-4 cursor-pointer py-1.5 lg:ml-2"
          to="/"
        >
          <img src={logo} alt="" />
        </Link>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <div className="hidden gap-2 lg:flex">
          {auth ? (
            <img
              className="h-10 w-10 rounded-full "
              src={
                localStorage.getItem("userImage") ||
                "https://via.placeholder.com/150"
              }
              alt="Profile"
            />
          ) : (
            <Button
              variant="text"
              size="sm"
              className="bg-white hover:bg-white hover:text-[#f28f60]"
              onClick={handleSignIn}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
            </Button>
          )}

          <button
            variant="text"
            className="relative bg-white  transition-all duration-200"
            onClick={handleNavigate}
          >
            <div className="relative flex items-center justify-center  group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#f28f60"
                className="size-8  transition-all duration-200 group-hover:fill-[#f28f60]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
              <p className="absolute top-4 inset-2 flex items-center justify-center text-[#f28f60] text-sm font-bold transition-all duration-200 group-hover:text-black ">
                {itemCount}
              </p>
            </div>
          </button>
        </div>
        <IconButton
          variant="text"
          color="blue-gray"
          className="lg:hidden"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
        <div className="flex w-full flex-nowrap items-center gap-2 lg:hidden">
          {auth ? (
            <img
              className="h-10 w-10 rounded-full "
              src={
                localStorage.getItem("userImage") ||
                "https://via.placeholder.com/150"
              }
              alt="Profile"
            />
          ) : (
            <Button
              variant="text"
              size="sm"
              className="bg-white hover:bg-white hover:text-[#f28f60]"
              onClick={handleSignIn}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
                />
              </svg>
            </Button>
          )}

          <button
            variant="text"
            className="relative bg-white  transition-all duration-200"
            onClick={handleNavigate}
          >
            <div className="relative flex items-center justify-center  group">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="#f28f60"
                className="size-8  transition-all duration-200 group-hover:fill-[#f28f60]"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
                />
              </svg>
              <p className="absolute top-4 inset-2 flex items-center justify-center text-[#f28f60] text-sm font-bold transition-all duration-200 group-hover:text-black ">
                {itemCount}
              </p>
            </div>
          </button>
        </div>
      </Collapse>
    </Navbar>
  );
}
