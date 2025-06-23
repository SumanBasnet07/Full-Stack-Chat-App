import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { useAuth } from "../context/AuthProvider"; // ✅ custom hook
import toast from "react-hot-toast";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { setAuthUser } = useAuth(); // ✅ use global auth context
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    const userInfo = { email, password };

    try {
      const response = await axios.post(
        "http://192.168.0.34:3000/user/login",
        userInfo,
        {
          withCredentials: true,
        }
      );
      if (response.data) {
        // Save to localStorage and Context
        localStorage.setItem("ChatApp", JSON.stringify(response.data));
        setAuthUser(response.data); // ✅ set global state

        // Redirect to home
        navigate("/");
        toast.success("Successfully Logged in")
      }
    } catch (error) {
      toast.error(error.response?.data.error);
    }
  };
  return (
    <div className="flex items-center justify-center h-[100vh]">
      <div className="lg:w-[50vw] w-screen lg:h-[90vh] max-h-[100vh] h-[100vh] bg-white lg:rounded-2xl relative sign-up">
        <div className="p-10">
          <h1 className="text-xl font-bold">Sign Up</h1>
          <p className="font-semibold">Just a few quick thing to get started</p>
        </div>
        <form action="post" className="px-10" onSubmit={handleLogin}>
          <label htmlFor="email" className="m-2 font-semibold">
            Email ID
          </label>
          <br />
          <input
            className="bg-white w-full px-3 py-2 rounded-xl border-1 border-b-gray-500 outline-none m-2"
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password" className="m-2 font-semibold">
            Password
          </label>
          <br />
          <input
            className="bg-white w-full px-3 py-2 rounded-xl border-1 border-b-gray-500 outline-none m-2"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="bg-black text-white w-full p-3 m-2 rounded-xl font-semibold"
            type="submit"
          >
            Log In
          </button>
        </form>
        <p className="text-center text-gray-500">
          Don't have an account?{" "}
          <Link to="/signup" className="text-black font-semibold">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
