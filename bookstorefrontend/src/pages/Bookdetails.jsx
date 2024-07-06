import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { addItem } from "../features/cartSlice";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import series1 from "../assets/images/book-cover1.png";
import series2 from "../assets/images/book-cover2.png";
import series3 from "../assets/images/book-cover3.png";
import series4 from "../assets/images/book-cover4.png";
import Subscribe from "../components/Subscribe";

const books = [
  {
    id: 1,
    name: "This Dark Road to Mercy",
    image: series1,
    price: 6.75,
    description: "A thrilling novel by Kathryn Moris.",
    rating: 4,
    reviews: 1,
    exTax: 5.5,
    brands: "Penguin",
    productCode: "bk101",
    rewardPoints: 200,
    availability: "In Stock",
    tags: ["Thriller", "Drama"],
  },
  {
    id: 2,
    name: "Liar of Dreams",
    image: series2,
    price: 7.75,
    description: "A gripping tale of mystery and suspense.",
    rating: 5,
    reviews: 3,
    exTax: 6.5,
    brands: "HarperCollins",
    productCode: "bk102",
    rewardPoints: 250,
    availability: "In Stock",
    tags: ["Mystery", "Suspense"],
  },
  {
    id: 3,
    name: "Before The Devil Breaks You",
    image: series3,
    price: 8.75,
    description: "An intense and captivating story.",
    rating: 4.5,
    reviews: 5,
    exTax: 7.0,
    brands: "Simon & Schuster",
    productCode: "bk103",
    rewardPoints: 300,
    availability: "Out of Stock",
    tags: ["Horror", "Fantasy"],
  },
  {
    id: 4,
    name: "Now You See Me",
    image: series4,
    price: 9.75,
    description: "A fascinating narrative with unexpected twists.",
    rating: 4.8,
    reviews: 2,
    exTax: 8.0,
    brands: "Macmillan",
    productCode: "bk104",
    rewardPoints: 350,
    availability: "In Stock",
    tags: ["Thriller", "Crime"],
  },
];
const renderStars = (rating) => {
  const stars = [];
  for (let i = 1; i <= 5; i++) {
    if (i <= rating) {
      stars.push(
        <span key={i} className="text-yellow-500 text-lg font-bold mr-1">
          &#9733;
        </span>
      );
    } else {
      stars.push(
        <span key={i} className="text-gray-400 text-lg font-bold mr-1">
          &#9733;
        </span>
      );
    }
  }
  stars.push(
    <span key="rating-number" className="text-gray-600 text-sm ml-1">
      ({rating})
    </span>
  );
  return stars;
};
const BookDetails = () => {
  const { id } = useParams();
  const book = books.find((b) => b.id === parseInt(id));
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const handleAddtoCart = () => {
    if (isAuthenticated) {
      dispatch(addItem(book));
      toast.success("Item added to cart", {
        position: "bottom-right",
        autoClose: 3000,
      });
    } else {
      toast.error("Please sign in to proceed to checkout", {
        position: "bottom-right",
        autoClose: 3000,
      });
    }
  };

  return (
    <>
      <div className="container mx-auto my-8 p-4 bg-white ">
        <div className="flex flex-col lg:flex-row gap-6">
          <div className="flex-1">
            <img
              src={book.image}
              alt={book.name}
              className="w-full h-auto rounded-md"
            />
          </div>
          <div className="flex-1 flex flex-col">
            <h1 className="text-3xl font-bold mb-4">{book.name}</h1>
            <p className="text-xl text-gray-800 mb-2">By: Kathryn Moris</p>
            <div className="mb-4">
              <span className="text-gray-600 mr-2">Tags:</span>
              {book.tags.map((tag) => (
                <span
                  key={tag}
                  className="bg-gray-200 text-gray-800 text-sm font-semibold mr-2 px-2.5 py-0.5 rounded"
                >
                  {tag}
                </span>
              ))}
            </div>
            <div className="flex items-center mb-4">
              <span className="text-yellow-500 text-lg font-bold mr-2">
                {/* {book.rating} */}
                {renderStars(book.rating)}
              </span>
              <span className="text-gray-600">({book.reviews} Reviews)</span>
            </div>
            <p className="text-gray-700 mb-4">{book.description}</p>
            <p className="text-2xl font-bold text-[#9d7166] mb-6">
              ${book.price}
            </p>
            <p className="text-md text-gray-500 mb-2">
              Ex Tax: £{book.exTax.toFixed(2)}
            </p>
            <p className="text-md text-gray-500 mb-2">Brands: {book.brands}</p>
            <p className="text-md text-gray-500 mb-2">
              Product Code: {book.productCode}
            </p>
            <p className="text-md text-gray-500 mb-2">
              Reward Points: {book.rewardPoints}
            </p>
            <p className="text-md text-gray-500 mb-6">
              Availability: {book.availability}
            </p>
            <button
              className={`px-6 py-3 text-sm rounded-md ${
                book.availability === "In Stock"
                  ? "bg-[#9d7166] text-white"
                  : "bg-gray-400 text-white cursor-not-allowed"
              }`}
              onClick={
                book.availability === "In Stock" ? handleAddtoCart : null
              }
              disabled={book.availability !== "In Stock"}
            >
              + Add To Cart
            </button>
          </div>
        </div>
      </div>
      <Subscribe />
    </>
  );
};

export default BookDetails;
