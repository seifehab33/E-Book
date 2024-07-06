import React, { useState } from "react";
import amazon from "../assets/images/amazon-logo-svgrepo-com.svg";
import heading1 from "../assets/images/hero-image01.png";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../features/cartSlice";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function Header({ bgColor }) {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [message, setMessage] = useState("");
  const [buttonerror, setbuttonerror] = useState(false);

  const addItemToCart = () => {
    dispatch(
      addItem({
        id: 1,
        image: heading1, // Assuming heading1 is defined somewhere
        name: "The Dark Road to Mercy",
        price: 6.75,
      })
    );
  };
  const showToast = (message, type) => {
    if (type === "success") {
      toast.success(message, {
        position: "bottom-right",
        autoClose: 3000,
      });
    } else {
      toast.error(message, {
        position: "bottom-right",
        autoClose: 3000,
      });
    }
  };
  const handlePurchase = () => {
    if (isAuthenticated) {
      addItemToCart();
      showToast("Item added to cart", "success");
      setbuttonerror(false);
    } else {
      showToast("Please sign in to proceed to checkout", "error");
      setbuttonerror(true);
    }
  };
  return (
    <>
      <div
        className={`${bgColor} text-white heading mb-6 lg:mb-10 px-4 py-12 lg:py-0`}
      >
        <div className="container-main flex flex-col lg:flex-row gap-10 justify-center items-center">
          {/* Left Heading Section */}
          <div className="left-heading flex flex-col gap-5 flex-1">
            <h1 className="text-[#9d7166] text-lg lg:text-[17px]">
              New Release
            </h1>
            <h1 className="text-black  font-bold text-6xl leading-[1.75em]">
              This Dark <br /> Road to Mercy
            </h1>
            <p className="text-[#766a65]">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magni dolores eos qui ratione
              voluptatem sequi nesciunt.
            </p>
            <div className="button-heading flex gap-3">
              <button
                className="bg-[#946659] font-bold text-white px-5 py-3 rounded-md"
                onClick={handlePurchase}
              >
                $6.75 - Purchase
              </button>

              <button className="flex justify-center items-center font-bold bg-white text-black gap-2 px-3 py-2 rounded-md hover:bg-[#e95930] hover:text-white transition-all duration-500">
                <img src={amazon} className="w-6 h-6" alt="" />
                Read on Kindle
              </button>
            </div>
            {buttonerror && (
              <Link to="/SignIn">
                <button className="bg-[#946659] font-bold text-white px-4 py-2 rounded-md">
                  Sign In
                </button>
              </Link>
            )}
          </div>

          {/* Right Heading Section */}
          <div className="right-heading flex-2 lg:flex-2 justify-center items-center my-[-20px] lg:mt-10 shadow-lg shadow-gray-700">
            <img src={heading1} alt="" className="max-w-full h-auto " />
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
