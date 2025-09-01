

import { useState, useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { HiMenu, HiX } from "react-icons/hi"; // Make sure to install react-icons

const Navbar = () => {
  const { user, setUser } = useContext(AuthContext);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    setIsOpen(false);
    navigate("/"); // Navigate to home page after logout
  };

  return (
    <nav className="bg-[#003566] text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo / App Name */}
        <h2 className="text-xl font-bold">DevTasker</h2>

        {/* Hamburger button for mobile */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
          </button>
        </div>

        {/* Links */}
        <div
          className={`flex-col md:flex md:flex-row md:items-center gap-4 absolute md:static bg-[#003566] w-full md:w-auto left-0 md:left-auto transition-all duration-300 ease-in-out ${
            isOpen ? "top-16 flex" : "top-[-200px] hidden md:flex"
          }`}
        >
          {!user ? (
            <>
              <Link
                to="/"
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 hover:text-gray-200 transition-colors block"
              >
                Home
              </Link>
              <Link
                to="/register"
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 hover:text-gray-200 transition-colors block"
              >
                Register
              </Link>
              <Link
                to="/login"
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 hover:text-gray-200 transition-colors block"
              >
                Login
              </Link>
            </>
          ) : (
            <>
              <Link
                to="/dashboard"
                onClick={() => setIsOpen(false)}
                className="px-4 py-2 hover:text-gray-200 transition-colors block"
              >
                Dashboard
              </Link>
              <button
                onClick={logout}
                className="bg-white text-blue-600 px-4 py-2 rounded-md font-semibold hover:bg-gray-100 transition-colors block"
              >
                Logout
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
