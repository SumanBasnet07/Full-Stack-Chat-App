import { useState } from "react";
import { Link } from "react-router-dom";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const Signup = () => {
  const [username, setUsername ] = useState("");
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [confirmPassword, setConfirmPassword] = useState("")
  const navigateTo = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const userInfo = {
      username,email,password,confirmPassword
    }
    axios.post('http://192.168.0.34:3000/user/signup', userInfo)
    .then((response)=>{
      toast.success("User Registered Go to Login page")
      navigateTo('/login')
    })
    .catch((error)=>{
      toast.error(error.response?.data.error)
    })
  };

  return (
    <div className="flex items-center justify-center h-[100vh]">
      <div className="lg:w-[50vw] w-screen lg:h-[90vh] max-h-[100vh] h-[100vh] bg-white lg:rounded-2xl relative sign-up">
        <div className="p-10">
          <h1 className="text-xl font-bold">Sign Up</h1>
          <p className="font-semibold">Just a few quick thing to get started</p>
        </div>
        <form action="post" className="px-10" onSubmit={handleRegister}>
          <label htmlFor="username" className="m-2 font-semibold">
            Username
          </label>
          <br />
          <input
            className="bg-white w-full px-3 py-2 rounded-xl border-1 border-b-gray-500 outline-none m-2"
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="email" className="m-2 font-semibold">
            Email ID
          </label>
          <br />
          <input
            className="bg-white w-full px-3 py-2 rounded-xl border-1 border-b-gray-500 outline-none m-2"
            type="text"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
          />
          <label htmlFor="password" className="m-2 font-semibold">
            New Password
          </label>
          <br />
          <input
            className="bg-white w-full px-3 py-2 rounded-xl border-1 border-b-gray-500 outline-none m-2"
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
          />
          <label htmlFor="password" className="m-2 font-semibold">
            Confirm Password
          </label>
          <br />
          <input
            className="bg-white w-full px-3 py-2 rounded-xl border-1 border-b-gray-500 outline-none m-2"
            type="password"
            value={confirmPassword}
            onChange={(e)=>setConfirmPassword(e.target.value)}
          />
          <button
            className="bg-black text-white w-full p-3 m-2 rounded-xl font-semibold"
            type="submit"
          >
            Sign Up
          </button>
        </form>
        <p className="text-center text-gray-500">Already have an account?
          <Link to={'/login'}className="font-semibold text-black">Log In</Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
