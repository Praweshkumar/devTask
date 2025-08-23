
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { user, setUser } = useContext(AuthContext);

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <nav className="flex justify-between items-center bg-blue-600 text-white px-6 py-4 shadow-md">
      {/* Logo / App Name */}
      <h2 className="text-xl font-bold">DevTasker</h2>

      {/* Right side links */}
      <div className="flex gap-4 items-center">
        {!user ? (
          <>
            <Link
              to="/register"
              className="hover:text-gray-200 transition-colors"
            >
              Register
            </Link>
            <Link
              to="/login"
              className="hover:text-gray-200 transition-colors"
            >
              Login
            </Link>
          </>
        ) : (
          <>
            <Link
              to="/dashboard"
              className="hover:text-gray-200 transition-colors"
            >
              Dashboard
            </Link>
            <button
              onClick={logout}
              className="bg-white text-blue-600 px-4 py-2 rounded-md font-semibold hover:bg-gray-100 transition-colors"
            >
              Logout
            </button>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
