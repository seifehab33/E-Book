import React, { useState } from "react";
import { Link } from "react-router-dom";
import Header from "../components/Header";
import series1 from "../assets/images/book-cover1.png";
import series2 from "../assets/images/book-cover2.png";
import series3 from "../assets/images/book-cover3.png";
import series4 from "../assets/images/book-cover4.png";
import { useDispatch, useSelector } from "react-redux";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addItem } from "../features/cartSlice";
import bundle from "../assets/images/bundle.png";
import Upcoming from "../components/Upcoming";
import Subscribe from "../components/Subscribe";
function Books() {
  const products = [
    { id: 1, name: "This Dark Road to Mercy", image: series1, price: 6.75 },
    { id: 2, name: "Liar of Dreams", image: series2, price: 7.75 },
    { id: 3, name: "Before The Devil Breaks You", image: series3, price: 8.75 },
    { id: 4, name: "Now You See Me", image: series4, price: 9.75 },
  ];

  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const [message, setMessage] = useState("");
  const [buttonerror, setbuttonerror] = useState(false);
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
  const handleAddtoCart = (product) => {
    if (isAuthenticated) {
      dispatch(addItem(product));
      setbuttonerror(false);
      showToast("Item added to cart", "success");
      setTimeout(() => {
        setMessage("");
      }, 3000);
    } else {
      showToast("Please sign in to proceed to checkout", "error");
      setbuttonerror(true);
    }
  };
  const handleAddbundle = () => {
    if (isAuthenticated) {
      dispatch(
        addItem({
          id: 5,
          name: "The Complete Series",
          image: bundle,
          price: 24.0,
        })
      );
      showToast("Item added to cart", "success");
      setbuttonerror(false);
      setTimeout(() => {
        setMessage("");
      }, 3000);
    } else {
      setbuttonerror(true);
      showToast("Please sign in to proceed to checkout", "error");
    }
  };
  return (
    <>
      <div className="bg-[#fcebe6] px-4 mb-4">
        <div className="container-main h-[500px] justify-center items-center">
          <div className="heading-books text-center">
            <h1 className="text-[4.6666666666667rem] text-black font-bold mb-10 ">
              Books
            </h1>
            <p className="text-sm">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit
            </p>
          </div>
        </div>
      </div>
      <Header bgColor="bg-white" />
      <div className="series-books my-[100px]">
        <div className="container-main gap-5  px-4  flex-col lg:flex-col">
          <div className="left-series flex-1 justify-center items-center text-center">
            <h1 className="text-[#9d7166] text-lg lg:text-[17px]">
              Complete Series
            </h1>

            <h1 className="text-5xl font-bold mb-5">Smoke And The Heart</h1>
            <p className="text-gray-800 mb-5 text-justify">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit.
            </p>
          </div>
          <div className="right-series flex-row justify-center items-center">
            <div className="collections grid grid-cols-2 gap-2 lg:grid-cols-4">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="product flex flex-col items-center gap-5"
                >
                  <img src={product.image} alt="" className="w-full h-auto" />
                  <h2 className="text-sm lg:text-xl  font-semibold">
                    {product.name}
                  </h2>
                  <button
                    className="bg-[#946659] text-white px-6 py-3 text-sm rounded-md"
                    onClick={() => handleAddtoCart(product)}
                  >
                    ${product.price} - Purchase
                  </button>
                </div>
              ))}
            </div>
          </div>
          {buttonerror && (
            <Link to="/SignIn">
              <button className="bg-[#946659] font-bold text-white px-4 py-2 rounded-md ">
                Sign In
              </button>
            </Link>
          )}
        </div>
      </div>
      <div className="buy-series my-[200px]">
        <div className="container-main justify-center items-center flex-col lg:flex-row gap-3 px-4">
          <div className="left-buy flex-1 justify-center items-center ">
            <h1 className="text-4xl font-extrabold mb-5">
              Buy a Complete <br /> Series{" "}
            </h1>
            <p className="text-md text-gray-500 mb-5">
              Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit
              aut fugit, sed quia consequuntur magn.
            </p>
            <button
              className="bg-[#946659] text-white px-6 py-3 text-sm rounded-md"
              onClick={handleAddbundle}
            >
              $24.00 - Purchase
            </button>
          </div>
          <div className="right-buy flex-1 justify-center items-center">
            <img src={bundle} alt="" className="w-full h-full" />
          </div>
        </div>
      </div>
      <Upcoming />
      <Subscribe />
      <ToastContainer />
    </>
  );
}

export default Books;
