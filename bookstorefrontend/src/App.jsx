import { NavbarWithMegaMenu } from "./components/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Books from "./pages/Books";
import ContactUs from "./pages/ContactUs";
import Footer from "./components/Footer";
import Cart from "./pages/Cart";
import SignIn from "./pages/SignIn";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import BookDetails from "./pages/Bookdetails";
function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <NavbarWithMegaMenu />
        <ToastContainer />
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/books" element={<Books />} />
            <Route path="/ContactUs" element={<ContactUs />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/SignIn" element={<SignIn />} />
            <Route path="/book/:id" element={<BookDetails />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
