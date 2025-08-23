
import { useState, useContext } from "react";
import api from "../api/axios";
import { AuthContext } from "../context/AuthContext";
import { useNavigate, Link } from "react-router-dom";

const Login = () => {
  const { setUser } = useContext(AuthContext);
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.email || !form.password) return;
    try {
      const { data } = await api.post("/auth/login", form);
      setUser(data);
      navigate("/dashboard");
    } catch (error) {
      console.error("Login failed", error);
      alert("Invalid credentials!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-lg w-full max-w-sm space-y-6"
      >
        <h2 className="text-3xl font-bold text-gray-800 text-center">Login</h2>
        
        <div className="space-y-4">
          <input
            type="email"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
          
          <input
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            className="w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400 transition"
          />
        </div>

        <div className="flex justify-between items-center text-sm">
          <Link to="/forgot-password" className="text-blue-500 hover:underline">
            Forgot Password?
          </Link>
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md font-semibold hover:bg-blue-600 transition-colors"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
