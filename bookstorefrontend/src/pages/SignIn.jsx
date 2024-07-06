import React, { useState } from "react";
import { FaCamera } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { signIn } from "../features/authSlice";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showUpload, setShowUpload] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);

  const handleSignIn = () => {
    // Store only the email in local storage
    localStorage.setItem("user", JSON.stringify({ email }));
    localStorage.setItem("authenticated", "true");
    // Dispatch sign-in action
    dispatch(signIn({ email }));
    navigate("/");
  };
  const handleFileInputChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    // Handle further logic such as uploading the file to a server or updating the profile picture
    console.log("Selected file:", file);
    // For simplicity, clear the selected file state after handling
    saveFileInLocalStorage(file);
  };
  const saveFileInLocalStorage = (file) => {
    try {
      const reader = new FileReader();
      reader.onloadend = () => {
        localStorage.setItem("userImage", reader.result);
      };
      reader.readAsDataURL(file);
    } catch (error) {
      console.error("Error saving file to localStorage:", error);
    }
  };
  const handleCameraClick = () => {
    // Programmatically trigger the file input when clicking on the camera icon
    const fileInput = document.getElementById("fileInput");
    fileInput.click();
  };
  return (
    <>
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-md w-full">
          <h2 className="text-3xl font-bold text-center mb-6">Sign In</h2>
          <form className="space-y-4">
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#946661] focus:border-[#946661] sm:text-sm"
                placeholder="you@example.com"
              />
            </div>
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-[#946661] focus:border-[#946661] sm:text-sm"
                placeholder="••••••••"
              />
            </div>

            <div>
              <button
                type="button"
                onClick={handleSignIn}
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#946661] hover:bg-[#7b4f4f] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#946661]"
              >
                Sign In
              </button>
            </div>
          </form>
          <div className="mt-6 flex items-center justify-center">
            <div className="relative">
              <label htmlFor="fileInput">
                <img
                  className="h-24 w-24 rounded-full object-cover cursor-pointer"
                  src={
                    selectedFile
                      ? URL.createObjectURL(selectedFile)
                      : "https://via.placeholder.com/150"
                  }
                  alt="Profile"
                />
                <div
                  className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 rounded-full opacity-0 hover:opacity-100 cursor-pointer"
                  onClick={handleCameraClick}
                >
                  <FaCamera className="text-white w-6 h-6" />
                  {/* Hidden file input */}
                  <input
                    type="file"
                    id="fileInput"
                    className="hidden"
                    onChange={handleFileInputChange}
                    accept="image/*"
                  />
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default SignIn;
